"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mt-10 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-slate-900">
          Was this page helpful?
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            👍 Yes
          </button>
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            👎 No
          </button>
        </div>
      </div>

      {submitted && (
        <p className="mt-4 text-sm font-medium text-blue-600">
          Thank you for your feedback!
        </p>
      )}
    </div>
  );
}
