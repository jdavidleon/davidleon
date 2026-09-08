import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border-2 border-transparent bg-clip-padding px-4 text-sm font-bold whitespace-nowrap uppercase tracking-[0.08em] [font-family:var(--font-family-body)] transition-[color,background-color,border-color,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)] outline-none select-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-neutral)] active:not-aria-[haspopup]:translate-x-px active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-[var(--color-tertiary)] aria-invalid:ring-[var(--color-tertiary)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-[var(--radius-base)] bg-[var(--color-primary)] text-[var(--color-neutral)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]",
        poster:
          "rounded-none border-[var(--color-primary)] bg-[var(--color-neutral)] text-[var(--color-primary)] shadow-[4px_4px_0_var(--color-tertiary)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0_var(--color-tertiary)]",
        ticket:
          "rounded-sm border-[var(--color-primary)] bg-[var(--color-tertiary)] text-[var(--color-neutral)] shadow-[4px_4px_0_var(--color-primary)] hover:-translate-x-px hover:-translate-y-px hover:bg-[var(--color-warm-accent)] hover:shadow-[6px_6px_0_var(--color-primary)]",
        outline:
          "rounded-none border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-neutral)] aria-expanded:bg-[var(--color-primary)] aria-expanded:text-[var(--color-neutral)]",
        secondary:
          "rounded-sm border-[var(--color-primary)] bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-neutral)] aria-expanded:bg-[var(--color-neutral)]",
        ghost:
          "rounded-none text-[var(--color-primary)] hover:bg-[var(--color-secondary)] aria-expanded:bg-[var(--color-secondary)]",
        destructive:
          "rounded-sm border-[var(--color-tertiary)] bg-[var(--color-tertiary)] text-[var(--color-neutral)] hover:bg-[var(--color-primary)] focus-visible:ring-[var(--color-tertiary)]",
        link: "text-[var(--color-primary)] underline decoration-2 underline-offset-4 hover:text-[var(--color-tertiary)]",
      },
      size: {
        default:
          "h-11 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-11 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-11 px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 px-6 text-base",
        icon: "size-11 p-0",
        "icon-xs":
          "size-11 p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-11 p-0 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
