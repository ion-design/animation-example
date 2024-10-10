// ion/Tabs: Generated with Ion on 8/5/2024, 8:46:42 PM
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = TabsPrimitive.Root;

/* ---------------------------------- Types --------------------------------- */

type TabType = "filled" | "simple";

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /** Styles the children of the TabsList
   * @default 'filled'
   */
  type?: TabType;
}

/* ---------------------------------- Component --------------------------------- */

const TabTypeContext = React.createContext<TabType>("simple");

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, type = "filled", children, ...props }, ref) => (
  <TabTypeContext.Provider value={type}>
    <TabsPrimitive.List
      ref={ref}
      className={clsx(
        "relative flex w-fit items-start",
        {
          "gap-1 rounded-radius-sm bg-container p-1 border-stroke-disabled border-[0.5px]":
            type === "filled",
        },
        className
      )}
      {...props}
    >
      {children}
      {type === "simple" && (
        <motion.div
          layout="position"
          className={"absolute bottom-0 z-0 h-px w-full bg-stroke"}
        />
      )}
    </TabsPrimitive.List>
  </TabTypeContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

/* ---------------------------------- Component --------------------------------- */

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    asChild
    className={clsx("focus-visible:neutral-focus mt-2", className)}
    {...props}
  >
    <AnimatePresence initial={false}>
      <motion.div
        key={props.value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </TabsPrimitive.Content>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

/* ---------------------------------- Type --------------------------------- */

export interface TabProps {
  /** Icon to the left of the tab children */
  iconLeading?: React.ReactNode;
  /** Icon to the right of the tab children */
  iconTrailing?: React.ReactNode;
}

/* ---------------------------------- Component --------------------------------- */

const tabClassnames = cva(
  "focus-visible:neutral-focus flex items-center justify-center whitespace-nowrap text-sm font-semibold text-subtle transition-all disabled:pointer-events-none",
  {
    variants: {
      type: {
        filled: [
          "rounded-radius-xs text-subtle bg-container gap-2 py-1 pl-3.5 pr-4",
          "hover:text-secondary",
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-low",
          "disabled:text-on-disabled ",
          "h-7 px-5",
        ],
        simple: [
          "border-b-2 border-transparent gap-1",
          "transition-all data-[state=active]:z-[1]",
          "hover:text-foreground",
          "disabled:text-on-disabled",
          "data-[state=active]:border-primary data-[state=active]:text-primary",
          "h-9 px-3",
        ],
      },
      icon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: "filled",
        icon: true,
        className: "px-2.5",
      },
    ],
  }
);

const Tab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & TabProps
>(({ className, children, iconLeading, iconTrailing, ...props }, ref) => {
  const type = React.useContext(TabTypeContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={clsx(tabClassnames({ type, icon: !!iconLeading || !!iconTrailing }), className)}
      {...props}
    >
      {iconLeading && (
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="mr-2"
        >
          {iconLeading}
        </motion.span>
      )}
      {children}
      {iconTrailing && (
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="ml-2"
        >
          {iconTrailing}
        </motion.span>
      )}
    </TabsPrimitive.Trigger>
  );
});
Tab.displayName = TabsPrimitive.Trigger.displayName;

export { Tab, Tabs, TabsContent, TabsList };