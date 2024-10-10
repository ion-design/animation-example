// src/components/ion/Switch.tsx
// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=153:11261
// ion/Switch: Generated with Ion on 10/10/2024, 7:45:39 AM
import * as SwitchPrimitives from "@radix-ui/react-switch";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";

import Label from "@/components/ion/Label";

/* ---------------------------------- Type --------------------------------- */

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  /** Size of the switch
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /** Label for the switch */
  label?: React.ReactNode;
  /** Description, under the label, of the switch */
  description?: string;
  /** Helper text, to the right of the label*/
  helper?: string;
};

/* ---------------------------------- Component --------------------------------- */

const MotionSwitchRoot = motion(SwitchPrimitives.Root);
const MotionSwitchThumb = motion(SwitchPrimitives.Thumb);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    { className, size = "md", required, label, description, helper, checked, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const id = props.id || generatedId;

    const switchVariants = {
      checked: {
        backgroundColor: "#4ADE80", // Example primary color
        transition: { duration: 0.2 },
      },
      unchecked: {
        backgroundColor: "#D1D5DB", // Example on-disabled color
        transition: { duration: 0.2 },
      },
    };

    const thumbVariants = {
      checked: {
        x: size === "sm" ? 16 : size === "md" ? 24 : 20,
        transition: { type: "spring", stiffness: 700, damping: 30 },
      },
      unchecked: {
        x: 0,
        transition: { type: "spring", stiffness: 700, damping: 30 },
      },
    };

    return (
      <span className="flex items-center gap-2 text-sm">
        <MotionSwitchRoot
          id={id}
          ref={ref}
          aria-required={required}
          aria-describedby={description ? `${id}__description` : undefined}
          className={clsx(
            "group peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors",
            "disabled:pointer-events-none disabled:bg-disabled",
            {
              "data-[state=checked]:focus-visible:primary-focus focus-visible:neutral-focus":
                !props.disabled,
            },
            {
              "h-4 w-8": size === "sm",
              "h-6 w-12": size === "md",
              "h-[34px] w-[56px] pl-1": size === "lg",
            },
            className
          )}
          initial={checked ? "checked" : "unchecked"}
          animate={checked ? "checked" : "unchecked"}
          variants={switchVariants}
          {...props}
        >
          <MotionSwitchThumb
            className={clsx(
              "pointer-events-none block rounded-full bg-white shadow-lg ring-0 group-disabled:bg-on-disabled",
              {
                "h-3 w-3": size === "sm",
                "h-5 w-5": size === "md",
                "h-6 w-6": size === "lg",
              }
            )}
            variants={thumbVariants}
          />
        </MotionSwitchRoot>
        {label && (
          <Label
            id={`${id}__label`}
            htmlFor={id}
            required={required}
            description={description}
            descriptionId={description ? `${id}__description` : undefined}
            helper={helper}
          >
            {label}
          </Label>
        )}
      </span>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;