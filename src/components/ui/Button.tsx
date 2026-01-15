
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', fullWidth = false, isLoading = false, children, disabled, ...props }, ref) => {

        // Base styles (Strict Compliance)
        // 44px min-height for touch targets (md and lg sizes)
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/95 shadow-sm hover:shadow-md",
            secondary: "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/95 shadow-sm",
            outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
            ghost: "text-text-charcoal hover:bg-gray-100",
            destructive: "bg-red-600 text-white hover:bg-red-700",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base", // 44px minimum height compliant (11 * 4 = 44px)
            lg: "h-14 px-8 text-lg",
            icon: "h-11 w-11",
        };

        const widthStyles = fullWidth ? "w-full" : "";

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
