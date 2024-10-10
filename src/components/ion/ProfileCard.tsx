// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=10:5933
"use client";
import {
  CaretRight,
  Eye,
  Gavel,
  Toolbox,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { type MouseEvent } from "react";

import { motion } from "framer-motion";

import Avatar from "@/components/ion/Avatar";
import Button from "@/components/ion/Button";
import Divider from "@/components/ion/Divider";
import Select from "@/components/ion/Select";
type ProfileCardProps = {
  handle?: string;
  name?: string;
  className?: string;
};

function ProfileCard({
  handle = "@SkyHighAlex",
  name = "Alex Skyler",
  className = "",
}: ProfileCardProps) {
  function blockClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("blockClickHandler fired");
  }
  function viewProfileClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("viewProfileClickHandler fired");
  }

  return (
    <motion.div
      className={clsx(
        "bg-background w-[400px] flex flex-col gap-3 px-8 py-5 rounded-radius-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Avatar
        size="lg"
        variant="circle"
        src="/images/example-page/ion/avatar.png"
      />
      <div className="w-fit flex flex-col">
        <div className="text-base font-semibold text-foreground">{name}</div>
        <div className="text-sm text-subtle">{handle}</div>
      </div>
      <div className="text-sm text-foreground w-full">
        Digital nomad 🌍 | Tech enthusiast 💻
      </div>
      <Divider />
      <Select
        iconLeading={<Toolbox size={16} weight={"bold"} />}
        placeholder="View Only"
        options={[
          {
            iconLeading: <Eye size={16} weight={"regular"} />,
            label: "View Only",
            value: "View Only",
          },
          {
            iconLeading: <Wrench size={16} weight={"regular"} />,
            label: "Contributor",
            value: "Contributor",
          },
          {
            iconLeading: <Gavel size={16} weight={"regular"} />,
            label: "Admin",
            value: "Admin",
          },
        ]}
        label="User role"
        className="w-full"
      />
      <div className="w-full flex justify-between items-start py-3">
        <Button
          size="sm"
          color="danger"
          onClick={blockClickHandler}
          variant="link"
          className="no-underline"
        >
          Block
        </Button>
        <Button
          iconTrailing={<CaretRight size={12} weight={"bold"} />}
          size="sm"
          color="primary"
          onClick={viewProfileClickHandler}
          variant="link"
          className="no-underline"
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
}
export default ProfileCard;
