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
            <h2 className="text-2xl font-bold tracking-tight text-on-surface leading-tight">Escalate Message</h2>
            <p className="text-on-surface-variant text-sm mt-1">Elevate this thread to specialized support tier.</p>
          </div>
          <button onClick={onClose} className="text-outline hover:text-on-surface transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-8 py-4 space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] text-outline uppercase tracking-wider font-bold">Ticket Priority</label>
            <div className="flex flex-wrap gap-2">
              <PriorityOption label="Low" activeColor="peer-checked:bg-secondary/10 peer-checked:text-secondary peer-checked:border-secondary" />
              <PriorityOption label="Medium" activeColor="peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary" defaultChecked />
              <PriorityOption label="High" activeColor="peer-checked:bg-tertiary/10 peer-checked:text-tertiary peer-checked:border-tertiary" />
              <PriorityOption label="Urgent" activeColor="peer-checked:bg-error/10 peer-checked:text-error peer-checked:border-error" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-outline uppercase tracking-wider font-bold">Assignee</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
              <input 
                type="text" 
                defaultValue="Marcus Aurelius (Curation Lead)"
                className="w-full bg-surface-container-low border border-outline-variant rounded-md text-sm pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Search team members..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-outline uppercase tracking-wider font-bold">Internal Note</label>
            <textarea 
              className="w-full bg-surface-container-low border border-outline-variant rounded-md text-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
              placeholder="Explain the reason for escalation..."
              rows={3}
              defaultValue="Requires high-fidelity asset verification from the archival department. SLA is approaching critical threshold."
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-8 pb-8 pt-4 flex flex-col sm:flex-row justify-end items-center gap-3">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container rounded-md transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={() => onNavigate(View.EXPANDED_WORKSPACE)}
            className="w-full sm:w-auto px-8 py-2.5 text-sm font-medium text-white rounded-md bg-primary shadow-sm hover:bg-primary-container active:scale-95 transition-all"
          >
            Create Ticket
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
