import { ReactNode } from "react";

interface DesignPrincipleProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "default" | "highlighted";
}

export function DesignPrinciple({
  title,
  description,
  icon,
  variant = "default",
}: DesignPrincipleProps) {
  const borderClass =
    variant === "highlighted" ? "border-brand-coral/50" : "border-base-border";

  return (
    <div
      className={`p-4 md:p-6 border ${borderClass} rounded-lg hover:border-brand-green/50 transition-colors`}
    >
      {icon && (
        <div className="text-3xl mb-4" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-base-text mb-3">{title}</h3>
      <p className="text-base-text/70 leading-relaxed">{description}</p>
    </div>
  );
}
