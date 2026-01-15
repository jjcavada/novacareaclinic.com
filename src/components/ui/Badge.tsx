
import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'success' | 'warning' | 'error';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className = '', variant = 'primary', children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary/10 text-primary border-primary/20",
            secondary: "bg-secondary/10 text-secondary border-secondary/20",
            accent: "bg-accent/10 text-accent border-accent/20",
            outline: "border border-border text-text-gray",
            success: "bg-green-100 text-green-700 border-green-200",
            warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
            error: "bg-red-100 text-red-700 border-red-200",
        };

        return (
            <span
                ref={ref}
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export { Badge };
