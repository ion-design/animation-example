// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=10:5510
import { LineChart } from "@tremor/react";
import clsx from "clsx";
import { motion } from "framer-motion";

type RevenueCardProps = {
  className?: string;
};

function RevenueCard({ className = "" }: RevenueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "bg-background w-[400px] flex flex-col p-10 rounded-radius-sm shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="text-lg font-semibold text-foreground w-full">
        Monthly Revenues
      </div>
      <LineChart
        className="w-full"
        index={"number"}
        data={[
          {
            "2023": 183,
            "2024": 188,
            number: 1,
          },
          {
            "2023": 222,
            "2024": 234,
            number: 2,
          },
          {
            "2023": 397,
            "2024": 280,
            number: 3,
          },
          {
            "2023": 460,
            "2024": 380,
            number: 4,
          },
          {
            "2023": 405,
            "2024": 475,
            number: 5,
          },
        ]}
        categories={["2023", "2024"]}
        yAxisWidth={48}
      />
    </motion.div>
  );
}
export default RevenueCard;