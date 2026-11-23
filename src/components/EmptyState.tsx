type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-ink-900/15 bg-cream-100 px-6 py-14 text-center">
      <h2 className="font-display text-2xl font-semibold text-ink-900">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-700/70">{description}</p>
    </div>
  );
}
