import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
  disabled?: boolean;
  helper?: string;
  description?: string;
  descriptionId?: string;
  className?: string;
  labelClassName?: string;
}

const labelVariants = cva(
  "text-sm gap-1 font-medium text-secondary whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-on-disabled"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(
  (
    {
      disabled,
      description,
      helper,
      required,
      children,
      descriptionId,
      className,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        className={clsx(
          labelVariants(),
          {
            "text-on-disabled": disabled,
          },
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LabelPrimitive.Root
          ref={ref}
          className={clsx(
            "flex flex-row items-center gap-x-0.5",
            {
              "pointer-events-none text-on-disabled": disabled,
            },
            labelClassName
          )}
          {...props}
        >
          {children}
          {required && (
            <span className={disabled ? "text-on-disabled" : "text-primary"}>
              *
            </span>
          )}
          {helper && (
            <span
              className={clsx("text-sm font-normal text-subtle", {
                "text-on-disabled": disabled,
              })}
            >
              ({helper})
            </span>
          )}
        </LabelPrimitive.Root>
        <motion.p
          id={descriptionId}
          className={clsx(
            "text-sm font-normal",
            disabled ? "text-on-disabled" : "text-secondary"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </motion.div>
    );
  }
);

Label.displayName = LabelPrimitive.Root.displayName;
export default Label;