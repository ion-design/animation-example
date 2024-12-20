'use client';

import ImageGallery from "@/components/ImageGallery";
import SettingsPage from "@/components/SettingsCard";
import SubscribeToContinueCard from "@/components/Subscribe";
import SideNavigation from "@/components/ion/SideNavigation";


function TestPage() {
  return (
      <div className="w-screen h-screen flex">
        <SideNavigation />
        <div className="bg-container flex-1 h-full w-full flex justify-center items-center gap-5 p-10">
          <ImageGallery />
        </div>
    </div>
  );
}
export default TestPage;
