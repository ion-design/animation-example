// src/app/example-page/page.tsx
"use client";

import ProfileCard from "@/components/ion/ProfileCard";
import ProjectCard from "@/components/ion/ProjectCard";
import RevenueCard from "@/components/ion/RevenueCard";
import SideNavigation from "@/components/ion/SideNavigation";
import TokenMetric from "@/components/TokenMetric";
import Badge from "@/components/ion/Badge";
import { motion } from "framer-motion";

function ExamplePage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <motion.div
          className="w-fit flex flex-col gap-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <RevenueCard />
          <TokenMetric badge={<Badge color="green">+5.2%</Badge>} title="Total Revenue" metric="$1,200" />
        </motion.div>
        <motion.div
          className="w-fit flex flex-col gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ProfileCard handle="@SkyHighSam" name="Samuel Barnholdt" />
          <ProjectCard projectName="Project Details" />
        </motion.div>
      </div>
    </div>
  );
}
export default ExamplePage;