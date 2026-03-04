export type ProjectStatus = "active" | "planned" | "archived";

export const statusConfig: Record<
  ProjectStatus,
  { color: string; label: string }
> = {
  active: {
    color: "bg-brand-green/20 text-brand-green border-brand-green/50",
    label: "Active",
  },
  planned: {
    color: "bg-brand-coral/20 text-brand-coral border-brand-coral/50",
    label: "Planned",
  },
  archived: {
    color: "bg-base-text/10 text-base-text/50 border-base-text/30",
    label: "Archived",
  },
};
