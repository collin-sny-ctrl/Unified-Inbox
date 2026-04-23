import React from 'react';
import { ChevronLeft, Bell, Settings, HelpCircle, Ticket as TicketIcon, UserCheck, UserX, CheckCircle2, MoreHorizontal, Lock, Paperclip, Smile, Plus, Search, ExternalLink, Brush, Terminal } from 'lucide-react';
import { View } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface Props {
  onNavigate: (view: View) => void;
}

export default function TicketDetailView({ onNavigate }: Props) {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-72 glass-panel flex flex-col p-6 space-y-2 shadow-[40px_0_40px_rgba(0,72,141,0.06)] z-50">
        <div className="flex flex-col mb-8 px-4">
          <h1 className="text-xl font-bold tracking-tight text-blue-900 leading-none">Precision Editorial</h1>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mt-1">Ticketing System</p>
        </div>
        <nav className="flex-1 flex flex-col space-y-1">
          <TicketingNavItem 
            icon={<TicketIcon size={20} />} 
            label="All Tickets" 
            id="all-tickets-link"
            onClick={() => onNavigate(View.TICKETS_DASHBOARD)} 
          />
          <TicketingNavItem icon={<UserCheck size={20} />} label="My Tickets" active />
          <TicketingNavItem icon={<UserX size={20} />} label="Unassigned" />
          <TicketingNavItem icon={<CheckCircle2 size={20} />} label="Solved" />
        </nav>
        <button className="bg-gradient-to-r from-primary to-primary-container text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <Plus size={18} />
          <span>New Ticket</span>
        </button>
      </aside>

      <main className="flex-1 ml-72 h-screen flex flex-col overflow-hidden">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-18rem)] h-16 z-40 bg-white/90 backdrop-blur-md flex justify-between items-center px-8 border-b border-surface-container-high/30">
          <div className="flex items-center gap-4 group">
            <Search className="text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search ticket repository..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-64 text-on-surface placeholder-on-surface-variant/40"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 items-center text-on-surface-variant">
              <button className="hover:text-primary transition-colors"><Bell size={20} /></button>
              <button className="hover:text-primary transition-colors"><Settings size={20} /></button>
              <button className="hover:text-primary transition-colors"><HelpCircle size={20} /></button>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant/10 shadow-sm">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ro0rn6sSCSNx6FZb7yrZgoNVF1jA7f4nO2kkTCDOeD7UEMG3VmDBQ8aLzLHeS0C3ywKYf960p8QgFGK_s_WTMmHkjiKitiWInzos4glfQ6__d_m0kJedzdnPrj8UYcZtU4IK8WnQvL8cTdGJn0fV5kzV-1xAx0Wahc8lhqMirdf8y91zwh6Ih6sKglLY7O0sgfALb4lVR0gW9ij4l3LkiB6V5QNV7aqUNCUP2t44V8exDVmZWsYBR7CeFELoluYcdmD2mnhROzw" alt="User" />
            </div>
          </div>
        </header>

        <div className="pt-16 flex flex-1 overflow-hidden">
          {/* Main Feed */}
          <div className="flex-1 overflow-y-auto px-8 py-8 no-scrollbar bg-slate-50/30">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-error-container text-on-error-container text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full shadow-sm">Escalated</span>
                <span className="text-outline text-sm font-bold tabular-nums">#12345</span>
              </div>
              <h2 className="text-[2.25rem] font-black text-on-surface tracking-tighter leading-none">Escalated: Architectural layout adjustment</h2>
            </div>

            <section className="space-y-8">
              <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] border-b border-surface-container-high pb-4">Ticket Activity</h3>
              
              {/* Original Post */}
              <article className="bg-white p-8 rounded-2xl shadow-sm border border-surface-container-high/50 relative group">
                <button className="absolute top-8 right-8 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={20} /></button>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbgEae6ZlFpYS2poGlLfN4PnRXxhqP6tY8iA0I4RhbSRuzCDm-8QJbIP1Ngqhf3CMkx2u5HM2VdKm97WmUFXGydPUggHiDJ0dBcVTqZTYFRjbmqWyUDT8JKuj8kC8Vu24HT9LvnLKMnWd9dOy9Puh151E-qEUMXWHcxv25EyXy7hfBl0usuXq9pIJPZrAP8Kv--BFVjlNLc1F1GBiKSXQ3fZkl1kZL5CfLZeYvwxjE-SmYne5i8fvOrFovwgMtBUPbkyFUk64d54" 
                    className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-surface" 
                    alt="Requester" 
                  />
                  <div>
                    <p className="text-base font-black text-on-surface">Julianne Moore</p>
                    <p className="text-xs text-on-surface-variant font-medium">Original Request • 2 hours ago</p>
                  </div>
                </div>
                <div className="space-y-4 text-on-surface-variant leading-relaxed font-medium">
                  <p>The current Unified Workspace view for editorial workflows is feeling cluttered on smaller displays. We need to implement an architectural layering approach that prioritizes content visibility over control panels.</p>
                  <p>Specific pain points: The sidebar doesn't collapse effectively, and the padding on data cards is consuming too much vertical real estate in high-density tables. Requesting a review from the design systems team for an escalated fix.</p>
                </div>
              </article>

              {/* Internal Note */}
              <article className="bg-[#f0f4ff]/50 p-8 rounded-2xl border-l-[6px] border-tertiary shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm">
                    <Lock size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-tertiary uppercase tracking-widest">Internal Note</p>
                    <p className="text-xs text-on-surface-variant font-medium">Marcus Aurelius • 45 minutes ago</p>
                  </div>
                </div>
                <p className="text-sm italic text-tertiary/80 leading-relaxed font-semibold">"I've reviewed the current CSS grid implementation. Julianne is right, the 'breathable' philosophy we want for Precision Editorial isn't translating well at 1366px widths. I'm looking into the container queries plugin to fix the responsive pivot."</p>
              </article>
            </section>

            {/* Status Alert */}
            <div className="my-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-surface-container-highest/50"></div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em]">Status: In Progress</p>
              <div className="h-px flex-1 bg-surface-container-highest/50"></div>
            </div>

            {/* Spacer for floating input */}
            <div className="h-48"></div>
          </div>

          {/* RIGHT Sidebar: Metadata */}
          <aside className="w-96 bg-surface-container-low/40 backdrop-blur-2xl border-l border-surface-container-high/20 overflow-y-auto no-scrollbar p-10 flex flex-col gap-12">
            <section className="space-y-4">
              <h4 className="text-[10px] font-black text-outline uppercase tracking-[0.3em]">Service Level Agreement</h4>
              <div className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-black text-on-surface">Response Time</span>
                  <span className="text-error font-black text-xs uppercase tracking-wider">Overdue</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-error w-full h-full"></div>
                </div>
                <p className="mt-4 text-[10px] text-error font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">warning</span>
                  SLA breached by 12m 45s
                </p>
              </div>
            </section>

            <section className="space-y-8">
              <h4 className="text-[10px] font-black text-outline uppercase tracking-[0.3em]">Ticket Details</h4>
              <div className="space-y-6">
                <DetailRow 
                  label="Requester" 
                  value="Julianne Moore" 
                  avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDsgTbJVgIjV4iJubFAp6x04zyMTMifRXJ-leeQvDQkLd3tp6fe8syo7y1_2teH0eRx8DdulesiNurhjBNGgBlqLHfgaSdkkaGUr0stLu_-4DPjkdAbsV9wM1N0xaFHQ4JZbrZ27vL0cHYozm1b_Sczw6ImOzjhw7Gk8Nv0Flh034s-rCBIzGiYCKqyQW8QCJQifXVgi29OI3njtAAj8MK7hX7RTked-nAT9QxsaG0mTcFwcqGd4kEFNbBheq3hnNR9KkHwZOIJh9M" 
                />
                <DetailRow label="Assignee" value="Marcus Aurelius" initials="MA" initialColor="bg-secondary-fixed text-on-secondary-fixed-variant" />
                <DetailRow label="Priority" value="Urgent" valueClass="bg-error text-on-error px-3 py-1 rounded-full text-[10px] font-black shadow-lg shadow-error/20" />
                <DetailRow label="Created Date" value="Oct 24, 10:22 AM" />
                <DetailRow label="Status" value="In Progress" valueClass="text-secondary font-black" dot />
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="text-[10px] font-black text-outline uppercase tracking-[0.3em]">Contextual Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Badge label="UI/UX Design" color="bg-primary-fixed text-on-primary-fixed-variant" />
                <Badge label="Architecture" color="bg-secondary-fixed text-on-secondary-fixed-variant" />
                <Badge label="Escalation-Tier-3" color="bg-tertiary-fixed text-on-tertiary-fixed-variant" />
                <button className="px-3 py-1 border border-outline-variant text-outline rounded-full text-[10px] font-black hover:bg-white hover:text-primary transition-all">+ Add Tag</button>
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="text-[10px] font-black text-outline uppercase tracking-[0.3em]">Connected Assets</h4>
              <div className="space-y-4">
                <AssetCard icon={<Brush size={16} />} name="Design_System_V2.fig" info="4.2MB • Shared by Marcus" />
                <AssetCard icon={<Terminal size={16} />} name="Layout_Regression_Logs.json" info="12KB • Shared by System" />
              </div>
            </section>
          </aside>
        </div>

        {/* Floating Responder */}
        <div className="fixed bottom-10 left-[calc(18rem+2rem)] right-[calc(35%+2rem)] z-50">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-surface-container-high overflow-hidden ambient-shadow"
          >
            <div className="flex border-b border-surface-container-low font-black text-[10px] uppercase tracking-widest text-on-surface-variant">
              <button className="px-6 py-4 text-primary border-b-2 border-primary bg-primary/5">Public Reply</button>
              <button className="px-6 py-4 hover:text-on-surface transition-colors">Internal Note</button>
            </div>
            <div className="p-6">
              <textarea 
                className="w-full h-24 border-none focus:ring-0 text-sm font-medium placeholder-on-surface-variant/40 resize-none bg-slate-50/30 rounded-xl p-4" 
                placeholder="Type your response to Julianne..."
              ></textarea>
            </div>
            <div className="px-6 py-4 bg-surface-container-low/50 flex justify-between items-center border-t border-surface-container-low">
              <div className="flex gap-4 text-outline">
                <button className="hover:text-primary transition-colors"><Paperclip size={20} /></button>
                <button className="hover:text-primary transition-colors"><Smile size={20} /></button>
              </div>
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-2.5 rounded-xl text-sm font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Send Reply</button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function TicketingNavItem({ icon, label, id, active = false, onClick }: { icon: React.ReactNode, label: string, id?: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      id={id}
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
        active ? "bg-white text-primary shadow-sm font-black" : "text-slate-500 hover:bg-slate-200/50 hover:translate-x-1"
      )}
    >
      <span className={cn("transition-transform group-hover:scale-110", active ? "opacity-100" : "opacity-70")}>{icon}</span>
      <span className="text-sm tracking-tight">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/10"></div>}
    </button>
  );
}

function DetailRow({ label, value, avatar, initials, initialColor, valueClass, dot }: { label: string, value: string, avatar?: string, initials?: string, initialColor?: string, valueClass?: string, dot?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
      <span className="text-[11px] text-outline font-black uppercase tracking-widest">{label}</span>
      <div className="flex items-center gap-3">
        {dot && <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>}
        <span className={cn("text-sm font-black text-on-surface", valueClass)}>{value}</span>
        {avatar && <img src={avatar} alt={value} className="h-6 w-6 rounded-full object-cover ring-2 ring-surface shadow-sm" />}
        {initials && <div className={cn("h-6 w-6 rounded-full flex items-center justify-center text-[8px] font-black", initialColor)}>{initials}</div>}
      </div>
    </div>
  );
}

function Badge({ label, color }: { label: string, color: string }) {
  return (
    <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest leading-none shadow-sm", color)}>
      {label}
    </span>
  );
}

function AssetCard({ icon, name, info }: { icon: React.ReactNode, name: string, info: string }) {
  return (
    <div className="p-4 bg-white rounded-2xl flex items-center gap-4 cursor-pointer hover:shadow-xl transition-all border border-surface-container-high/30 hover:translate-y-[-2px] duration-300">
      <div className="p-2.5 bg-slate-50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs font-black text-on-surface truncate pr-4">{name}</p>
        <p className="text-[10px] text-outline font-medium mt-0.5">{info}</p>
      </div>
    </div>
  );
}
