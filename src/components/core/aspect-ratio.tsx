import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const aspectRatioVariants = cva("relative aspect-(--ratio) overflow-hidden", {
  variants: {
    variant: {
      plain: "",
      paper:
        "border-4 border-[var(--color-primary)] bg-[var(--color-neutral)] p-2 shadow-[6px_6px_0_var(--color-tertiary)]",
      photo:
        "border-4 border-[var(--color-neutral)] bg-[var(--color-primary)] p-1 shadow-[6px_6px_0_var(--color-secondary)] [&_img]:size-full [&_img]:object-cover [&_img]:grayscale [&_img]:contrast-125",
    },
  },
  defaultVariants: {
    variant: "paper",
  },
})

function AspectRatio({
  ratio,
  className,
  variant = "paper",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof aspectRatioVariants> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn(aspectRatioVariants({ variant }), className)}
      {...props}
    />
  )
}

export { AspectRatio, aspectRatioVariants }
