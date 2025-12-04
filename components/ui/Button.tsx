import React from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Icon component (e.g. from lucide-react). Rendered on the left when provided.
     */
    icon?: IconComponent;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

/** Simple classnames helper */
const cn = (...parts: Array<string | false | null | undefined>) =>
    parts.filter(Boolean).join(" ");

const SIZE_STYLES: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, icon: Icon, variant = "primary", size = "md", disabled, ...rest }, ref) => {
        const base = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out hover:scale-[0.98] cursor-pointer";
        const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "active:scale-[0.99]";
        const sizeClass = SIZE_STYLES[size] ?? SIZE_STYLES.md;

        return (
            <button
                ref={ref}
                className={cn(base, sizeClass, disabledClasses, className)}
                disabled={disabled}
                {...rest}
            >
                {Icon && <Icon className={cn("mr-2 flex-none")} aria-hidden />}
                <span>{children}</span>
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;