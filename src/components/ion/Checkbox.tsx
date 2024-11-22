// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=48:180
// ion/Checkbox: Generated with Ion on 10/10/2024, 7:45:39 AM
import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

import Label from "@/components/ion/Label";

/* ---------------------------------- Type --------------------------------- */

export interface CheckboxProps {
  /** Label of the checkbox */
  label?: string;
  /** Description, under the label, of the checkbox */
  description?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Display the checkbox with an error state */
  error?: string | boolean;
  /** Classname of the checkbox container (use this to position the checkbox) */
  className?: string;
  /** Classname of the HTML checkbox (use this to restyle the checkbox) */
  checkboxClassName?: string;
}

/* ---------------------------------- Component --------------------------------- */

const MotionCheckboxRoot = motion(CheckboxPrimitive.Root);
const MotionCheck = motion(Check);
const MotionMinus = motion(Minus);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(
  (
    { className, label, description, required, helper, error, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const id = props.id || generatedId;
    const ariaInvalid = props["aria-invalid"] || !!error;

    return (
      <span className={clsx("flex items-center gap-2", className)}>
        <MotionCheckboxRoot
          id={id}
          aria-required={required}
          aria-invalid={ariaInvalid}
          aria-describedby={description ? `${id}__description` : undefined}
          ref={ref}
          className={twMerge(
            clsx(
              "peer h-5 w-5 shrink-0 overflow-hidden rounded-radius-xs border border-stroke bg-background transition-colors hover:border-stroke-strong",
              "focus-visible:primary-focus focus-visible:border-stroke-primary",
              "data-[state=checked]:text-on-primary data-[state=indeterminate]:text-on-primary data-[state=indeterminate]:bg-primary data-[state=checked]:bg-primary",
              "data-[state=checked]:border-transparent data-[state=indeterminate]:border-transparent",
              "disabled:pointer-events-none disabled:border-stroke-disabled disabled:bg-disabled disabled:text-on-disabled",
              "disabled:data-[state=checked]:bg-disabled disabled:data-[state=indeterminate]:bg-disabled",
              "disabled:data-[state=checked]:text-on-disabled disabled:data-[state=indeterminate]:text-on-disabled",
              "group",
              !!error &&
                "border-danger hover:border-danger data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger"
            )
          )}
          {...props}
          whileTap={{ scale: 0.95 }}
        >
          <CheckboxPrimitive.Indicator
            className={clsx("flex items-center justify-center")}
          >
            <AnimatePresence initial={false}>
              {props.checked && (
                <MotionCheck
                  key="check"
                  size={12}
                  weight="bold"
                  className="z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {props.indeterminate && (
                <MotionMinus
                  key="minus"
                  size={12}
                  weight="bold"
                  className=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </CheckboxPrimitive.Indicator>
        </MotionCheckboxRoot>
        {label && (
          <Label
            id={`${id}__label`}
            htmlFor={id}
            required={required}
            disabled={props.disabled}
            description={description}
            descriptionId={`${id}__description`}
            helper={helper}
          >
            {label}
          </Label>
        )}
      </span>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;