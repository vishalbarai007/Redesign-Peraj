import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007F73] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#007F73] text-white hover:bg-[#00685E] shadow-[0_4px_14px_0_rgba(0,127,115,0.35)] hover:shadow-[0_6px_20px_rgba(0,127,115,0.5)]",
      secondary:
        "bg-[#102A43] text-white hover:bg-[#0B1D3A] shadow-sm",
      outline:
        "border border-[#102A43]/20 bg-transparent text-[#102A43] hover:bg-[#102A43]/5",
      ghost:
        "bg-transparent text-[#102A43] hover:bg-[#102A43]/5",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs rounded-md",
      md: "h-11 px-6 text-sm rounded-md",
      lg: "h-13 px-8 text-base rounded-md",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
