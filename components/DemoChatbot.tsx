"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/** --- Config --- */
const DEFAULT_LS_KEY = "demoChatbotConversation";

export type ChatRole = "user" | "bot";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  time: string; // ISO
};

export type ChatIntent = {
  id: string;
  /** Regex tested against the user message */
  match: RegExp;
  /** Build the reply string (can use input msg) */
  reply: (msg: string) => string;
  /** Optional quick replies to show after this intent is triggered */
  quick?: string[];
};

export type DemoChatbotProps = {
  /** Bot display name */
  botName?: string;
  /** LocalStorage key for persistence */
  storageKey?: string;
  /** Override or extend default intents */
  intentsOverride?: ChatIntent[];
  /** Initial quick replies */
  initialSuggestions?: string[];
  /** Optional: called when “Book Now” or other action phrases are used */
  onAction?: (action: string) => void;
};

/** --- Default intents (edit/extend via props) --- */
const defaultIntents = (botName: string): ChatIntent[] => [
  {
    id: "greeting",
    match: /^(hi|hello|hey|good (morning|afternoon|evening))\b/i,
    reply: () =>
      `Hi! I’m ${botName}. I can help with appointments, pricing, hours, and directions. Ask me anything!`,
  },
  {
    id: "hours",
    match: /(hour|open|close|schedule|time)s?/i,
    reply: () =>
      "We’re open Mon–Sat, 9:00 AM–6:00 PM. Last appointment starts at 5:30 PM.",
  },
  {
    id: "pricing",
    match: /(cost|price|pricing|fee|how much)/i,
    reply: () =>
      "A basic cleaning starts at ₱1,500. Whitening from ₱6,500. Orthodontic consult is ₱1,000 (waived if you proceed).",
  },
  {
    id: "appointment",
    match: /(book|appoint|schedule|reservation|visit)/i,
    reply: () =>
      "To book, tell me a date (e.g., “Next Tue 10 AM”) and your name, or tap **Book Now** below. (Demo only—no server.)",
    quick: ["Book Now", "Next Tue 10AM", "Earliest slot"],
  },
  {
    id: "location",
    match: /(where|address|location|map|how to get)/i,
    reply: () =>
      "We’re at 5332 Edmond St, Las Vegas, NV 89139. Free parking available. Need a Google Maps link?",
    quick: ["Send map link", "Parking info"],
  },
  {
    id: "contact",
    match: /(contact|phone|email|reach)/i,
    reply: () =>
      "Call us at 725-1355-5678 or email support@chateuhotel.com. For urgent concerns, please call.",
  },
  {
    id: "fallback",
    match: /.*/,
    reply: (msg) =>
      `I’m a demo bot right now and don’t have a live connection. You said: “${msg}”. Try asking about **hours, pricing, booking, or location**.`,
  },
];

/** --- Utilities --- */
const nowISO = () => new Date().toISOString();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** --- UI bits --- */
type BubbleProps = {
  role: ChatRole;
  text: string;
  time: string;
};
const Bubble: React.FC<BubbleProps> = ({ role, text, time }) => {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 shadow ${
          isUser
            ? "bg-khaki text-white"
            : "bg-white/10 text-slate-100 border border-white/10 dark:bg-lightBlack/50"
        }`}
      >
        <div className="whitespace-pre-wrap">{text}</div>
        <div className="mt-1 text-[10px] opacity-70">
          {new Date(time).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

/** --- Component --- */
const DemoChatbot: React.FC<DemoChatbotProps> = ({
  botName = "Assistant",
  storageKey = DEFAULT_LS_KEY,
  intentsOverride,
  initialSuggestions = [
    "What are your hours?",
    "How much is cleaning?",
    "Book Now",
  ],
  onAction,
}) => {
  const intents: ChatIntent[] = intentsOverride ?? defaultIntents(botName);

  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as ChatMessage[]) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [suggested, setSuggested] = useState<string[]>(initialSuggestions);

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(messages));
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, storageKey]);

  // greet once when opened first time
  useEffect(() => {
    if (open && messages.length === 0) {
      void botSay(
        "Hi! I’m your demo assistant. Ask about hours, prices, or book an appointment."
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const userSay = (text: string) => {
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", text, time: nowISO() },
    ]);
  };

  const botSay = async (text: string) => {
    setTyping(true);
    await sleep(Math.min(1600, 400 + text.length * 15));
    setTyping(false);
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "bot", text, time: nowISO() },
    ]);
  };

  const handleCommand = async (raw: string): Promise<boolean> => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "/clear") {
      setMessages([]);
      localStorage.removeItem(storageKey);
      await botSay("Conversation cleared. How can I help?");
      return true;
    }
    if (cmd === "/help") {
      await botSay(
        "Commands: /help, /clear. I can answer hours, pricing, booking, and location."
      );
      return true;
    }
    return false;
  };

  const getReply = (msg: string): { text: string; quick?: string[] } => {
    const found =
      intents.find((i) => i.match.test(msg)) ?? intents[intents.length - 1];
    return { text: found.reply(msg), quick: found.quick };
  };

  const onSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setInput("");

    if (await handleCommand(trimmed)) return;

    // optional action hook
    if (onAction && /book now/i.test(trimmed)) {
      onAction("book");
    }

    userSay(trimmed);
    const { text: reply, quick } = getReply(trimmed);

    setSuggested(quick && quick.length > 0 ? quick : initialSuggestions);
    await botSay(reply);
  };

  const onQuick = (q: string) => void onSend(q);

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-khaki text-white w-14 h-14 shadow-lg hover:opacity-90"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[360px] max-w-[92vw] rounded-2xl border border-white/10 bg-whiteSmoke/90 backdrop-blur dark:bg-normalBlack/90 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <div className="text-sm font-semibold text-lightBlack dark:text-white">
                {botName}
              </div>
              <div className="text-[11px] text-slate-400">
                Demo chatbot — no server connected
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded px-2 py-1 text-xs text-slate-300 hover:bg-white/10"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollerRef}
            className="max-h-[50vh] overflow-y-auto px-3 py-3 space-y-2"
          >
            {messages.map((m) => (
              <Bubble key={m.id} role={m.role} text={m.text} time={m.time} />
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-3 py-2 text-sm bg-white/10 border border-white/10 text-slate-100">
                  <span className="inline-flex items-center gap-1">
                    <i className="animate-pulse">•</i>
                    <i className="animate-pulse [animation-delay:150ms]">•</i>
                    <i className="animate-pulse [animation-delay:300ms]">•</i>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {suggested.length > 0 && (
            <div className="flex flex-wrap gap-2 px-3 pb-2">
              {suggested.map((q) => (
                <button
                  key={q}
                  onClick={() => onQuick(q)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend(input)}
              placeholder='Type a message… (try "pricing") — /help'
              className="flex-1 rounded-md bg-transparent px-3 py-2 text-sm text-lightBlack dark:text-slate-100 outline-none border border-white/10 focus:border-khaki"
            />
            <button
              onClick={() => onSend(input)}
              className="rounded-md bg-khaki px-3 py-2 text-sm text-white hover:opacity-90"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoChatbot;
