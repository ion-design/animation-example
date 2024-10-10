// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=440:3271
// ion/Progress: Generated with Ion on 10/10/2024, 7:45:39 AM
import * as ProgressPrimitive from "@radix-ui/react-progress";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";

/* ---------------------------------- Component --------------------------------- */

const MotionIndicator = motion(ProgressPrimitive.Indicator);

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={clsx(
      "relative h-2 w-full overflow-hidden rounded-full bg-disabled",
      className
    )}
    {...props}
  >
    <MotionIndicator
      className="h-full w-full flex-1 bg-primary rounded-full focus:primary-focus origin-left"
      initial={false}
      animate={{ scaleX: (value || 0) / 100 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export default Progress;