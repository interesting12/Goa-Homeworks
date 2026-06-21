import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      addNote: (text) =>
        set((state) => ({
          notes: [...state.notes, { id: Date.now(), text }],
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),
    }),
    { name: "notes" }
  )
);
