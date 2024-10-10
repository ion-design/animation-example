// Generated with Ion on 10/10/2024, 7:56:05 AM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1:3282
import clsx from "clsx";
import { motion } from "framer-motion";

type TokenMetricProps = {
  metric?: string;
  badge: React.ReactNode;
  title?: string;
  className?: string;
};

function TokenMetric({
  metric = "Metric",
  badge,
  title = "Title",
  className = "",
}: TokenMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "bg-background w-[400px] flex flex-col justify-center gap-1 p-5 rounded-radius border border-stroke",
        className
      )}
    >
      <div className="text-sm text-foreground">{title}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-foreground">{metric}</div>
        {badge}
      </div>
    </motion.div>
  );
}
export default TokenMetric;