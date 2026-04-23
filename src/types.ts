export enum View {
  HOST_ANALYTICS = 'host_analytics',
  COMPACT_MESSAGING = 'compact_messaging',
  EXPANDED_WORKSPACE = 'expanded_workspace',
  ACTION_MODAL = 'action_modal',
  TICKETS_DASHBOARD = 'tickets_dashboard',
  TICKET_DETAIL = 'ticket_detail',
}

export type NavigationTransition = 'push' | 'push_back' | 'slide_up' | 'none';

export interface Ticket {
  id: string;
  subject: string;
  requester: string;
  status: 'In Progress' | 'Open' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  assignee: string;
  lastUpdated: string;
  avatar?: string;
}
