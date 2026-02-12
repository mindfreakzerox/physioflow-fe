import type { Task } from '../lib/mock-data';

export function TaskList({ tasks }: { tasks: Task[] }) {
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
