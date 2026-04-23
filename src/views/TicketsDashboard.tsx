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
            <TicketingNavItem icon={<TicketIcon size={18} />} label="All Tickets" active />
            <TicketingNavItem 
              icon={<UserCheck size={18} />} 
              label="My Assigned" 
              onClick={() => onNavigate(View.TICKET_DETAIL)}
            />
            <TicketingNavItem icon={<UserX size={18} />} label="Unassigned" />
            <TicketingNavItem icon={<CheckCircle2 size={18} />} label="Resolved" />
          </nav>
        </div>

        <div className="mt-auto pt-4 border-t border-outline-variant space-y-1">
          <TicketingNavItem icon={<HelpCircle size={18} />} label="Help Center" />
          <TicketingNavItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 overflow-y-auto">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-14 bg-white border-b border-outline-variant z-30 flex justify-between items-center px-6">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <input 
                type="text" 
                placeholder="Search tickets, IDs, or assignees..." 
                className="w-full bg-surface-container-low border border-outline-variant rounded-md text-sm pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-outline hover:text-on-surface transition-colors relative"><Bell size={20} /></button>
            <button className="p-2 text-outline hover:text-on-surface transition-colors"><Settings size={20} /></button>
            <div className="h-8 w-[1px] bg-outline-variant mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold text-on-surface leading-tight">Marcus Aurelius</p>
                <p className="text-[10px] text-outline uppercase font-bold">Admin</p>
              </div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQZWS-m1tx3R-7fy9Iotll0FFY3cBp53YQCfIq3fdeEW7Y_sYs70IFSpKAOVrOkJheZiby8VklbGFU6YJmUJbbtPTzZc4jR-orZfwKeOiyVNhHGtVK1ji2u9dtSfAQhJcqvEQ32kkqrVLgwczV9smqkf-6eyI03t0GDBTs5orIWkr5AYseGETB6zWS5xavZqg88g8J0CPYaZYop4Y5vC30ThHrkcaPsi7cM-MYLb6USOeicKHPxIxG6BKnpfVsJTdJ8j2eSxEpK4" alt="Admin" className="w-8 h-8 rounded-full object-cover border border-outline-variant" />
            </div>
          </div>
        </header>

        <main className="p-8 mt-14 max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-8">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-2xl font-bold text-on-surface tracking-tight mb-2">Support Ticket Console</h2>
              <p className="text-on-surface-variant text-sm max-w-md">Real-time management of prioritized host and guest escalations.</p>
              <div className="flex items-center gap-8 mt-8">
                <Stat label="Active" value="128" color="text-primary" />
                <Stat label="Resolution" value="4.2h" color="text-secondary" />
                <Stat label="SLA Compliance" value="98%" color="text-tertiary" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-primary text-white rounded-xl p-6 shadow-lg flex flex-col justify-center relative overflow-hidden">
               <h3 className="font-bold text-sm uppercase tracking-wider mb-2 opacity-80">Weekly Summary</h3>
               <p className="text-xl font-light mb-4">12% more resolutions today than average.</p>
               <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md text-xs font-bold transition-all w-fit">View Report</button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FilterTab icon={<ChevronLeft size={14} />} label="All Status" />
              <FilterTab icon={<Bolt size={14} />} label="Priority" />
              <FilterTab icon={<Calendar size={14} />} label="Recent" />
            </div>
          </div>

          {/* Tickets Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-outline-variant">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline">Ticket ID</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline">Subject</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline">Priority</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline">Assignee</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-outline text-right">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {MOCK_TICKETS.map((ticket) => (
                    <tr 
                      key={ticket.id} 
                      onClick={() => onNavigate(View.TICKET_DETAIL)}
                      className="group hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-5 font-mono text-xs text-primary font-bold">{ticket.id}</td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{ticket.subject}</span>
                          <span className="text-[10px] text-outline mt-0.5">From: {ticket.requester}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <StatusBadge status={ticket.status} />
                      </td>
                      <td className="px-6 py-5">
                        <PriorityBadge priority={ticket.priority} />
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          {ticket.avatar ? (
                            <img src={ticket.avatar} alt={ticket.assignee} className="w-5 h-5 rounded-full border border-outline-variant" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-surface-container text-[8px] flex items-center justify-center font-bold text-outline uppercase">
                              {ticket.assignee.slice(0, 2)}
                            </div>
                          )}
                          <span className={cn("text-xs font-medium", ticket.assignee === 'Unassigned' ? "text-outline italic" : "text-on-surface")}>{ticket.assignee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right tabular-nums text-[11px] font-medium text-outline">{ticket.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-surface-container-low px-6 py-3 flex items-center justify-between border-t border-outline-variant">
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">4 of 128 results</span>
              <div className="flex items-center gap-1">
                <PaginationButton icon={<ChevronLeft size={14} />} />
                <PaginationButton label="1" active />
                <PaginationButton label="2" />
                <PaginationButton icon={<ChevronRight size={14} />} />
              </div>
            </div>
          </div>
        </main>
      </div>
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
