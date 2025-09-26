import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    // Base styles - Mobile-first approach
    "inline-flex items-center justify-center font-medium transition-all duration-300",
    "rounded-xl border-2 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/20",
    "disabled:pointer-events-none disabled:opacity-50",
    "transform hover:scale-[1.02] active:scale-[0.98]",
    // Mobile touch optimization
    "touch-manipulation",
    // Typography
    "text-center whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        // Primary Gold Button - Agency Hero Style
        hero: [
          "bg-gradient-to-r from-gold to-gold-light text-agency-black",
          "border-gold shadow-lg hover:shadow-xl",
          "hover:from-gold-light hover:to-gold",
          "font-bold tracking-wide",
        ],
        
        // Outline Gold - Premium Secondary
        "outline-gold": [
          "bg-transparent text-gold border-gold",
          "hover:bg-gold hover:text-agency-black",
          "shadow-md hover:shadow-lg",
          "backdrop-blur-sm",
        ],
        
        // WhatsApp Green - Branded
        whatsapp: [
          "bg-[#25D366] text-white border-[#25D366]",
          "hover:bg-[#128C7E] hover:border-[#128C7E]",
          "shadow-lg hover:shadow-xl",
          "font-semibold",
        ],
        
        // Default - Clean & Professional
        default: [
          "bg-premium-white text-agency-black border-gray-300",
          "hover:bg-gray-light hover:border-gray-medium",
          "shadow-sm hover:shadow-md",
        ],
        
        // Destructive - Error States
        destructive: [
          "bg-red-500 text-white border-red-500",
          "hover:bg-red-600 hover:border-red-600",
          "shadow-md hover:shadow-lg",
        ],
        
        // Ghost - Minimal
        ghost: [
          "bg-transparent text-agency-black border-transparent",
          "hover:bg-gray-light hover:text-agency-black",
        ],
        
        // Dark - For Light Backgrounds
        dark: [
          "bg-agency-black text-premium-white border-agency-black",
          "hover:bg-agency-black-soft",
          "shadow-lg hover:shadow-xl",
        ],
      },
      
      size: {
        // Mobile-optimized sizes (minimum 44px for iOS)
        sm: "h-11 px-4 text-sm min-w-[120px]",
        default: "h-12 px-6 text-base min-w-[140px]",
        lg: "h-14 px-8 text-lg min-w-[160px]",
        xl: "h-16 px-10 text-xl min-w-[180px]",
        
        // Icon-only buttons
        icon: "h-12 w-12 p-0",
        "icon-sm": "h-10 w-10 p-0",
        "icon-lg": "h-14 w-14 p-0",
      },
      
      // Mobile-specific responsive behavior
      responsive: {
        mobile: "w-full sm:w-auto", // Full width on mobile, auto on larger screens
        desktop: "w-auto",
        full: "w-full",
      },
    },
    
    defaultVariants: {
      variant: "default",
      size: "default",
      responsive: "desktop",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    responsive,
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, responsive, className }),
          loading && "pointer-events-none opacity-70"
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {/* Left Icon */}
        {leftIcon && !loading && (
          <span className="mr-2 flex items-center">
            {leftIcon}
          </span>
        )}
        
        {/* Button Content */}
        <span className="flex items-center justify-center">
          {children}
        </span>
        
        {/* Right Icon */}
        {rightIcon && !loading && (
          <span className="ml-2 flex items-center">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

// Specialized button components for common use cases
export const CTAButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="hero"
      size="lg"
      responsive="mobile"
      className="shadow-2xl hover:shadow-gold font-bold tracking-wide"
      {...props}
    >
      {children}
    </Button>
  )
);

export const WhatsAppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="whatsapp"
      size="lg"
      responsive="mobile"
      className="shadow-xl animate-pulse hover:animate-none"
      {...props}
    >
      {children}
    </Button>
  )
);

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline-gold"
      size="lg"
      responsive="mobile"
      className="backdrop-blur-sm hover:backdrop-blur-md"
      {...props}
    >
      {children}
    </Button>
  )
);

export { Button, buttonVariants }
