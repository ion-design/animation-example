'use client';

import SettingsPage from "@/components/SettingsCard";
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";
import { motion } from 'framer-motion';

function TestPage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SettingsPage />
        </motion.div>
      </div>
    </div>
  );
}
export default TestPage;