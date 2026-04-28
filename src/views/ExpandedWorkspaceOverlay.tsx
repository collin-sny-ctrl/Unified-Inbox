import React, { useState } from 'react';
import { X, Search, Phone, Video, MoreVertical, Paperclip, Send, Edit2, ExternalLink, History, Briefcase, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (view: View) => void;
  onClose: () => void;
}

const CONVERSATIONS = [
  {
    id: 'julianne',
    name: 'Julianne Moore',
    role: 'Lead Designer · Seattle, WA',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxbgEae6ZlFpYS2poGlLfN4PnRXxhqP6tY8iA0I4RhbSRuzCDm-8QJbIP1Ngqhf3CMkx2u5HM2VdKm97WmUFXGydPUggHiDJ0dBcVTqZTYFRjbmqWyUDT8JKuj8kC8Vu24HT9LvnLKMnWd9dOy9Puh151E-qEUMXWHcxv25EyXy7hfBl0usuXq9pIJPZrAP8Kv--BFVjlNLc1F1GBiKSXQ3fZkl1kZL5CfLZeYvwxjE-SmYne5i8fvOrFovwgMtBUPbkyFUk64d54',
    ticketId: '#12345',
    messages: [
      {
        id: 1,
        name: 'Julianne Moore',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlRiuZ6vRTrJfRWGkUcIkYxBzX9Q362U0Yn58q3f7mBV63Z1gNAgZkwDFE8ADdn4seWmYjyWHVQUKafzgCtkQ-R8WA6ohGaorMNb2B_5WXyNTemwFbKp99Dv4ONVA3cv4duaXFossfRfAqtixIzywDg9us5Tj7Pdg6rGFid9gVsWo2hVIXjzVGQaBH7DpbYQ_WZyJqfpwEifzY5Vjo4PrP0wMhG3-1N4C7tjiV7p1u37y_w2bcepGkV0yFb5UmO-HT8NA-q-SmNJU',
        text: 'The architectural layout for the new editorial section needs a slight adjustment on mobile. Specifically the asymmetric grid—it collapses too early. Can we refine the breakpoints?',
        time: '12:45 PM'
      },
      {
        id: 2,
        isMe: true,
        text: "I've noticed that too. I'll adjust the Tailwind config to use a custom 840px breakpoint for the grid collapse. Does that work for your latest mockups?",
        time: '12:48 PM'
      }
    ],
    urgent: true
  },
  {
    id: 'marcus',
    name: 'Marcus Thorne',
    role: 'VFX Supervisor · London, UK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ro0rn6sSCSNx6FZb7yrZgoNVF1jA7f4nO2kkTCDOeD7UEMG3VmDBQ8aLzLHeS0C3ywKYf960p8QgFGK_s_WTMmHkjiKitiWInzos4glfQ6__d_m0kJedzdnPrj8UYcZtU4IK8WnQvL8cTdGJn0fV5kzV-1xAx0Wahc8lhqMirdf8y91zwh6Ih6sKglLY7O0sgfALb4lVR0gW9ij4l3LkiB6V5QNV7aqUNCUP2t44V8exDVmZWsYBR7CeFELoluYcdmD2mnhROzw',
    ticketId: null,
    messages: [
      {
        id: 1,
        name: 'Marcus Thorne',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuQZWS-m1tx3R-7fy9Iotll0FFY3cBp53YQCfIq3fdeEW7Y_sYs70IFSpKAOVrOkJheZiby8VklbGFU6YJmUJbbtPTzZc4jR-orZfwKeOiyVNhHGtVK1ji2u9dtSfAQhJcqvEQ32kkqrVLgwczV9smqkf-6eyI03t0GDBTs5orIWkr5AYseGETB6zWS5xavZqg88g8J0CPYaZYop4Y5vC30ThHrkcaPsi7cM-MYLb6USOeicKHPxIxG6BKnpfVsJTdJ8j2eSxEpK4',
        text: 'The asset pipeline verification failed on the London node. I think we need to escalate this to high-fidelity storage team immediately. Can you create a ticket?',
        time: '1:12 PM'
      }
    ],
    urgent: false
  }
];

export default function ExpandedWorkspaceOverlay({ onNavigate, onClose }: Props) {
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const [selectedMessageIds, setSelectedMessageIds] = useState<number[]>([]);
  const activeChat = CONVERSATIONS.find(c => c.id === activeId) || CONVERSATIONS[0];

  const toggleMessageSelection = (id: number) => {
    setSelectedMessageIds(prev => 
      prev.includes(id) ? prev.filter(mid => mid !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelectedMessageIds([]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-on-background/40 backdrop-blur-md flex items-center justify-center p-6 lg:p-12"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-surface shadow-2xl shadow-primary/20 rounded-xl w-full max-w-7xl h-full flex flex-col overflow-hidden ambient-shadow ring-1 ring-outline-variant/15"
      >
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-6 bg-surface-container-lowest/80 backdrop-blur-3xl z-10 border-b border-surface-container-high">
          <div className="flex items-center gap-4">
            <span className="text-blue-900 font-bold tracking-tighter text-lg">Axiom Carbon</span>
            <nav className="hidden md:flex items-center gap-6 ml-8">
              <a href="#" className="font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Dashboard</a>
              <a href="#" className="font-medium text-sm text-blue-700 border-b-2 border-primary pb-1">Workspace</a>
              <a href="#" className="font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Analytics</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {activeChat.ticketId ? (
              <button 
                onClick={() => onNavigate(View.TICKET_DETAIL)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-primary bg-primary-fixed rounded-lg hover:opacity-90 transition-all group"
              >
                <CheckCircle2 size={14} className="text-primary" />
                <span className="text-sm font-bold tracking-tight">Ticket {activeChat.ticketId}</span>
                <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
            ) : (
              <button 
                onClick={() => onNavigate(View.ACTION_MODAL)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all animate-pulse"
              >
                <AlertCircle size={16} />
                Escalate to Ticket
              </button>
            )}
            <div className="h-8 w-[1px] bg-outline-variant/30 mx-1"></div>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
              <Search size={18} />
            </button>
            <button 
              id="close-workspace"
              onClick={onClose} 
              className="p-2 text-on-surface-variant hover:bg-error-container hover:text-error rounded-lg transition-colors flex items-center gap-1"
            >
              <X size={20} />
              <span className="sr-only">close</span>
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden relative">
          {/* Bulk Actions Bar */}
          <AnimatePresence>
            {selectedMessageIds.length > 0 && (
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="absolute top-0 left-0 right-0 h-14 bg-primary text-white z-20 flex items-center justify-between px-8 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <button onClick={clearSelection} className="p-1 hover:bg-white/10 rounded">
                    <X size={18} />
                  </button>
                  <span className="text-sm font-bold tracking-tight">{selectedMessageIds.length} Messages Selected</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-black uppercase tracking-widest transition-colors">Curate</button>
                  <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-black uppercase tracking-widest transition-colors">Tag Bulk</button>
                  <button 
                    onClick={() => onNavigate(View.ACTION_MODAL)}
                    className="px-4 py-1.5 bg-white text-primary rounded-lg text-xs font-black uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Escalate Selection
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Column: Inbox */}
          <section className="w-80 flex flex-col bg-surface-container-low border-r border-surface-container-high">
            <div className="p-5 flex items-center justify-between border-b border-surface-container-high">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Priority Inbox</h3>
              <div className="bg-primary/10 px-2 py-0.5 rounded text-[10px] font-bold text-primary">2 NEW</div>
            </div>
            <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1 no-scrollbar mt-2">
              {CONVERSATIONS.map(chat => (
                <InboxItem 
                  key={chat.id}
                  active={activeId === chat.id} 
                  name={chat.name} 
                  time={chat.messages[chat.messages.length - 1].time} 
                  message={chat.messages[chat.messages.length - 1].text} 
                  urgent={chat.urgent} 
                  ticketId={chat.ticketId}
                  onClick={() => {
                    setActiveId(chat.id);
                    clearSelection();
                  }}
                />
              ))}
              <div className="px-4 py-8 text-center opacity-30 select-none">
                <span className="material-symbols-outlined text-4xl block mb-2">archive</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">End of Priority View</p>
              </div>
            </div>
          </section>

          {/* Center Column: Thread */}
          <section className="flex-1 flex flex-col bg-surface">
            <div className="px-8 py-6 flex items-center justify-between bg-surface-container-lowest/50 border-b border-surface-container-high">
              <div className="flex items-center gap-4">
                <img 
                  src={activeChat.avatar} 
                  alt={activeChat.name} 
                  className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-outline-variant/10"
                />
                <div>
                  <h2 className="text-lg font-bold text-on-surface tracking-tight leading-none">{activeChat.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-on-surface-variant">{activeChat.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <IconButton icon={<Phone size={18} />} />
                <IconButton icon={<Video size={18} />} />
                <IconButton icon={<MoreVertical size={18} />} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-surface-container-lowest/20 no-scrollbar">
              {activeChat.messages.map(msg => (
                <Message 
                  key={msg.id}
                  avatar={msg.avatar}
                  name={msg.name}
                  text={msg.text}
                  time={msg.time}
                  isMe={msg.isMe}
                  selected={selectedMessageIds.includes(msg.id)}
                  onToggleSelect={() => toggleMessageSelection(msg.id)}
                />
              ))}
            </div>

            <div className="p-6 bg-surface-container-lowest border-t border-surface-container-high">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-6 pr-24 text-sm focus:ring-2 focus:ring-primary/20 placeholder-on-surface-variant/50"
                />
                <div className="absolute right-3 flex items-center gap-1">
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <button className="p-2 text-primary hover:bg-primary-fixed rounded-lg transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Profile & Metadata */}
          <section className="w-96 hidden xl:flex flex-col bg-surface-container-low border-l border-surface-container-high overflow-y-auto no-scrollbar">
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Tags</h4>
                  <button className="text-xs font-bold text-primary hover:underline">Edit</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag label="Engineering" color="bg-primary-fixed text-on-primary-fixed-variant" />
                  <Tag label={activeChat.urgent ? "Priority A" : "General"} color={activeChat.urgent ? "bg-error-container text-on-error-container" : "bg-secondary-fixed text-on-secondary-fixed-variant"} />
                  <Tag label="Design" color="bg-tertiary-fixed text-on-tertiary-fixed-variant" />
                  <button className="px-3 py-1 border border-outline-variant/30 text-[11px] font-bold rounded-full text-on-surface-variant hover:bg-white transition-colors">+</button>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4 border border-outline-variant/5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Customer Profile</h4>
                  <ExternalLink size={14} className="text-outline" />
                </div>
                <div className="space-y-3">
                  <ProfileInfo label="Account Type" value="Enterprise" />
                  <ProfileInfo label="Joined" value="Jan 2022" />
                  <ProfileInfo label="SLA Tier" value="PLATINUM" valueClass="text-primary font-black" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Action History</h4>
                  <button className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-1 rounded hover:bg-surface-container-highest transition-colors">View All</button>
                </div>
                <div className="relative space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
                  {activeChat.ticketId && <HistoryItem label={`Ticket Resolved: ${activeChat.ticketId}`} time="2h ago · System" active />}
                  <HistoryItem label="Message Received" time="45m ago · Gateway" />
                  <HistoryItem label="AI Sentiment: Positive" time="45m ago · Neural Core" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 bg-white text-on-surface font-bold text-xs uppercase tracking-widest rounded-lg hover:shadow-md transition-all active:scale-95 border border-outline-variant/10">
                <Briefcase size={16} />
                Manage CRM Context
              </button>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface InboxItemProps {
  active?: boolean;
  name: string;
  time: string;
  message: string;
  urgent?: boolean;
  ticketId: string | null;
  onClick: () => void;
}

const InboxItem: React.FC<InboxItemProps> = ({ active, name, time, message, urgent, ticketId, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl cursor-pointer transition-all duration-300 shadow-sm border border-transparent mb-1",
        active ? "bg-white border-l-4 border-primary shadow-md" : "hover:bg-surface-container-high"
      )}
    >
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center gap-2">
          {ticketId ? (
            <CheckCircle2 size={12} className="text-green-500" />
          ) : (
            <AlertCircle size={12} className="text-primary animate-pulse" />
          )}
          <span className="text-sm font-bold text-on-surface">{name}</span>
        </div>
        <span className="text-[10px] font-medium text-on-surface-variant">{time}</span>
      </div>
      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">{message}</p>
      {urgent && (
        <div className="mt-2">
          <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold">Priority A</span>
        </div>
      )}
    </div>
  );
}

interface MessageProps {
  avatar?: string;
  name?: string;
  text: string;
  time: string;
  isMe?: boolean;
  selected?: boolean;
  onToggleSelect?: () => void;
}

const Message: React.FC<MessageProps> = ({ avatar, name, text, time, isMe, selected, onToggleSelect }) => {
  return (
    <div className={cn("flex gap-4 group", isMe ? "flex-row-reverse" : "")}>
      {!isMe && <img src={avatar} alt={name} className="w-10 h-10 rounded-full shadow-sm ring-1 ring-outline-variant/10 object-cover mt-1" />}
      {isMe && <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-lg shadow-primary/20 mt-1">Me</div>}
      
      <div className={cn("max-w-lg relative", isMe ? "text-right" : "")}>
        {!isMe && <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 ml-1">{name}</p>}
        
        <div 
          onClick={onToggleSelect}
          className={cn(
            "p-4 rounded-xl shadow-sm cursor-pointer transition-all relative overflow-hidden",
            isMe ? "bg-primary text-white rounded-tr-none" : "bg-surface-container-low text-on-surface rounded-tl-none border border-outline-variant/5",
            selected ? "ring-2 ring-primary ring-offset-2 scale-[1.02] shadow-md" : "hover:bg-opacity-90"
          )}
        >
          {selected && (
            <div className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 bg-white text-primary rounded-full shadow-sm">
              <CheckCircle2 size={12} />
            </div>
          )}
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
        <span className="text-[10px] mt-2 block text-on-surface-variant font-medium">{time}</span>
      </div>
      
      <div className={cn("flex items-center", isMe ? "mr-2" : "ml-2")}>
        <button 
          onClick={onToggleSelect}
          className={cn(
            "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100",
            selected ? "bg-primary border-primary opacity-100" : "border-outline-variant/30 hover:border-primary"
          )}
        >
          {selected && <CheckCircle2 size={14} className="text-white" />}
        </button>
      </div>
    </div>
  );
}

function Tag({ label, color }: { label: string, color: string }) {
  return (
    <span className={cn("px-3 py-1 text-[11px] font-bold rounded-full shadow-sm", color)}>{label}</span>
  );
}

function ProfileInfo({ label, value, valueClass }: { label: string, value: string, valueClass?: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-xs text-on-surface-variant">{label}</span>
      <span className={cn("text-xs font-bold text-on-surface", valueClass)}>{value}</span>
    </div>
  );
}

function HistoryItem({ label, time, active }: { label: string, time: string, active?: boolean }) {
  return (
    <div className="relative pl-8">
      <div className={cn(
        "absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-surface-container-low transition-all duration-300",
        active ? "bg-primary shadow-[0_0_8px_rgba(0,72,141,0.4)]" : "bg-outline-variant"
      )}></div>
      <p className="text-xs font-bold text-on-surface leading-none">{label}</p>
      <p className="text-[10px] text-on-surface-variant mt-1">{time}</p>
    </div>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded-lg transition-all active:scale-90">
      {icon}
    </button>
  );
}
