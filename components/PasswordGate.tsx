"use client";

import { useState, useEffect } from "react";

const PASSWORD = "Pizzaneverwins";
const STORAGE_KEY = "portfolio_unlocked";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const attempt = () => {
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 400);
    }
  };

  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-[60vh] flex items-center px-[230px]">
      <div className="flex flex-col gap-3">
        <p className="text-xs tracking-widest text-neutral-400 uppercase">
          This project is password protected
        </p>
        <div className={`flex items-center gap-4 ${error ? "animate-shake" : ""}`}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && attempt()}
            placeholder="Password"
            autoFocus
            className={`text-sm border-b ${error ? "border-red-400" : "border-black/20 focus:border-black"} outline-none py-1 w-48 bg-transparent placeholder-neutral-300 transition-colors`}
          />
          <button
            onClick={attempt}
            className="text-xs tracking-wide text-neutral-400 hover:text-black transition-colors"
          >
            Unlock →
          </button>
        </div>
      </div>
    </div>
  );
}
