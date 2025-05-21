import React, { useEffect, useState } from "react";

const typingTexts = [
  "Building Infrastructure Together",
  "Empowering Blockchain Projects",
  "Solving Every Difficulty",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing
        setDisplayText((prev) => prev + typingTexts[textIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === typingTexts[textIndex].length) {
          setDeleting(true);
        }
      } else {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
          setCharIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, displayText, textIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-700 text-white py-28 px-6 rounded-lg shadow-lg max-w-5xl mx-auto select-none">
      {/* Background animated circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse mix-blend-soft-light -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full animate-ping mix-blend-soft-light translate-x-24 translate-y-24"></div>

      {/* Animated typing text */}
      <h1 className="text-5xl sm:text-6xl font-extrabold h-20 whitespace-nowrap overflow-hidden border-r-4 border-white pr-2">
        {displayText}
      </h1>

      <p className="mt-8 text-xl max-w-3xl mx-auto">
        Empowering blockchain & infrastructure projects with modern, reliable solutions. Join us and solve every difficulty, together.
      </p>
    </section>
  );
}
