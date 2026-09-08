import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const hoverCardVariants = cva(
  "z-[var(--z-overlay)] w-64 origin-(--transform-origin) border-2 p-4 text-sm [font-family:var(--font-family-body)] outline-none duration-[var(--duration-fast)] ease-[var(--ease-out)] data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  {
    variants: {
      variant: {
        paper:
          "border-[var(--color-primary)] bg-[var(--color-neutral)] text-[var(--color-primary)] shadow-[5px_5px_0_var(--color-tertiary)]",
        highlight:
          "border-[var(--color-primary)] bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-[5px_5px_0_var(--color-primary)]",
        ink:
          "border-[var(--color-neutral)] bg-[var(--color-primary)] text-[var(--color-neutral)] shadow-[5px_5px_0_var(--color-secondary)]",
      },
    },
    defaultVariants: {
      variant: "paper",
    },
  }
)

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  variant = "paper",
  ...props
}: PreviewCardPrimitive.Popup.Props &
  VariantProps<typeof hoverCardVariants> &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-[var(--z-overlay)]"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(hoverCardVariants({ variant }), className)}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent, hoverCardVariants }
