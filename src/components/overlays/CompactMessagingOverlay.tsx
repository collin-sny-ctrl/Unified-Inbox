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
        className="flex w-full max-w-[640px] h-[480px] rounded-xl overflow-hidden shadow-2xl glass-panel border border-outline-variant/15 flex-col"
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-5 h-14 bg-primary text-on-primary">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-secondary-container rounded-full animate-pulse"></div>
            <span className="font-bold tracking-tight">Active Inbound</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate(View.EXPANDED_WORKSPACE)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              <Maximize2 size={14} />
              Expand to Workspace
            </button>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg" title="close">
              <X size={18} />
              <span className="sr-only">close</span>
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden bg-white">
          {/* Left Pane: Conversation List */}
          <div className="w-64 border-r border-outline-variant/10 bg-surface-container-low/30 flex flex-col hidden sm:flex">
            <div className="p-4 border-b border-outline-variant/5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={14} />
                <input 
                  type="text" 
                  placeholder="Filter..." 
                  className="w-full bg-surface-container-low border-none rounded-lg text-xs py-2 pl-9 pr-3 focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <ChatItem 
                active 
                platform="Twitter" 
                time="2m" 
                name="@TechUser" 
                message="Is the architectural layer responsive to API changes?" 
                activeColor="text-primary"
              />
              <ChatItem 
                platform="Google Review" 
                time="14m" 
                name="2 Stars" 
                message="The layout is beautiful but the data density is..." 
                activeColor="text-tertiary"
              />
              <ChatItem 
                platform="Survey" 
                time="1h" 
                name="NPS Feedback" 
                message="Highly satisfied with the curated feel of the..." 
                activeColor="text-secondary"
              />
            </div>
          </div>

          {/* Right Pane: Active Chat */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center px-4 h-12 border-b border-outline-variant/10">
              <div className="h-6 w-6 rounded-full bg-primary-fixed flex items-center justify-center mr-3">
                <span className="material-symbols-outlined text-primary text-xs">alternate_email</span>
              </div>
              <span className="text-xs font-bold text-on-surface">@TechUser</span>
              <div className="ml-auto flex gap-3 text-outline">
                <Phone size={18} className="cursor-pointer hover:text-primary" />
                <MoreVertical size={18} className="cursor-pointer hover:text-primary" />
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar">
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-outline bg-surface-container px-2 py-0.5 rounded uppercase tracking-tighter">Today, 08:40 AM</span>
              </div>
              
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-surface-container-low px-4 py-3 rounded-tr-xl rounded-bl-xl rounded-br-xl">
                  <p className="text-xs leading-relaxed text-on-surface">Hello, I'm analyzing the Axiom Carbon dashboard for our firm. Is the architectural layer responsive to high-velocity API changes in the editorial view?</p>
                </div>
                <span className="text-[9px] text-outline mt-1 ml-1">08:42 AM</span>
              </div>

              <div className="flex flex-col items-end max-w-[85%] ml-auto">
                <div className="bg-primary text-on-primary px-4 py-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-lg shadow-primary/10">
                  <p className="text-xs leading-relaxed">Absolutely. The system utilizes a tonal depth hierarchy that adapts in real-time. Data density shifts dynamically without compromising the editorial "breathing room."</p>
                </div>
                <span className="text-[9px] text-outline mt-1 mr-1">08:44 AM · Delivered</span>
              </div>
            </div>

            <div className="p-4 border-t border-outline-variant/10">
              <div className="flex items-center gap-2 bg-surface-container-low rounded-xl px-4 py-2">
                <PlusCircle size={20} className="text-outline hover:text-primary cursor-pointer" />
                <input 
                  type="text" 
                  placeholder="Type a response..." 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-xs"
                />
                <button className="bg-primary text-white h-8 w-8 flex items-center justify-center rounded-lg shadow-md active:scale-90 transition-transform">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
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
