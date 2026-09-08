import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex min-h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-bold whitespace-nowrap uppercase tracking-[0.08em] [font-family:var(--font-family-body)] transition-[color,background-color,border-color,transform] duration-[var(--duration-fast)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2 [a]:min-h-11 [a]:px-3 aria-invalid:border-[var(--color-tertiary)] aria-invalid:ring-[var(--color-tertiary)] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "rounded-sm bg-[var(--color-primary)] text-[var(--color-neutral)] [a]:hover:bg-[var(--color-tertiary)]",
        highlight:
          "rounded-none border-[var(--color-primary)] bg-[var(--color-secondary)] text-[var(--color-primary)] [a]:hover:bg-[var(--color-neutral)]",
        stamp:
          "-rotate-1 rounded-none border-2 border-[var(--color-tertiary)] bg-transparent text-[var(--color-tertiary)] [a]:hover:rotate-0 [a]:hover:bg-[var(--color-tertiary)] [a]:hover:text-[var(--color-neutral)]",
        secondary:
          "rounded-sm bg-[var(--color-concrete)] text-[var(--color-neutral)] [a]:hover:bg-[var(--color-primary)]",
        destructive:
          "rounded-sm bg-[var(--color-tertiary)] text-[var(--color-neutral)] focus-visible:ring-[var(--color-tertiary)] [a]:hover:bg-[var(--color-primary)]",
        outline:
          "rounded-none border-[var(--color-primary)] text-[var(--color-primary)] [a]:hover:bg-[var(--color-primary)] [a]:hover:text-[var(--color-neutral)]",
        ghost:
          "rounded-none text-[var(--color-primary)] hover:bg-[var(--color-secondary)]",
        link:
          "rounded-none px-0 text-[var(--color-primary)] underline decoration-2 underline-offset-4 hover:text-[var(--color-tertiary)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
