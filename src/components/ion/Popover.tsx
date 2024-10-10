// ion/Popover: Generated with Ion on 8/5/2024, 8:46:42 PM
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

/* ---------------------------------- Component --------------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    asChild
  >
    <div
      className={twMerge(
        clsx(
          "disabled:outline-disabled outline-none group relative z-50 flex w-[--radix-popover-trigger-width] min-w-[8rem] overflow-hidden rounded-radius bg-background p-2 shadow-medium",
          className
        )
      )}
      {...props}
    />
  </PopoverPrimitive.Content>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { PopoverRoot as Popover, PopoverContent, PopoverTrigger };