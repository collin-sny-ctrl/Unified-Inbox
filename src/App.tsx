import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { View } from './types';
import HostAnalyticsDashboard from './views/HostAnalyticsDashboard';
import TicketsDashboard from './views/TicketsDashboard';
import TicketDetailView from './views/TicketDetailView';
import SocialManagementView from './views/SocialManagementView';
import ExpandedWorkspaceOverlay from './views/ExpandedWorkspaceOverlay';
import CompactMessagingOverlay from './components/overlays/CompactMessagingOverlay';
import ActionModal from './components/modals/ActionModal';
import { cn } from './lib/utils';

// Transition configurations
const transitions = {
  push: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-20%' },
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  },
  push_back: {
    initial: { x: '-20%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  },
  slide_up: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  },
  none: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
  }
};

const OVERLAYS = [View.EXPANDED_WORKSPACE, View.COMPACT_MESSAGING, View.ACTION_MODAL];

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOST_ANALYTICS);
  const [history, setHistory] = useState<View[]>([View.HOST_ANALYTICS]);
  const [lastTransition, setLastTransition] = useState<keyof typeof transitions | 'none'>('none');

  const navigate = (to: View, transition: keyof typeof transitions = 'push') => {
    setLastTransition(transition);
    setCurrentView(to);
    setHistory(prev => [...prev, to]);
  };

  const goBack = (transition: keyof typeof transitions = 'push_back') => {
    if (history.length > 1) {
      setLastTransition(transition);
      const newHistory = [...history];
      newHistory.pop();
      const previousView = newHistory[newHistory.length - 1];
      setCurrentView(previousView);
      setHistory(newHistory);
    }
  };

  const baseView = useMemo(() => {
    return [...history].reverse().find(v => !OVERLAYS.includes(v)) || View.HOST_ANALYTICS;
  }, [history]);

  const activeOverlay = OVERLAYS.includes(currentView) ? currentView : null;
  const currentTransition = transitions[lastTransition === 'none' ? 'none' : lastTransition];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-surface">
      {/* Base Layer */}
      <div className={cn(
        "absolute inset-0 w-full h-full transition-all duration-300 ease-in-out",
        (activeOverlay && activeOverlay !== View.COMPACT_MESSAGING) ? "pointer-events-none" : ""
      )}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={baseView}
            className="absolute inset-0 w-full h-full"
            initial={currentTransition.initial}
            animate={currentTransition.animate}
            exit={currentTransition.exit}
            transition={currentTransition.transition}
          >
            {baseView === View.HOST_ANALYTICS && (
              <HostAnalyticsDashboard 
                onNavigate={(view) => {
                  const trans = view === View.COMPACT_MESSAGING ? 'slide_up' : 'push';
                  navigate(view, trans);
                }} 
              />
            )}

            {baseView === View.TICKETS_DASHBOARD && (
              <TicketsDashboard 
                onNavigate={(view) => navigate(view, 'push')} 
              />
            )}

            {baseView === View.TICKET_DETAIL && (
              <TicketDetailView 
                onNavigate={(view) => {
                  if (view === View.TICKETS_DASHBOARD) goBack('push_back');
                  else navigate(view, 'push');
                }} 
              />
            )}

            {baseView === View.SOCIAL_MANAGEMENT && (
              <SocialManagementView 
                onNavigate={(view) => navigate(view, 'push')} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Layer */}
      <AnimatePresence>
        {activeOverlay && (
          <motion.div
            key={activeOverlay}
            className="absolute inset-0 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {activeOverlay === View.EXPANDED_WORKSPACE && (
              <ExpandedWorkspaceOverlay 
                onNavigate={(view) => navigate(view, 'push')}
                onClose={() => goBack('push_back')}
              />
            )}

            {activeOverlay === View.COMPACT_MESSAGING && (
              <CompactMessagingOverlay 
                onNavigate={(view) => navigate(view, 'push')}
                onClose={() => goBack('push_back')}
              />
            )}

            {activeOverlay === View.ACTION_MODAL && (
              <ActionModal 
                onNavigate={(view) => {
                  if (view === View.HOST_ANALYTICS) {
                    goBack('push_back');
                  } else {
                    navigate(view, 'push');
                  }
                }}
                onClose={() => goBack('push_back')}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
