import { type VariantProps, cva } from "class-variance-authority";

import type { HTMLAttributes } from "vue";
import { type PrimitiveProps } from "radix-vue";
export { default as Button } from "./Button.vue";


export interface Props extends PrimitiveProps {
  variant?: "default" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "iconSmall" | "link";
  class?: HTMLAttributes["class"];
  loading?: boolean;
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buttonVariants = cva<any>(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "border-2 border-primary text-primary bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 underline hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        iconSmall: "h-7 w-7",
        link: "h-10"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
