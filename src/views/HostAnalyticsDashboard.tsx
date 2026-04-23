import React from 'react';
import { LayoutDashboard, MessageSquare, Users, BarChart3, Archive, HelpCircle, LogOut, Bell, Settings, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { View } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (view: View) => void;
}

export default function HostAnalyticsDashboard({ onNavigate }: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 glass-panel border-r-0 shadow-2xl shadow-primary/5 pt-20 z-40 hidden md:flex flex-col p-4">
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-white">architecture</span>
          </div>
          <div>
            <h2 className="text-blue-900 font-black leading-tight text-sm">Precision Editorial</h2>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Architectural Curator</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<MessageSquare size={20} />} label="Messages" />
          <NavItem icon={<Users size={20} />} label="Team" />
          <NavItem icon={<BarChart3 size={20} />} label="Reports" />
          <NavItem icon={<Archive size={20} />} label="Archive" />
        </nav>

        <div className="pt-4 border-t border-surface-container-high space-y-1">
          <NavItem icon={<HelpCircle size={20} />} label="Help" />
          <NavItem icon={<LogOut size={20} />} label="Logout" />
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 overflow-y-auto">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 glass-panel z-30 flex justify-between items-center px-6">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold tracking-tighter text-blue-900 md:hidden">Axiom Carbon</span>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="font-medium text-sm text-blue-700 border-b-2 border-primary pb-1">Dashboard</a>
              <button 
                onClick={() => onNavigate(View.ACTION_MODAL)}
                className="font-medium text-sm text-on-surface-variant hover:text-primary transition-colors"
                id="workspace-link"
              >
                Workspace
              </button>
              <a href="#" className="font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Analytics</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
              <Bell size={20} />
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
              <Settings size={20} />
            </button>
            <button 
              onClick={() => onNavigate(View.ACTION_MODAL)}
              className="bg-primary text-white px-4 py-1.5 rounded-xl text-sm font-semibold active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Escalate
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoA4YhkmGNa9Be7xLoE1JTdDNjkuplF1BdVO8SBE-g2HudXgWBgjkL9Bwr0r2on2s8fsAOs9_gl0n4ukFU84SuWPKvU2QvocxFngAIhbis1BlYmJjkn5_0qJrwMRpLUTyRaH80h4pR62nMG_d7byCg0O0rXTx_eANVaeLEwlAnEuswf7eZiwCFJ6vjYYn7IxLYUuNqHKmeRDjcky0sHoPv_uTxzqSr8BZBuvGD4x7TNqNU96zNcCzIQOraaOc4U5dXGbMjyrSdXIQ" alt="Profile" />
            </div>
          </div>
        </header>

        <main className="p-8 mt-16 max-w-7xl w-full mx-auto">
          <header className="mb-10">
            <h1 className="text-[2.75rem] font-bold tracking-tight text-on-surface leading-none mb-2">Host Analytics</h1>
            <p className="text-on-surface-variant font-medium">Real-time engagement and performance metrics across all channels.</p>
          </header>

          <div className="grid grid-cols-12 gap-6 auto-rows-[160px]">
            {/* Hero Metric */}
            <div className="col-span-12 md:col-span-8 row-span-2 bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-on-primary-container uppercase tracking-widest text-[10px] font-bold">Performance Pulse</span>
                  <h3 className="text-4xl font-extrabold mt-2">92.4% <span className="text-xl font-normal opacity-80">Engagement</span></h3>
                </div>
                <div className="flex items-end gap-2 h-32">
                  <Bar height="60%" className="opacity-20 group-hover:h-[70%]" />
                  <Bar height="50%" className="opacity-40 group-hover:h-[60%]" />
                  <Bar height="70%" className="opacity-20 group-hover:h-[80%]" />
                  <Bar height="40%" className="opacity-40 group-hover:h-[50%]" />
                  <Bar height="80%" className="opacity-60 group-hover:h-[65%]" />
                  <Bar height="55%" className="opacity-30 group-hover:h-[65%]" />
                  <Bar height="70%" className="opacity-50 group-hover:h-[80%]" />
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Sentiment */}
            <div className="col-span-12 md:col-span-4 row-span-2 bg-surface-container-low rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-secondary text-3xl">mood</span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] px-2 py-1 rounded-full font-bold">POSITIVE</span>
                </div>
                <h4 className="text-2xl font-bold mt-4">8.4 Sentiment</h4>
                <p className="text-on-surface-variant text-sm mt-1">Based on recent 450 messages</p>
              </div>
              <div className="space-y-4">
                <Progress label="JOY" value={75} color="bg-secondary" />
                <Progress label="TRUST" value={88} color="bg-tertiary" />
              </div>
            </div>

            {/* Response Volume */}
            <div className="col-span-12 md:col-span-4 row-span-2 bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between group shadow-sm border border-transparent hover:border-outline-variant/30 transition-colors">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-on-surface">Response Volume</h4>
                <ArrowUpRight size={20} className="text-on-surface-variant" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black">2.4k</span>
                <span className="text-green-600 text-xs font-bold">+12.4%</span>
              </div>
              <div className="h-24 flex items-end gap-1 px-1">
                {[4, 6, 8, 5, 10, 6, 7].map((h, i) => (
                  <div key={i} className={cn("w-2 rounded-full transition-all duration-300", i === 4 ? "bg-primary h-5/6" : "bg-primary/10 group-hover:bg-primary/30 h-" + (h*10) + "%")} style={{ height: `${h*10}%` }}></div>
                ))}
              </div>
            </div>

            {/* Critical Threads */}
            <div className="col-span-12 md:col-span-8 row-span-3 bg-surface-container-low rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg">Critical Threads</h4>
                <button className="text-xs font-bold text-primary hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                <ThreadItem initials="JD" name="Julien Davenport" subject="Project Phoenix Deployment" tag="REVIEW REQ" tagColor="text-tertiary bg-tertiary-fixed" />
                <ThreadItem initials="AM" name="Aisha Mahrez" subject="Survey feedback: UI consistency updates" tag="SURVEY" tagColor="text-secondary bg-secondary-fixed" />
                <ThreadItem initials="BS" name="Bennet Sullivan" subject="Escalation: Server latency in region EU-1" tag="CRITICAL" tagColor="text-on-error-container bg-error-container" />
              </div>
            </div>

            {/* Team Availability */}
            <div className="col-span-12 md:col-span-4 row-span-1 bg-tertiary text-white rounded-xl p-6 flex items-center justify-between group overflow-hidden relative">
              <div className="relative z-10 transition-transform group-hover:translate-x-1 duration-300">
                <p className="text-[10px] font-bold opacity-70">TEAM AVAILABILITY</p>
                <p className="text-xl font-bold">12 Agents Online</p>
              </div>
              <span className="material-symbols-outlined text-4xl opacity-30 group-hover:scale-110 transition-transform relative z-10 duration-300">support_agent</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Messaging FAB */}
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
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "px-2 py-2.5 rounded-lg flex items-center gap-3 transition-all duration-300 cursor-pointer",
      active ? "bg-white text-primary shadow-sm font-bold" : "text-on-surface-variant hover:bg-surface-container hover:translate-x-1"
    )}>
      <span className="opacity-70">{icon}</span>
      <span className="text-[10px] uppercase tracking-widest font-black leading-none">{label}</span>
    </div>
  );
}

function Bar({ height, className }: { height: string, className?: string }) {
  return (
    <div className={cn("flex-1 bg-white rounded-t-lg transition-all duration-500", className)} style={{ height }}></div>
  );
}

function Progress({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div className={cn("h-full", color)} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function ThreadItem({ initials, name, subject, tag, tagColor }: { initials: string, name: string, subject: string, tag: string, tagColor: string }) {
  return (
    <div className="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between hover:translate-x-1 transition-transform cursor-pointer shadow-sm border border-transparent hover:border-outline-variant/30">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">{initials}</div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-on-surface-variant">{subject}</p>
        </div>
      </div>
      <span className={cn("text-[10px] font-bold px-3 py-1 rounded-full", tagColor)}>{tag}</span>
    </div>
  );
}
