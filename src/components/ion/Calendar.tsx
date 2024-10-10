// src/components/ion/Calendar.tsx
// ion/DatePicker/Calendar: Generated with Ion on 8/5/2024, 8:46:42 PM
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import * as React from "react";
import { DayPicker, DayPickerProps } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

import { buttonVariants } from "@/components/ion/Button";

/* ---------------------------------- Type --------------------------------- */

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/* ---------------------------------- Component --------------------------------- */

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(
    props.initialFocus ? props.initialFocus : new Date()
  );

  const handleMonthChange: DayPickerProps["onMonthChange"] = (month) => {
    setCurrentMonth(month);
    if (props.onMonthChange) {
      props.onMonthChange(month);
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const [direction, setDirection] = React.useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    if (props.onMonthChange) {
      const prevMonth = new Date(currentMonth);
      prevMonth.setMonth(currentMonth.getMonth() - 1);
      handleMonthChange(prevMonth);
    }
  };

  const handleNext = () => {
    setDirection(1);
    if (props.onMonthChange) {
      const nextMonth = new Date(currentMonth);
      nextMonth.setMonth(currentMonth.getMonth() + 1);
      handleMonthChange(nextMonth);
    }
  };

  return (
    <div className={className}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-8",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: twMerge(
            buttonVariants({ color: "neutral", variant: "ghost", size: "sm" }),
            "h-8 w-8"
          ),
          nav_button_previous: "absolute left-1 rounded-radius",
          nav_button_next: "absolute right-1",
          table: "w-full space-y-1",
          head_row: "flex border-b border-stroke pb-3 justify-between",
          head_cell: "text-subtle rounded-radius w-9 font-normal text-sm",
          row: "flex w-full gap-2 mt-3",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-radius first:[&:has([aria-selected])]:rounded-l-radius last:[&:has([aria-selected])]:rounded-r-radius focus-within:relative focus-within:z-20",
          day: "h-8 w-8 p-0 font-normal aria-selected:bg-primary rounded-radius hover:bg-primary-container focus:primary-focus",
          day_range_end: "day-range-end",
          day_selected: "bg-primary text-on-primary",
          day_today:
            "bg-primary-container text-on-primary-container aria-selected:text-on-primary",
          day_outside: "day-outside text-subtle aria-selected:text-on-primary",
          day_disabled: "text-subtle",
          day_range_middle:
            "aria-selected:bg-primary aria-selected:text-on-primary",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: () => <CaretLeft className="h-4 w-4" />,
          IconRight: () => <CaretRight className="h-4 w-4" />,
        }}
        month={currentMonth}
        onMonthChange={handleMonthChange}
        {...props}
      />
      <AnimatePresence custom={direction} exitBeforeEnter>
        <motion.div
          key={currentMonth.toISOString()}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Additional animated content can go here if needed */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };