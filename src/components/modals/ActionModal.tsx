import React from 'react';
import { X, Search, Bolt, CreditCard, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { View } from '../../types';
import { cn } from '../../lib/utils';

interface Props {
  onNavigate: (view: View) => void;
  onClose: () => void;
}

export default function ActionModal({ onNavigate, onClose }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm pointer-events-auto p-4"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="w-full max-w-[480px] bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden border border-outline-variant/10 ambient-shadow"
      >
        {/* Modal Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-on-surface leading-none">Escalate Message</h2>
            <p className="text-on-surface-variant text-xs font-medium mt-2">Elevate this thread to specialized support tier.</p>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors p-1">
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-8 py-4 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Ticket Priority</label>
            <div className="flex flex-wrap gap-2">
              <PriorityOption label="Low" activeColor="peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed-variant" />
              <PriorityOption label="Medium" activeColor="peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed-variant" defaultChecked />
              <PriorityOption label="High" activeColor="peer-checked:bg-tertiary-fixed peer-checked:text-on-tertiary-fixed-variant" />
              <PriorityOption label="Urgent" activeColor="peer-checked:bg-error-container peer-checked:text-on-error-container" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Assignee</label>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                defaultValue="Marcus Aurelius (Curation Lead)"
                className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-sm pl-10 pr-4 py-3 rounded-t-lg transition-all"
                placeholder="Search team members..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Internal Note</label>
            <textarea 
              className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-sm px-4 py-3 rounded-lg resize-none transition-all placeholder:italic"
              placeholder="Explain the reason for escalation..."
              rows={4}
              defaultValue="Requires high-fidelity asset verification from the archival department. SLA is approaching critical threshold."
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-8 pb-8 pt-4 flex flex-col sm:flex-row justify-end items-center gap-4">
          <button 
            onClick={() => onNavigate(View.HOST_ANALYTICS)}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-all"
          >
            Dashboard
          </button>
          <button 
            onClick={() => onNavigate(View.EXPANDED_WORKSPACE)}
            className="w-full sm:w-auto px-8 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-primary to-primary-container shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Create Ticket
          </button>
          <button 
            onClick={() => onNavigate(View.TICKETS_DASHBOARD)}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1 hover:bg-primary/5 rounded-lg transition-all group"
          >
            Escalate
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PriorityOption({ label, activeColor, defaultChecked = false }: { label: string, activeColor: string, defaultChecked?: boolean }) {
  return (
    <label className="cursor-pointer group">
      <input type="radio" name="priority" value={label.toLowerCase()} defaultChecked={defaultChecked} className="sr-only peer" />
      <div className={cn(
        "px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider bg-surface-container-high text-on-surface-variant peer-checked:shadow-md transition-all duration-300",
        activeColor
      )}>
        {label}
      </div>
    </label>
  );
}
