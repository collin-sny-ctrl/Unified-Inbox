import React from 'react';
import { X, Search, Phone, Video, MoreVertical, Paperclip, Send, Edit2, ExternalLink, History, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { View } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (view: View) => void;
  onClose: () => void;
}

export default function ExpandedWorkspaceOverlay({ onNavigate, onClose }: Props) {
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
            <button 
              onClick={() => onNavigate(View.TICKET_DETAIL)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-on-surface-variant hover:text-primary transition-colors group"
            >
              <span className="text-sm font-semibold tracking-tight">Ticket #12345</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/30 mx-1"></div>
            <button 
              onClick={() => onNavigate(View.ACTION_MODAL)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Escalate
            </button>
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

        <div className="flex-1 flex overflow-hidden">
          {/* Left Column: Inbox */}
          <section className="w-80 flex flex-col bg-surface-container-low border-r border-surface-container-high">
            <div className="p-5 flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Priority Inbox</h3>
              <Search size={16} className="text-on-surface-variant cursor-pointer" />
            </div>
            <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1 no-scrollbar">
              <InboxItem 
                active 
                name="Julianne Moore" 
                time="12m ago" 
                message="The architectural layout for the new editorial section needs a slight adjustment on mobile..." 
                urgent 
              />
              <InboxItem name="Marcus Thorne" time="1h ago" message="Verification of the asset pipeline is complete. Standing by for next steps..." />
              <InboxItem name="Elena Rossi" time="3h ago" message="Could you check the typography scale for the dashboard hero section?" />
              <InboxItem name="David Chen" time="Yesterday" message="The billing cycles for the enterprise accounts have been synced..." />
            </div>
          </section>

          {/* Center Column: Thread */}
          <section className="flex-1 flex flex-col bg-surface">
            <div className="px-8 py-6 flex items-center justify-between bg-surface-container-lowest/50 border-b border-surface-container-high">
              <div className="flex items-center gap-4">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbgEae6ZlFpYS2poGlLfN4PnRXxhqP6tY8iA0I4RhbSRuzCDm-8QJbIP1Ngqhf3CMkx2u5HM2VdKm97WmUFXGydPUggHiDJ0dBcVTqZTYFRjbmqWyUDT8JKuj8kC8Vu24HT9LvnLKMnWd9dOy9Puh151E-qEUMXWHcxv25EyXy7hfBl0usuXq9pIJPZrAP8Kv--BFVjlNLc1F1GBiKSXQ3fZkl1kZL5CfLZeYvwxjE-SmYne5i8fvOrFovwgMtBUPbkyFUk64d54" 
                  alt="Julianne Moore" 
                  className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-outline-variant/10"
                />
                <div>
                  <h2 className="text-lg font-bold text-on-surface tracking-tight leading-none">Julianne Moore</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-medium text-on-surface-variant">Lead Designer · Seattle, WA</span>
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
              <Message 
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBlRiuZ6vRTrJfRWGkUcIkYxBzX9Q362U0Yn58q3f7mBV63Z1gNAgZkwDFE8ADdn4seWmYjyWHVQUKafzgCtkQ-R8WA6ohGaorMNb2B_5WXyNTemwFbKp99Dv4ONVA3cv4duaXFossfRfAqtixIzywDg9us5Tj7Pdg6rGFid9gVsWo2hVIXjzVGQaBH7DpbYQ_WZyJqfpwEifzY5Vjo4PrP0wMhG3-1N4C7tjiV7p1u37y_w2bcepGkV0yFb5UmO-HT8NA-q-SmNJU"
                name="Julianne Moore"
                text="The architectural layout for the new editorial section needs a slight adjustment on mobile. Specifically the asymmetric grid—it collapses too early. Can we refine the breakpoints?"
                time="12:45 PM"
              />
              <Message 
                isMe
                text="I've noticed that too. I'll adjust the Tailwind config to use a custom 840px breakpoint for the grid collapse. Does that work for your latest mockups?"
                time="12:48 PM"
              />
              <Message 
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCaBSnSACH9Jt_fTU-z2X-2AdE_F3RzLALqrvzq3Ds3lTkCB6756z-vbVMi-q5EwBMDO7WpUiZTTAzQu1i5fK6vDhbZ0wh9Wa5zztPdwH5LYJsL7vh-WCUJdE1bQpRjjIbuz5jXJer1p5vhOzH8FYoySXfWEVwZgfejqa4GVEblZSaONPgX5nJvzJFPP1kkWW-NPPs4rfh9QOEldMrBL5UGcVtTYHcdRYtR1ouAM3hw7fFWzY7H2mH_qYcesu0hL8UPYrzCoLTdbnY"
                name="Julianne Moore"
                text="Perfect. I’ve uploaded the updated assets to the shared workspace. Let's touch base after the Escalate review."
                time="12:50 PM"
              />
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
                  <Tag label="UI/UX" color="bg-secondary-fixed text-on-secondary-fixed-variant" />
                  <Tag label="Priority A" color="bg-tertiary-fixed text-on-tertiary-fixed-variant" />
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
                  <ProfileInfo label="Lifetime Value" value="$14,200.00" valueClass="text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Action History</h4>
                  <button className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-1 rounded hover:bg-surface-container-highest transition-colors">View All</button>
                </div>
                <div className="relative space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
                  <HistoryItem label="Escalated to Tier 2" time="Today at 11:30 AM · System" active />
                  <HistoryItem label="Attachment Verified" time="Today at 09:15 AM · Marcus Thorne" />
                  <HistoryItem label="Ticket Created" time="Yesterday at 04:45 PM · Julianne Moore" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 bg-white text-on-surface font-bold text-xs uppercase tracking-widest rounded-lg hover:shadow-md transition-all active:scale-95 border border-outline-variant/10">
                <Briefcase size={16} />
                Configure Cards
              </button>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InboxItem({ active, name, time, message, urgent }: { active?: boolean, name: string, time: string, message: string, urgent?: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-xl cursor-pointer transition-all duration-300 shadow-sm border border-transparent",
      active ? "bg-white border-l-4 border-primary shadow-md" : "hover:bg-surface-container-high"
    )}>
      <div className="flex justify-between items-start mb-1">
        <span className="text-sm font-bold text-on-surface">{name}</span>
        <span className="text-[10px] font-medium text-on-surface-variant">{time}</span>
      </div>
      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">{message}</p>
      {urgent && (
        <div className="mt-2">
          <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold">Urgent</span>
        </div>
      )}
    </div>
  );
}

function Message({ avatar, name, text, time, isMe }: { avatar?: string, name?: string, text: string, time: string, isMe?: boolean }) {
  return (
    <div className={cn("flex gap-4", isMe ? "flex-row-reverse" : "")}>
      {!isMe && <img src={avatar} alt={name} className="w-8 h-8 rounded-full shadow-sm ring-1 ring-outline-variant/10" />}
      {isMe && <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-lg shadow-primary/20">Me</div>}
      <div className={cn("max-w-lg", isMe ? "text-right" : "")}>
        <div className={cn(
          "p-4 rounded-xl shadow-sm",
          isMe ? "bg-primary text-white rounded-tr-none" : "bg-surface-container-low text-on-surface rounded-tl-none border border-outline-variant/5"
        )}>
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
        <span className="text-[10px] mt-2 block text-on-surface-variant font-medium">{time}</span>
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
        active ? "bg-primary" : "bg-outline-variant"
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
