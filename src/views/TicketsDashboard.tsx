import React from 'react';
import { Edit3, Search, Bell, Settings, HelpCircle, Ticket as TicketIcon, UserCheck, UserX, CheckCircle2, Filter, LayoutGrid, ListFilter, ChevronLeft, ChevronRight, MoreHorizontal, Bolt, Calendar } from 'lucide-react';
import { View, Ticket } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface Props {
  onNavigate: (view: View) => void;
}

const MOCK_TICKETS: Ticket[] = [
  {
    id: '#PRE-4822',
    subject: 'Escalated: Architectural layout adjustment',
    requester: 'Julianne Moore',
    status: 'In Progress',
    priority: 'Urgent',
    assignee: 'Marcus Aurelius',
    lastUpdated: '12 min ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxbgEae6ZlFpYS2poGlLfN4PnRXxhqP6tY8iA0I4RhbSRuzCDm-8QJbIP1Ngqhf3CMkx2u5HM2VdKm97WmUFXGydPUggHiDJ0dBcVTqZTYFRjbmqWyUDT8JKuj8kC8Vu24HT9LvnLKMnWd9dOy9Puh151E-qEUMXWHcxv25EyXy7hfBl0usuXq9pIJPZrAP8Kv--BFVjlNLc1F1GBiKSXQ3fZkl1kZL5CfLZeYvwxjE-SmYne5i8fvOrFovwgMtBUPbkyFUk64d54'
  },
  {
    id: '#PRE-4819',
    subject: 'Typography scale mismatch in Q3 Review',
    requester: 'Oscar Isaac',
    status: 'Open',
    priority: 'High',
    assignee: 'Unassigned',
    lastUpdated: '2 hours ago'
  },
  {
    id: '#PRE-4795',
    subject: 'Color token mapping for Glass panels',
    requester: 'Cate Blanchett',
    status: 'Resolved',
    priority: 'Medium',
    assignee: 'Tom Hardy',
    lastUpdated: 'Yesterday'
  },
  {
    id: '#PRE-4781',
    subject: 'Missing backdrop-blur on Mobile Nav',
    requester: 'Mahershala Ali',
    status: 'In Progress',
    priority: 'Low',
    assignee: 'Marcus Aurelius',
    lastUpdated: 'Jan 24, 2024'
  }
];

export default function TicketsDashboard({ onNavigate }: Props) {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-72 glass-panel flex flex-col p-6 space-y-2 shadow-[40px_0_40px_rgba(0,72,141,0.06)] z-50">
        <div className="flex items-center space-x-3 mb-10 px-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-primary-container flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Edit3 size={20} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-blue-900 leading-none">Precision Editorial</h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Ticketing System</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <TicketingNavItem icon={<TicketIcon size={20} />} label="All Tickets" active />
          <TicketingNavItem 
            icon={<UserCheck size={20} />} 
            label="My Tickets" 
            onClick={() => onNavigate(View.TICKET_DETAIL)}
          />
          <TicketingNavItem icon={<UserX size={20} />} label="Unassigned" />
          <TicketingNavItem icon={<CheckCircle2 size={20} />} label="Solved" />
        </nav>

        <div className="pt-4 border-t border-surface-container-high">
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white rounded-xl py-3 px-4 flex items-center justify-center space-x-2 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <span className="text-sm">New Ticket</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-72 flex flex-col">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-18rem)] h-16 z-40 bg-white/90 backdrop-blur-md flex justify-between items-center px-8 border-b border-surface-container-high/30">
          <div className="flex items-center w-1/3">
            <div className="relative w-full max-w-sm group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search tickets, IDs, or assignees..." 
                className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="text-on-surface-variant hover:text-primary transition-colors relative"><Bell size={20} /></button>
              <button className="text-on-surface-variant hover:text-primary transition-colors"><Settings size={20} /></button>
              <button className="text-on-surface-variant hover:text-primary transition-colors"><HelpCircle size={20} /></button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-xs font-black text-on-surface leading-tight">Marcus Aurelius</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">System Admin</p>
              </div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQZWS-m1tx3R-7fy9Iotll0FFY3cBp53YQCfIq3fdeEW7Y_sYs70IFSpKAOVrOkJheZiby8VklbGFU6YJmUJbbtPTzZc4jR-orZfwKeOiyVNhHGtVK1ji2u9dtSfAQhJcqvEQ32kkqrVLgwczV9smqkf-6eyI03t0GDBTs5orIWkr5AYseGETB6zWS5xavZqg88g8J0CPYaZYop4Y5vC30ThHrkcaPsi7cM-MYLb6USOeicKHPxIxG6BKnpfVsJTdJ8j2eSxEpK4" alt="Admin" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10" />
            </div>
          </div>
        </header>

        <div className="pt-24 px-8 pb-12 flex-1">
          {/* Bento Header */}
          <div className="grid grid-cols-12 gap-6 mb-8">
            <div className="col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black text-on-surface tracking-tight mb-2">Ticket Console</h2>
                <p className="text-on-surface-variant text-sm max-w-md">Manage and curate high-priority editorial escalations with architectural precision.</p>
              </div>
              <div className="flex items-center space-x-12 mt-6">
                <Stat label="Active Tickets" value="128" color="text-primary" />
                <Stat label="Avg. Resolution" value="4.2h" color="text-secondary" />
                <Stat label="SLA Compliance" value="98%" color="text-tertiary" />
              </div>
            </div>
            <div className="col-span-4 bg-primary rounded-xl p-6 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="relative z-10 transition-transform group-hover:translate-y-[-4px] duration-500">
                <h3 className="font-bold text-lg mb-1">Weekly Digest</h3>
                <p className="text-blue-100 text-xs mb-4">You've resolved 12% more tickets than last week. Great architectural progress!</p>
                <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-bold transition-all backdrop-blur-sm shadow-sm ring-1 ring-white/10">View Report</button>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]">architecture</span>
              </div>
            </div>
          </div>

          {/* Table Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FilterTab icon={<ChevronLeft size={16} />} label="All Status" />
              <FilterTab icon={<Bolt size={16} />} label="Priority" />
              <FilterTab icon={<Calendar size={16} />} label="Date Range" />
            </div>
            <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl">
              <button className="p-2 text-on-surface-variant hover:bg-white hover:shadow-sm rounded-lg transition-all"><LayoutGrid size={18} /></button>
              <button className="p-2 bg-primary text-white shadow-lg shadow-primary/20 rounded-lg"><ListFilter size={18} /></button>
            </div>
          </div>

          {/* Tickets Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container-high/50">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Ticket ID</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Subject</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Priority</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Assignee</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {MOCK_TICKETS.map((ticket) => (
                    <tr 
                      key={ticket.id} 
                      onClick={() => onNavigate(View.TICKET_DETAIL)}
                      className={cn(
                        "group hover:bg-surface-container-low transition-colors cursor-pointer",
                        ticket.requester === 'Julianne Moore' && "id-julianne-moore"
                      )}
                    >
                      <td className="px-6 py-6 font-mono text-xs text-primary font-bold">{ticket.id}</td>
                      <td className="px-6 py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{ticket.subject}</span>
                          <span className="text-[10px] text-on-surface-variant italic mt-0.5">From: {ticket.requester}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm">
                        <StatusBadge status={ticket.status} />
                      </td>
                      <td className="px-6 py-6">
                        <PriorityBadge priority={ticket.priority} />
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center space-x-2">
                          {ticket.avatar ? (
                            <img src={ticket.avatar} alt={ticket.assignee} className="w-5 h-5 rounded-full ring-1 ring-primary/5" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-surface-container-highest text-[8px] flex items-center justify-center font-bold text-on-surface-variant uppercase">
                              {ticket.assignee.slice(0, 2)}
                            </div>
                          )}
                          <span className={cn("text-xs font-semibold", ticket.assignee === 'Unassigned' ? "text-on-surface-variant italic opacity-60" : "text-on-surface")}>{ticket.assignee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-right tabular-nums text-[11px] font-medium text-on-surface-variant">{ticket.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-surface-container-low/30 px-6 py-4 flex items-center justify-between border-t border-surface-container-high/50">
              <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Showing 4 of 128 results</span>
              <div className="flex space-x-1">
                <PaginationButton icon={<ChevronLeft size={16} />} />
                <PaginationButton label="1" active />
                <PaginationButton label="2" />
                <PaginationButton label="3" />
                <PaginationButton icon={<ChevronRight size={16} />} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TicketingNavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-300",
        active ? "bg-white text-primary shadow-sm font-bold" : "text-on-surface-variant hover:bg-slate-200/50"
      )}
    >
      <span className="opacity-70">{icon}</span>
      <span className="text-sm font-semibold tracking-tight">{label}</span>
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    'In Progress': 'bg-secondary-fixed text-on-secondary-fixed-variant',
    'Open': 'bg-primary-fixed text-on-primary-fixed-variant',
    'Resolved': 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    'Closed': 'bg-surface-container-highest text-on-surface-variant'
  }[status as keyof typeof styles];

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider", styles)}>
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles = {
    'Urgent': 'bg-error-container text-on-error-container',
    'High': 'bg-tertiary-fixed/50 text-on-tertiary-fixed-variant',
    'Medium': 'bg-surface-container-highest text-on-surface-variant',
    'Low': 'bg-surface-container-high text-on-surface-variant/70'
  }[priority as keyof typeof styles];

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider", styles)}>
      {priority}
    </span>
  );
}

function Stat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant">{label}</span>
      <span className={cn("text-2xl font-black mt-1", color)}>{value}</span>
    </div>
  );
}

function FilterTab({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="bg-white hover:shadow-md transition-all px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 text-on-surface border border-surface-container-high/50 active:scale-95">
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PaginationButton({ icon, label, active = false }: { icon?: React.ReactNode, label?: string, active?: boolean }) {
  return (
    <button className={cn(
      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
      active ? "bg-primary text-on-primary font-bold shadow-lg" : "hover:bg-surface-container-highest text-on-surface-variant"
    )}>
      {icon || <span className="text-xs">{label}</span>}
    </button>
  );
}
