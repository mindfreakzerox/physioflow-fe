import type { Task } from '../lib/mock-data';
import { EmptyState } from './EmptyState';

export function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks?.length) {
    return (
      <EmptyState
        title="No follow-ups on deck"
        body="When you clear tasks, we keep the card visible. Add new follow-ups from the portal or drop us a note to wire your PMS feed."
        primaryAction={{ label: 'Add via portal', href: '/portal', variant: 'ghost' }}
        secondaryAction={{ label: 'Talk to us', href: '/contact', variant: 'subtle' }}
      />
    );
  }

  return (
    <ul className="list">
      {tasks.map((t) => (
        <li key={t.id} className="list-item">
          <div>
            <strong>{t.title}</strong>
            <div className="muted">{t.due}</div>
          </div>
          <span className={`pill ${t.status}`}>{t.status}</span>
        </li>
      ))}
    </ul>
  );
}
