import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center space-y-6">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover shadow-lg"
        />
        <h2 className="text-3xl font-bold text-blue-700">WHTechno</h2>
        <p className="text-gray-700 text-center max-w-xl">
          I am a developer passionate about building blockchain infrastructure and supporting decentralized projects worldwide.
        </p>

        <div className="flex space-x-6 text-blue-600 text-2xl">
          <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer" aria-label="Telegram">
            <i className="ri-telegram-fill"></i>Telegram
          </a>
          <a href="mailto:youremail@example.com" aria-label="Email">
            <i className="ri-mail-line"></i>Email
          </a>
          <a href="https://discord.gg/yourdiscord" target="_blank" rel="noreferrer" aria-label="Discord">
            <i className="ri-discord-fill"></i>Discord
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="ri-github-fill"></i>GitHub
          </a>
          <a href="https://x.com/yourx" target="_blank" rel="noreferrer" aria-label="X">
            <i className="ri-twitter-fill"></i>X
          </a>
        </div>
      </div>
    </div>
  );
}
