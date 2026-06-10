'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-card border border-border p-8 rounded-3xl space-y-6 shadow-sm">
      <h3 className="text-xl font-bold uppercase text-foreground">General Enquiries</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Your Name</label>
          <input
            type="text"
            required
            placeholder="e.g. John Smith"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Telephone Number</label>
          <input
            type="tel"
            required
            placeholder="e.g. 07700 900000"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Your Town / Postcode</label>
          <input
            type="text"
            required
            placeholder="e.g. Walthamstow"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
          <textarea
            rows={4}
            required
            placeholder="Tell us what locksmith services you require..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none text-foreground"
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-sm uppercase tracking-wider transition-premium active:scale-[0.98] cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
