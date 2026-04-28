import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

export default function FloatingMessagingFAB({ onNavigate }: Props) {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        aria-label="Open messaging"
        id="messaging-fab"
        onClick={() => onNavigate(View.COMPACT_MESSAGING)}
        className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:shadow-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat</span>
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white ring-2 ring-surface">2</span>
      </button>
    </div>
  );
}
