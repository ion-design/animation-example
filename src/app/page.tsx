// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=8:1966
"use client";

import ProfileCard from "@/components/ion/ProfileCard";
import ProjectCard from "@/components/ion/ProjectCard";
import RevenueCard from "@/components/ion/RevenueCard";
import SideNavigation from "@/components/ion/SideNavigation";
import TokenMetric from "@/components/TokenMetric";
import Badge from "@/components/ion/Badge";

function ExamplePage() {
  return (
    <div className="w-screen h-screen flex">
      <SideNavigation />
      <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
        <div className="w-fit flex flex-col gap-5">
          <RevenueCard />
            <TokenMetric badge={<Badge color="green">+5.2%</Badge>} title="Total Revenue" metric="$1,200" />
        </div>
        <div className="w-fit flex flex-col gap-5">
          <ProfileCard handle="@SkyHighSam" name="Samuel Barnholdt" />
          <ProjectCard projectName="Project Details" />
        </div>
      </div>
    </div>
  );
}
export default ExamplePage;