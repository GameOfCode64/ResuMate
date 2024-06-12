"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";

const ProModal = () => {
  const { isOpen, onClose, onOpen } = useProModal();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog content.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button onClick={onClose}>Close Dialog</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
