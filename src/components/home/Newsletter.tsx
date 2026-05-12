"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setDone(true);
  }

  return (
    <section className="py-14 bg-emerald-600">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Get 10% Off Your First Order
        </h2>
        <p className="text-emerald-100 mb-7 text-sm">
          Sign up to our newsletter for exclusive offers, restocks and professional tips delivered straight to your inbox.
        </p>

        {done ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 rounded-xl px-6 py-4 text-white font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Thanks! Your 10% discount code is on its way.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#1A0536] hover:bg-[#2D1B4E] text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
            >
              Get 10% Off
            </button>
          </form>
        )}
        <p className="text-emerald-200 text-xs mt-4">
          No spam. Unsubscribe anytime. See our{" "}
          <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
}
