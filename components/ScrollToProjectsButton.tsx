"use client";

export default function ScrollToProjectsButton() {
  function handleClick() {
    const container = document.getElementById("horizontal-scroll-container");
    if (!container) return;
    container.scrollTo({ top: window.innerWidth, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-3 bg-transparent text-[#ff453c] border-[3px] border-[#ff453c] rounded-full font-medium transition-opacity hover:opacity-70 cursor-pointer"
      style={{ fontSize: "40px", padding: "28px 42px", lineHeight: "1", letterSpacing: "0.08em", transform: "translateY(-22px)" }}
    >
      This way <span style={{ fontSize: "44px", lineHeight: "1" }}>→</span>
    </button>
  );
}
