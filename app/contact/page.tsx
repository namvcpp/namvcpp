'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function update<K extends keyof typeof form>(k: K, v: string) { setForm(f => ({ ...f, [k]: v })); }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setStatus('submitting'); setError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error('fail');
      setStatus('success'); setForm({ name: '', email: '', message: '' });
    } catch { setStatus('error'); setError('Something went wrong.'); }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input required id="name" value={form.name} onChange={e => update('name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input required id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea required id="message" value={form.message} onChange={e => update('message', e.target.value)} rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can I help?" />
        </div>
        <button disabled={status==='submitting'} type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">{status==='submitting'?'Sending...':'Send Message'}</button>
        {status==='success' && <p className="text-green-600">Message sent!</p>}
        {status==='error' && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default Contact;
