import { motion } from "framer-motion";
import clsx from "clsx";
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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