// Generated with Ion on 10/10/2024, 7:45:40 AM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=10:6138
"use client";
import { Code, User } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { type MouseEvent, useState } from "react";

import { motion } from "framer-motion";

import Button from "@/components/ion/Button";
import Input from "@/components/ion/Input";
import NumberInput from "@/components/ion/NumberInput";
import { RadioGroup, RadioGroupItem as Radio } from "@/components/ion/Radio";
type ProjectCardProps = {
  projectName?: string;
  className?: string;
};

function ProjectCard({
  projectName = "Project Details",
  className = "",
}: ProjectCardProps) {
  const [members, setMembers] = useState<number | string | undefined>(
    undefined
  );
  const [name, setName] = useState("");

  function cancelClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("cancelClickHandler fired");
  }
  function confirmClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("confirmClickHandler fired");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "bg-background w-[400px] flex flex-col justify-center items-center rounded-radius-sm shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="w-full flex flex-col gap-5 px-10 py-5">
        <div className="text-lg font-semibold text-foreground">
          {projectName}
        </div>
        <Input
          placeholder="AWS Aggregator"
          iconLeading={<Code size={16} weight={"bold"} />}
          required
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <NumberInput
          placeholder="10"
          showControls
          iconLeading={<User size={16} weight={"regular"} />}
          label="Members"
          showHintIcon
          hint="Only include active members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className="w-full"
        />
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm font-semibold text-foreground">Privacy</div>
          <RadioGroup orientation="horizontal">
            <div className="w-full flex items-start gap-5">
              <Radio label="Private" value="Private" />
              <Radio label="Public" value="Public" />
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="bg-disabled w-full flex justify-between items-center gap-5 px-10 py-5">
        <Button
          variant="outline"
          color="neutral"
          size="md"
          onClick={cancelClickHandler}
        >
          Cancel
        </Button>
        <Button
          variant="filled"
          color="primary"
          size="md"
          onClick={confirmClickHandler}
        >
          Confirm
        </Button>
      </div>
    </motion.div>
  );
}
export default ProjectCard;