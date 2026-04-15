'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ArticleAudioPlayer() {
  const [supported, setSupported] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setSupported('speechSynthesis' in window);
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const getArticleText = () => {
    const article = document.querySelector('article');
    if (!article) return '';
    // Only grab readable text nodes — skip UI labels inside components
    const elements = article.querySelectorAll('p, h2, h3, blockquote');
    return Array.from(elements)
      .map((el) => (el as HTMLElement).innerText.trim())
      .filter(Boolean)
      .join('. ');
  };

  const play = useCallback(() => {
    const text = getArticleText();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => { setPlaying(false); setPaused(false); };
    utterance.onerror = () => { setPlaying(false); setPaused(false); };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
    setPaused(false);
  }, []);

  const pause = () => {
    window.speechSynthesis.pause();
    setPlaying(false);
    setPaused(true);
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setPlaying(true);
    setPaused(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="flex items-center gap-3 mb-12">
      {!playing && !paused && (
        <button
          onClick={play}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-black transition-colors"
        >
          <span className="w-6 h-6 rounded-full border border-black/15 flex items-center justify-center">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
              <path d="M0 0l8 5-8 5z" />
            </svg>
          </span>
          Listen to article
        </button>
      )}

      {playing && (
        <button
          onClick={pause}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-black transition-colors"
        >
          <span className="w-6 h-6 rounded-full border border-black/15 flex items-center justify-center">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
              <rect x="0" y="0" width="3" height="10" />
              <rect x="5" y="0" width="3" height="10" />
            </svg>
          </span>
          Pause
        </button>
      )}

      {paused && (
        <button
          onClick={resume}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400 hover:text-black transition-colors"
        >
          <span className="w-6 h-6 rounded-full border border-black/15 flex items-center justify-center">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
              <path d="M0 0l8 5-8 5z" />
            </svg>
          </span>
          Resume
        </button>
      )}

      {(playing || paused) && (
        <button
          onClick={stop}
          className="text-xs tracking-widest uppercase text-neutral-300 hover:text-black transition-colors"
        >
          Stop
        </button>
      )}
    </div>
  );
}
