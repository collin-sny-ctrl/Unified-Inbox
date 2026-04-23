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
    <div className="flex h-screen overflow-hidden bg-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-outline-variant z-40 hidden md:flex flex-col p-4 shadow-sm">
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">H</div>
          <span className="font-semibold text-lg tracking-tight text-on-surface">HostPortal</span>
        </div>
        
        <div className="mb-6">
          <label className="text-[10px] font-bold text-outline uppercase tracking-wider mb-3 block px-3">Tickets</label>
          <nav className="space-y-1">
            <TicketingNavItem 
              icon={<TicketIcon size={18} />} 
              label="All Tickets" 
              onClick={() => onNavigate(View.TICKETS_DASHBOARD)} 
            />
            <TicketingNavItem icon={<UserCheck size={18} />} label="My Assigned" active />
            <TicketingNavItem icon={<UserX size={18} />} label="Unassigned" />
            <TicketingNavItem icon={<CheckCircle2 size={18} />} label="Resolved" />
          </nav>
        </div>

        <div className="mt-auto pt-4 border-t border-outline-variant space-y-1">
          <TicketingNavItem icon={<HelpCircle size={18} />} label="Help Center" />
          <TicketingNavItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      <main className="flex-1 md:ml-64 h-screen flex flex-col overflow-hidden">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-14 bg-white border-b border-outline-variant z-30 flex justify-between items-center px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate(View.TICKETS_DASHBOARD)}
              className="text-outline hover:text-on-surface transition-colors p-1"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="h-4 w-[1px] bg-outline-variant mx-1"></div>
            <span className="text-sm font-semibold tracking-tight text-outline">Ticket #12345</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-outline hover:text-on-surface transition-colors relative"><Bell size={20} /></button>
            <button className="p-2 text-outline hover:text-on-surface transition-colors"><Settings size={20} /></button>
            <div className="h-8 w-[1px] bg-outline-variant mx-1"></div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQZWS-m1tx3R-7fy9Iotll0FFY3cBp53YQCfIq3fdeEW7Y_sYs70IFSpKAOVrOkJheZiby8VklbGFU6YJmUJbbtPTzZc4jR-orZfwKeOiyVNhHGtVK1ji2u9dtSfAQhJcqvEQ32kkqrVLgwczV9smqkf-6eyI03t0GDBTs5orIWkr5AYseGETB6zWS5xavZqg88g8J0CPYaZYop4Y5vC30ThHrkcaPsi7cM-MYLb6USOeicKHPxIxG6BKnpfVsJTdJ8j2eSxEpK4" alt="Admin" className="w-8 h-8 rounded-full object-cover border border-outline-variant" />
          </div>
        </header>

        <div className="pt-14 flex flex-1 overflow-hidden">
          {/* Main Feed */}
          <div className="flex-1 overflow-y-auto px-8 py-8 no-scrollbar bg-surface text-on-surface">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-error/10 text-error text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-error/20">Escalated</span>
                <span className="text-outline text-sm font-medium">Open 2h ago</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface leading-tight">Architectural layout adjustment for high-density dashboards</h2>
            </div>

            <section className="space-y-6">
              <h3 className="text-[10px] font-bold text-outline uppercase tracking-wider border-b border-outline-variant pb-3">Activity History</h3>
              
              <article className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm relative group">
                <div className="flex items-center gap-4 mb-5">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbgEae6ZlFpYS2poGlLfN4PnRXxhqP6tY8iA0I4RhbSRuzCDm-8QJbIP1Ngqhf3CMkx2u5HM2VdKm97WmUFXGydPUggHiDJ0dBcVTqZTYFRjbmqWyUDT8JKuj8kC8Vu24HT9LvnLKMnWd9dOy9Puh151E-qEUMXWHcxv25EyXy7hfBl0usuXq9pIJPZrAP8Kv--BFVjlNLc1F1GBiKSXQ3fZkl1kZL5CfLZeYvwxjE-SmYne5i8fvOrFovwgMtBUPbkyFUk64d54" 
                    className="w-10 h-10 rounded-full object-cover border border-outline-variant" 
                    alt="Requester" 
                  />
                  <div>
                    <p className="text-base font-bold text-on-surface">Julianne Moore</p>
                    <p className="text-[11px] text-outline font-medium">Original Request • Today, 12:45 PM</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                  <p>The current Unified Workspace view for editorial workflows is feeling cluttered on smaller displays. We need to implement an architectural layering approach that prioritizes content visibility over control panels.</p>
                  <p>Specific pain points: The sidebar doesn't collapse effectively, and the padding on data cards is consuming too much vertical real estate in high-density tables.</p>
                </div>
              </article>

              <article className="bg-indigo-50/50 p-6 rounded-xl border border-primary/20 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Lock size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Internal Note</p>
                    <p className="text-[11px] text-outline font-medium">Marcus Aurelius • 45m ago</p>
                  </div>
                </div>
                <p className="text-sm italic text-primary/80 leading-relaxed font-medium">"I'm reviewing the CSS grid implementation. Tonal depth philosophy isn't translating well at 1366px. Working on the responsive pivot fix."</p>
              </article>
            </section>

            <div className="h-48"></div>
          </div>

          {/* RIGHT Sidebar: Metadata */}
          <aside className="w-80 hidden xl:flex flex-col bg-surface-container-low border-l border-outline-variant overflow-y-auto no-scrollbar p-6 space-y-8">
            <section className="space-y-4">
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-wider">SLA Status</h4>
              <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm transition-all hover:shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-on-surface">Response Time</span>
                  <span className="text-error font-bold text-[10px] uppercase tracking-wider">Breached</span>
                </div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-error w-full h-full"></div>
                </div>
                <p className="mt-3 text-[10px] text-error font-bold flex items-center gap-2 uppercase">
                   12m overdue
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-wider text-on-surface">Properties</h4>
              <div className="space-y-4">
                <DetailRow label="Requester" value="Julianne Moore" avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDsgTbJVgIjV4iJubFAp6x04zyMTMifRXJ-leeQvDQkLd3tp6fe8syo7y1_2teH0eRx8DdulesiNurhjBNGgBlqLHfgaSdkkaGUr0stLu_-4DPjkdAbsV9wM1N0xaFHQ4JZbrZ27vL0cHYozm1b_Sczw6ImOzjhw7Gk8Nv0Flh034s-rCBIzGiYCKqyQW8QCJQifXVgi29OI3njtAAj8MK7hX7RTked-nAT9QxsaG0mTcFwcqGd4kEFNbBheq3hnNR9KkHwZOIJh9M" />
                <DetailRow label="Assignee" value="Marcus Aurelius" initials="MA" initialColor="bg-primary/10 text-primary" />
                <DetailRow label="Priority" value="Urgent" valueClass="text-error font-bold" />
                <DetailRow label="Status" value="In Progress" valueClass="text-secondary font-bold" dot />
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-wider text-on-surface">Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Badge label="UI/UX Design" color="bg-primary/10 text-primary" />
                <Badge label="Architecture" color="bg-secondary/10 text-secondary" />
                <Badge label="Tier-3" color="bg-tertiary/10 text-tertiary" />
                <button className="px-2 py-1 border border-outline-variant text-[10px] font-bold rounded-md hover:bg-slate-50 transition-all">+ Add Tag</button>
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-wider text-on-surface">Assets</h4>
              <div className="space-y-3">
                <AssetCard icon={<Brush size={16} />} name="Design_System_V2.fig" info="4.2MB" />
                <AssetCard icon={<Terminal size={16} />} name="Layout_Logs.json" info="12KB" />
              </div>
            </section>
          </aside>
        </div>

        {/* Floating Responder */}
        <div className="fixed bottom-6 left-[calc(16rem+1.5rem)] right-[calc(20rem+1.5rem)] z-50">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl border border-outline-variant overflow-hidden"
          >
            <div className="flex border-b border-outline-variant text-[10px] font-bold uppercase tracking-wider">
              <button className="px-5 py-3 text-primary border-b-2 border-primary bg-primary/5 transition-all">Public Reply</button>
              <button className="px-5 py-3 text-outline hover:text-on-surface transition-all">Internal Note</button>
            </div>
            <div className="p-4">
              <textarea 
                className="w-full h-24 border-none focus:ring-0 text-sm font-medium placeholder-outline/50 resize-none bg-surface-container-low rounded-lg p-3" 
                placeholder="Type your response..."
              ></textarea>
            </div>
            <div className="px-4 py-3 bg-surface-container-low flex justify-between items-center border-t border-outline-variant/30">
              <div className="flex gap-3 text-outline">
                <button className="hover:text-primary transition-colors"><Paperclip size={18} /></button>
                <button className="hover:text-primary transition-colors"><Smile size={18} /></button>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-primary-container active:scale-95 transition-all">Send Reply</button>
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
