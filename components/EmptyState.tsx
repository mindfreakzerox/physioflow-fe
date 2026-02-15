type Action = {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost' | 'subtle';
};

export function EmptyState({
  title,
  body,
  primaryAction,
  secondaryAction,
}: {
  title: string;
  body: string;
  primaryAction?: Action;
  secondaryAction?: Action;
}) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p className="muted small">{body}</p>
      {(primaryAction || secondaryAction) && (
        <div className="empty-actions">
          {primaryAction && (
            <a
              className={`btn ${primaryAction.variant === 'ghost' ? 'ghost' : primaryAction.variant === 'subtle' ? 'subtle' : ''}`}
              href={primaryAction.href}
            >
              {primaryAction.label}
            </a>
          )}
          {secondaryAction && (
            <a
              className={`btn ${secondaryAction.variant === 'ghost' ? 'ghost' : secondaryAction.variant === 'subtle' ? 'subtle' : ''}`}
              href={secondaryAction.href}
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
