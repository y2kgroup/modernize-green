'use client';

import { useState } from 'react';

export default function ContactForm({ endpoint }) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    if (!endpoint) {
      // No endpoint configured — fall back to mailto
      const subject = encodeURIComponent(`Website inquiry from ${payload.name}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || '—'}\n\nMessage:\n${payload.message}`
      );
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus('sent');
      e.target.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-6 text-green-800">
        <div className="font-semibold">Thanks — we got your message.</div>
        <p className="mt-1 text-sm">We'll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-brand-ink">Name</span>
          <input name="name" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-brand-ink">Email</span>
          <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none" />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-brand-ink">Phone (optional)</span>
        <input name="phone" className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none" />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-brand-ink">How can we help?</span>
        <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-3 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none" />
      </label>
      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </form>
  );
}
