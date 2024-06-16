import { create } from "zustand";

interface usePromodalStore {
  isOpen: boolean;
  onopen: () => void;
  onClose: () => void;
}

export const useProModal = create<usePromodalStore>((set) => ({
  isOpen: false,
  onopen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
