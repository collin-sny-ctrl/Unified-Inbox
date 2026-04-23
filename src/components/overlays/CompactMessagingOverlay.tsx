import React from 'react';
import { Search, X, Maximize2, Phone, MoreVertical, Send, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { View } from '../../types';

interface Props {
  onNavigate: (view: View) => void;
  onClose: () => void;
}

export default function CompactMessagingOverlay({ onNavigate, onClose }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-on-background/20 backdrop-blur-[2px] pointer-events-auto flex items-end justify-end p-6"
    >
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="flex w-full max-w-[320px] sm:max-w-[400px] bg-white border border-outline-variant shadow-2xl rounded-xl flex-col overflow-hidden"
      >
        {/* Window Header */}
        <header className="p-4 bg-inverse-surface text-inverse-on-surface rounded-t-xl flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-medium text-sm">Guest Messaging</span>
          </div>
          <div className="flex space-x-2">
            <button onClick={onClose} className="text-outline hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="flex flex-col h-full bg-white">
          <div className="p-4 h-64 overflow-y-auto space-y-4 no-scrollbar">
            <div className="flex justify-center">
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Today</span>
            </div>
            
            <div className="flex flex-col items-start max-w-[90%]">
              <span className="text-[10px] text-outline ml-1 mb-1 uppercase font-bold">@TechUser</span>
              <div className="bg-surface-container-low px-4 py-2.5 rounded-2xl rounded-tl-none">
                <p className="text-xs leading-relaxed text-on-surface">Checking in late tonight. Will the keybox code still work after 10 PM?</p>
              </div>
            </div>

            <div className="flex flex-col items-end max-w-[90%] ml-auto">
              <span className="text-[10px] text-outline mr-1 mb-1 uppercase font-bold text-right">Me</span>
              <div className="bg-primary text-on-primary px-4 py-2.5 rounded-2xl rounded-tr-none shadow-sm shadow-primary/10">
                <p className="text-xs leading-relaxed">Absolutely. The system utilizes a tonal depth hierarchy that adapts in real-time. Data density shifts dynamically without compromising.</p>
              </div>
            </div>
          </div>

          <footer className="p-3 border-t border-outline-variant flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Type a reply..." 
              className="flex-1 text-xs border border-outline-variant rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary bg-surface-container-low transition-all"
            />
            <button className="text-primary hover:text-primary-container p-1 transition-colors">
              <Send size={18} />
            </button>
          </footer>
          
          <button 
            onClick={() => onNavigate(View.EXPANDED_WORKSPACE)}
            className="w-full py-2.5 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded-b-xl hover:bg-indigo-100 transition-colors"
          >
            Expand to Workspace
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ChatItem({ active, platform, time, name, message, activeColor }: { active?: boolean, platform: string, time: string, name: string, message: string, activeColor: string }) {
  return (
    <div className={`p-4 cursor-pointer transition-colors border-b border-outline-variant/5 ${active ? 'bg-primary-fixed/30 border-l-4 border-primary' : 'hover:bg-surface-container-high/50'}`}>
      <div className="flex justify-between items-start mb-1">
        <span className={`text-[10px] font-black uppercase tracking-widest ${active ? activeColor : 'text-outline'}`}>{platform}</span>
        <span className="text-[10px] text-outline">{time}</span>
      </div>
      <h5 className="text-xs font-bold mb-1 text-on-surface">{name}</h5>
      <p className="text-[11px] text-on-surface-variant truncate">{message}</p>
    </div>
  );
}
