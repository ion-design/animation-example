"use client";
// ion/Divider: Generated with Ion on 7/12/2024, 9:13:05 AM
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";

/* ---------------------------------- Component --------------------------------- */

const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    children?: React.ReactNode;
  }
>(({ className, children, decorative = true, ...props }, ref) => (
  <motion.div
    className={clsx("relative w-full", className)}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className={clsx("absolute inset-0 flex items-center p-[inherit]")}>
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={"horizontal"}
        className={clsx("bg-outline-sub", "h-[1px] w-full")}
        {...props}
      />
    </div>

    {children && (
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-3 text-soft">{children}</span>
      </div>
    )}
  </motion.div>
));
Divider.displayName = SeparatorPrimitive.Root.displayName;

export default Divider;