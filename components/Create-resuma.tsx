"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useForm } from "@/hooks/use-create-form";
import CreateResume from "./Forms/create-resume-form";

//
interface resumeProp {
  type: string;
}

const ResumeModel = ({ type }: resumeProp) => {
  const { isOpen, onClose, onOpen } = useForm();
  return (
    <div className="w-full bg-black">
      <Dialog
        open={isOpen}
        onOpenChange={(open) => (open ? onOpen() : onClose())}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create {type}</DialogTitle>
          </DialogHeader>
          <CreateResume type="resume" title="Resume" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeModel;
