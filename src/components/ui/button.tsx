import * as React from "react";
import { cn } from "../../lib/utils";

const variantClasses = {
  default: "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.97]",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.97]",
  ghost: "hover:bg-muted hover:text-foreground active:scale-[0.97]",
  outline: "border border-border bg-transparent hover:bg-muted active:scale-[0.97]",
  link: "text-primary underline-offset-4 hover:underline",
  navCta: "text-foreground bg-nav-button hover:bg-nav-button/80 border border-border active:scale-[0.97] rounded-lg uppercase text-xs tracking-widest",
  hero: "bg-primary text-primary-foreground uppercase tracking-wide hover:brightness-110 active:scale-[0.97] rounded-sm font-bold",
  heroOutline: "bg-white text-background uppercase tracking-wide hover:brightness-90 active:scale-[0.97] rounded-sm font-bold",
} as const;

const sizeClasses = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-6 text-sm",
  xl: "px-8 py-4 text-sm",
  icon: "h-10 w-10",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-sora font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
