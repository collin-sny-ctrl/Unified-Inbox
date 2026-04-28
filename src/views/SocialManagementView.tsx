import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Share2, Plus, Clock, Instagram, Twitter, Facebook, MoreHorizontal, Video, Image as ImageIcon, Send, LayoutDashboard, Ticket as TicketIcon, HelpCircle, Settings } from 'lucide-react';
import { View } from '../types';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import FloatingMessagingFAB from '../components/FloatingMessagingFAB';

interface Props {
  onNavigate: (view: View) => void;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['April', 'May', 'June'];

const SCHEDULED_POSTS = [
  { id: 1, day: 15, platform: 'instagram', type: 'image', text: 'Brand showcase with new textures...', time: '10:00 AM' },
  { id: 2, day: 15, platform: 'twitter', type: 'text', text: 'Excited to announce our latest...', time: '02:30 PM' },
  { id: 3, day: 18, platform: 'facebook', type: 'video', text: 'Behind the scenes at the studio!', time: '11:15 AM' },
  { id: 4, day: 22, platform: 'instagram', type: 'video', text: 'Check out this smooth transition.', time: '09:00 AM' },
];

export default function SocialManagementView({ onNavigate }: Props) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isScheduling, setIsScheduling] = useState(false);

  // Generate calendar days for April (30 days, starts on Tuesday which is index 2)
  const daysInMonth = 30;
  const startDay = 2; 
  const blankDays = Array(startDay).fill(null);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = [...blankDays, ...calendarDays];

  const handleDateClick = (day: number | null) => {
    if (day) {
      setSelectedDate(day);
      setIsScheduling(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-surface text-on-surface overflow-hidden">
      {/* Sidebar - Consistent with other views */}
      <aside className="fixed left-0 top-0 h-screen w-72 glass-panel flex flex-col p-6 space-y-2 shadow-[40px_0_40px_rgba(0,72,141,0.06)] z-50">
        <div className="flex items-center space-x-3 mb-10 px-4">
          <div 
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-primary-container flex items-center justify-center text-white shadow-lg shadow-primary/20 cursor-pointer hover:rotate-6 transition-transform"
            onClick={() => onNavigate(View.HOST_ANALYTICS)}
          >
            <span className="font-black text-xl italic">A</span>
          </div>
          <div>
            <h2 className="text-blue-900 font-black leading-tight text-sm">Social Studio</h2>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Content Curator</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1">
          <SocialNavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            onClick={() => onNavigate(View.HOST_ANALYTICS)}
          />
          <SocialNavItem 
            icon={<TicketIcon size={20} />} 
            label="Tickets" 
            onClick={() => onNavigate(View.TICKETS_DASHBOARD)}
          />
          <SocialNavItem icon={<Share2 size={20} />} label="Social" active />
        </nav>

        <div className="pt-4 border-t border-surface-container-high space-y-1">
          <SocialNavItem icon={<HelpCircle size={20} />} label="Help" />
          <SocialNavItem icon={<Settings size={20} />} label="Settings" />
          <div className="mx-2 mt-6 px-4 py-3 bg-surface-container-low rounded-2xl border border-surface-container-high flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-primary/20 overflow-hidden shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate">Felix Brand</p>
              <p className="text-[10px] text-on-surface-variant font-medium">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Adjusted for fixed sidebar */}
      <main className="flex-1 flex flex-col ml-72 overflow-hidden">
        <header className="h-20 px-8 border-b border-surface-container-high flex items-center justify-between bg-surface/50 backdrop-blur-xl sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold tracking-tight">Social Management</h1>
            <div className="h-8 w-px bg-surface-container-high" />
            <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-full">
              <button className="p-1 hover:bg-surface-container-high rounded-full transition-colors">
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm font-bold uppercase tracking-widest px-2">April 2026</span>
              <button className="p-1 hover:bg-surface-container-high rounded-full transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
               <Plus size={16} />
               <span>New Post</span>
             </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl mx-auto">
            {/* Calendar Grid */}
            <div className="bg-surface-container-low rounded-3xl border border-surface-container-high shadow-xl overflow-hidden">
              <div className="grid grid-cols-7 border-b border-surface-container-high">
                {DAYS.map(day => (
                  <div key={day} className="py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant bg-surface-container-low/50">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {allDays.map((day, index) => {
                  const dayPosts = day ? SCHEDULED_POSTS.filter(p => p.day === day) : [];
                  const isToday = day === 28;
                  
                  return (
                    <motion.div 
                      key={index} 
                      onClick={() => handleDateClick(day)}
                      whileHover={day ? { backgroundColor: 'var(--surface-container)' } : {}}
                      className={cn(
                        "h-40 border-r border-b border-surface-container-high p-4 flex flex-col gap-2 relative transition-colors duration-200",
                        day ? "cursor-pointer" : "bg-surface-container/20 opacity-30",
                        isToday && "bg-primary/5"
                      )}
                    >
                      {day && (
                        <>
                          <div className="flex justify-between items-start">
                            <span className={cn(
                              "text-sm font-bold",
                              isToday ? "w-7 h-7 bg-primary text-white flex items-center justify-center rounded-full -mt-1 -ml-1 shadow-md shadow-primary/30" : "text-on-surface-variant"
                            )}>
                              {day}
                            </span>
                            {isToday && <span className="text-[9px] font-black uppercase tracking-tighter text-primary">Today</span>}
                          </div>
                          
                          <div className="flex flex-col gap-1.5 overflow-hidden">
                            {dayPosts.map(post => (
                              <div 
                                key={post.id} 
                                className={cn(
                                  "group relative px-2 py-1.5 rounded-lg border flex items-center gap-2 overflow-hidden",
                                  post.platform === 'instagram' ? "bg-pink-500/10 border-pink-500/20 text-pink-700" :
                                  post.platform === 'twitter' ? "bg-sky-500/10 border-sky-500/20 text-sky-700" :
                                  "bg-blue-600/10 border-blue-600/20 text-blue-700"
                                )}
                              >
                                <span className="shrink-0">
                                  {post.platform === 'instagram' && <Instagram size={12} />}
                                  {post.platform === 'twitter' && <Twitter size={12} />}
                                  {post.platform === 'facebook' && <Facebook size={12} />}
                                </span>
                                <span className="text-[10px] font-bold truncate pr-4">{post.text}</span>
                                <div className="absolute right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <MoreHorizontal size={10} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Schedule Modal */}
      <AnimatePresence>
        {isScheduling && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 pb-24">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsScheduling(false)}
              className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="h-14 flex items-center justify-between px-8 bg-surface-container-low border-b border-surface-container-high">
                <h3 className="font-bold tracking-tight">Schedule Post for April {selectedDate}</h3>
                <button onClick={() => setIsScheduling(false)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <Plus className="rotate-45" size={20} />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-3">Platform</label>
                  <div className="flex gap-4">
                    <PlatformButton active icon={<Instagram size={20} />} label="Instagram" />
                    <PlatformButton icon={<Twitter size={20} />} label="Twitter" />
                    <PlatformButton icon={<Facebook size={20} />} label="Facebook" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-3">Post Content</label>
                  <textarea 
                    placeholder="Write your caption here..."
                    className="w-full h-32 p-4 bg-surface-container rounded-2xl border-none focus:ring-2 focus:ring-primary/20 text-sm resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-3">Media</label>
                    <div className="flex gap-2">
                       <button className="flex-1 h-12 flex items-center justify-center gap-2 border-2 border-dashed border-surface-container-high rounded-xl text-on-surface-variant hover:border-primary/30 hover:text-primary transition-all">
                         <ImageIcon size={18} />
                         <span className="text-xs font-bold">Image</span>
                       </button>
                       <button className="flex-1 h-12 flex items-center justify-center gap-2 border-2 border-dashed border-surface-container-high rounded-xl text-on-surface-variant hover:border-primary/30 hover:text-primary transition-all">
                         <Video size={18} />
                         <span className="text-xs font-bold">Video</span>
                       </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-3">Schedule Time</label>
                    <div className="flex items-center gap-2 bg-surface-container h-12 px-4 rounded-xl">
                      <Clock size={18} className="text-on-surface-variant" />
                      <input type="time" className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full" defaultValue="10:00" />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsScheduling(false)}
                  className="w-full h-14 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4 flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  <span>Schedule Post</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FloatingMessagingFAB onNavigate={onNavigate} />
    </div>
  );
}

function SocialNavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group",
        active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-on-surface-variant hover:bg-surface-container-high"
      )}>
      <span className={cn(active ? "text-white" : "text-primary opacity-70 group-hover:opacity-100 transition-opacity")}>{icon}</span>
      <span className={cn(
        "text-sm font-bold tracking-tight",
        active ? "text-white" : "text-on-surface-variant"
      )}>{label}</span>
    </div>
  );
}

function PlatformButton({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex-1 py-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all",
      active ? "border-primary bg-primary/5 text-primary" : "border-surface-container-high text-on-surface-variant hover:border-surface-container-highest"
    )}>
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );
}
