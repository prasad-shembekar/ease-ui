import { useId, type ReactNode } from "react";

const positions = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2 -translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0",
  left: "right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0",
  right: "left-full top-1/2 ml-3 -translate-y-1/2 -translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0",
} as const;

const colors = {
  violet: "bg-violet-700 text-white",
  emerald: "bg-emerald-700 text-white",
  rose: "bg-rose-600 text-white",
  amber: "bg-amber-300 text-amber-950",
  cyan: "bg-cyan-700 text-white",
} as const;

export interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: keyof typeof positions;
  color?: keyof typeof colors;
}

const Tooltip = ({
  children,
  content,
  position = "top",
  color = "violet",
}: TooltipProps) => {
  const tooltipId = useId();

  return (
    <span className="group relative inline-flex" aria-describedby={tooltipId}>
      {children}
      <span
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute z-20 w-max max-w-56 rounded-md px-3 py-2 text-sm font-medium shadow-lg opacity-0 transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${positions[position]} ${colors[color]}`}
      >
        {content}
      </span>
    </span>
  );
};

export { Tooltip };