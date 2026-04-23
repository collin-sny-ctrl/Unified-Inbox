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
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-outline-variant z-40 hidden md:flex flex-col p-4 shadow-sm">
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">H</div>
          <span className="font-semibold text-lg tracking-tight text-on-surface">HostPortal</span>
        </div>
        
        <div className="mb-6">
          <label className="text-[10px] font-bold text-outline uppercase tracking-wider mb-3 block px-3">Analytics</label>
          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active />
            <NavItem icon={<BarChart3 size={18} />} label="Performance" />
            <NavItem icon={<ArrowUpRight size={18} />} label="Revenue Hub" />
          </nav>
        </div>

        <div className="mb-6">
          <label className="text-[10px] font-bold text-outline uppercase tracking-wider mb-3 block px-3">Management</label>
          <nav className="space-y-1">
            <NavItem icon={<MessageSquare size={18} />} label="Messages" />
            <NavItem icon={<Users size={18} />} label="Team" />
            <NavItem icon={<Archive size={18} />} label="Archive" />
          </nav>
        </div>

        <div className="mt-auto pt-4 border-t border-outline-variant space-y-1">
          <NavItem icon={<HelpCircle size={18} />} label="Help Center" />
          <NavItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 overflow-y-auto">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-14 bg-white border-b border-outline-variant z-30 flex justify-between items-center px-6">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold tracking-tighter text-on-surface md:hidden">HostPortal</span>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="font-medium text-sm text-primary border-b-2 border-primary h-14 flex items-center">Dashboard</a>
              <button 
                onClick={() => onNavigate(View.ACTION_MODAL)}
                className="font-medium text-sm text-on-surface-variant hover:text-on-surface transition-colors h-14 flex items-center"
                id="workspace-link"
              >
                Workspace
              </button>
              <a href="#" className="font-medium text-sm text-on-surface-variant hover:text-on-surface transition-colors h-14 flex items-center">Reporting</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-outline hover:text-on-surface-variant transition-colors relative">
              <Bell size={20} />
            </button>
            <button className="p-2 text-outline hover:text-on-surface-variant transition-colors">
              <Settings size={20} />
            </button>
            <button 
              onClick={() => onNavigate(View.ACTION_MODAL)}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-primary-container transition-all"
            >
              Escalate Issue
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container border border-outline-variant">
              <img className="rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoA4YhkmGNa9Be7xLoE1JTdDNjkuplF1BdVO8SBE-g2HudXgWBgjkL9Bwr0r2on2s8fsAOs9_gl0n4ukFU84SuWPKvU2QvocxFngAIhbis1BlYmJjkn5_0qJrwMRpLUTyRaH80h4pR62nMG_d7byCg0O0rXTx_eANVaeLEwlAnEuswf7eZiwCFJ6vjYYn7IxLYUuNqHKmeRDjcky0sHoPv_uTxzqSr8BZBuvGD4x7TNqNU96zNcCzIQOraaOc4U5dXGbMjyrSdXIQ" alt="Profile" />
            </div>
          </div>
        </header>

        <main className="p-8 mt-14 max-w-5xl w-full mx-auto">
          <header className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-on-surface leading-tight">Host Analytics Dashboard</h1>
              <p className="text-on-surface-variant text-sm mt-1">Performance summary for Dec 1 - Dec 31, 2023</p>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6 mb-8 group/grid">
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
              <p className="text-xs font-bold text-outline uppercase tracking-wide">Occupancy Rate</p>
              <p className="text-3xl font-light text-on-surface mt-1">84.2%</p>
              <div className="mt-4 h-1 bg-surface-container rounded-full overflow-hidden text-emerald-500">
                <div className="h-full bg-secondary w-[84%]"></div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
              <p className="text-xs font-bold text-outline uppercase tracking-wide">Total Bookings</p>
              <p className="text-3xl font-light text-on-surface mt-1">1,248</p>
              <p className="text-xs text-secondary mt-2 font-medium">↑ 12% vs last month</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm transition-shadow hover:shadow-md">
              <p className="text-xs font-bold text-outline uppercase tracking-wide">Revenue</p>
              <p className="text-3xl font-light text-on-surface mt-1">$42,850</p>
              <p className="text-xs text-outline mt-2">Net earnings after fees</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
                <div className="p-4 border-b border-surface-container-low flex justify-between items-center">
                  <h3 className="font-semibold text-on-surface">Critical Threads</h3>
                  <button className="text-xs font-medium text-primary hover:underline uppercase tracking-tighter">View All Tickets</button>
                </div>
                <div className="divide-y divide-surface-container-low">
                  <ThreadItem initials="JD" name="Julien Moore" subject="Seaside Retreat #402" tag="IN PROGRESS" tagColor="bg-amber-50 text-amber-700" />
                  <ThreadItem initials="AM" name="Aisha Mahrez" subject="Modern Loft Downtown" tag="QUEUED" tagColor="bg-slate-100 text-slate-600" />
                  <ThreadItem initials="BS" name="Bennet Sullivan" subject="Luxury Penthouse Suite" tag="CRITICAL" tagColor="bg-error-container text-on-error-container" />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-outline uppercase tracking-wide">Sentiment score</span>
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded font-bold">POSITIVE</span>
                </div>
                <p className="text-3xl font-light text-on-surface">8.4</p>
                <div className="mt-6 space-y-4">
                  <Progress label="JOY" value={75} color="bg-secondary" />
                  <Progress label="TRUST" value={88} color="bg-tertiary" />
                </div>
              </div>

              <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-bold text-sm uppercase tracking-widest opacity-70">Team availability</h3>
                  <p className="text-2xl font-light mt-1">12 Agents Online</p>
                  <button className="mt-4 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Open Support Hub <ArrowUpRight size={14} />
                  </button>
                </div>
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-8xl">support_agent</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Messaging FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          aria-label="Open messaging"
          id="messaging-fab"
          onClick={() => onNavigate(View.COMPACT_MESSAGING)}
          className="relative flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-container hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white ring-2 ring-white">2</span>
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
