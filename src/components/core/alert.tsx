import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-1 border-2 border-l-8 px-4 py-3 text-left text-sm [font-family:var(--font-family-body)] shadow-[4px_4px_0_var(--color-primary)] has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-24 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-primary)] bg-[var(--color-neutral)] text-[var(--color-primary)]",
        notice:
          "border-[var(--color-primary)] border-l-[var(--color-secondary)] bg-[var(--color-neutral)] text-[var(--color-primary)]",
        warning:
          "border-[var(--color-primary)] border-l-[var(--color-tertiary)] bg-[var(--color-secondary)] text-[var(--color-primary)]",
        destructive:
          "border-[var(--color-primary)] border-l-[var(--color-tertiary)] bg-[var(--color-primary)] text-[var(--color-neutral)] shadow-[4px_4px_0_var(--color-tertiary)] *:data-[slot=alert-description]:text-[var(--color-neutral)] *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-bold uppercase tracking-[0.06em] group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-current/80 md:text-pretty [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
