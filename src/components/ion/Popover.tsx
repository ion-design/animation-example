// ion/Popover: Updated on 8/5/2024, 8:46:42 PM with Framer Motion animations
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

/* ---------------------------------- Component --------------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      asChild
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={twMerge(
          clsx(
            "disabled:outline-disabled outline-none group relative z-50 flex w-[--radix-popover-trigger-width] min-w-[8rem] overflow-hidden rounded-radius bg-background p-2 shadow-medium",
            className
          )
        )}
      >
        {children}
      </motion.div>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { PopoverRoot as Popover, PopoverContent, PopoverTrigger };