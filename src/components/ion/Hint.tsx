// ion/Hint: Generated with Ion on 8/13/2024, 1:29:37 PM
import { Info } from "@phosphor-icons/react";
import clsx from "clsx";
import { motion } from "framer-motion";

/* ---------------------------------- Type --------------------------------- */

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Display hint icon to the left of the hint
   * @default false
   */
  showIcon?: boolean;
  /** Display the hint with an error state */
  error?: boolean | string;
  /** Display the hint with a disabled state */
  disabled?: boolean;
}

/* ---------------------------------- Component --------------------------------- */

function Hint({
  className,
  children,
  error,
  showIcon = false,
  disabled,
  ...props
}: HintProps) {
  return (
    <motion.p
      className={clsx(
        "flex items-center gap-1 text-[11px] leading-[16px]",
        {
          "text-danger": error,
          "text-secondary": !error && !disabled,
          "text-on-disabled": disabled,
        },
        className
      )}
      {...props}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {showIcon && <Info className="h-3 w-3" weight="bold" />}
      {children}
    </motion.p>
  );
}

export default Hint;