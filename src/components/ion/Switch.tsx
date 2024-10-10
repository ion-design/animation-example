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

const MotionThumb = motion(SwitchPrimitives.Thumb);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      size = "md",
      required,
      label,
      description,
      helper,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = props.id || generatedId;

    const [internalChecked, setInternalChecked] = React.useState(
      props.defaultChecked || false
    );

    const isControlled = props.checked !== undefined;
    const isChecked = isControlled ? props.checked : internalChecked;

    const handleCheckedChange = (checked: boolean) => {
      if (!isControlled) {
        setInternalChecked(checked);
      }
      if (props.onCheckedChange) {
        props.onCheckedChange(checked);
      }
    };

    const getXValue = (size: "sm" | "md" | "lg") => {
      switch (size) {
        case "sm":
          return 16; // 1rem = 16px
        case "md":
          return 24; // 1.5rem = 24px
        case "lg":
          return 20; // Approximate value
        default:
          return 0;
      }
    };

    return (
      <span className="flex items-center gap-2 text-sm">
        <SwitchPrimitives.Root
          id={id}
          ref={ref}
          aria-required={required}
          aria-describedby={description ? `${id}__description` : undefined}
          onCheckedChange={handleCheckedChange}
          checked={isControlled ? isChecked : undefined}
          defaultChecked={!isControlled ? internalChecked : undefined}
          className={clsx(
            "group",
            "data-[state=checked]:focus-visible:primary-focus focus-visible:neutral-focus peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors",
            "disabled:pointer-events-none disabled:bg-disabled",
            {
              "data-[state=checked]:bg-primary data-[state=unchecked]:bg-on-disabled data-[state=unchecked]:hover:bg-soft":
                !props.disabled,
            },
            {
              "h-4 w-8": size === "sm",
              "h-6 w-12": size === "md",
              "h-[34px] w-[56px] pl-1": size === "lg",
            },
            className
          )}
          {...props}
        >
          <MotionThumb
            animate={{ x: isChecked ? getXValue(size) : 0 }}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className={clsx(
              "pointer-events-none block rounded-full bg-white shadow-lg ring-0 group-disabled:bg-on-disabled group-disabled:shadow-none",
              {
                "h-3 w-3": size === "sm",
                "h-5 w-5": size === "md",
                "h-6 w-6": size === "lg",
              }
            )}
          />
        </SwitchPrimitives.Root>
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