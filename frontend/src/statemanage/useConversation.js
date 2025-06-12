import { create } from "zustand";

export const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),


  messages: [], // ✅ correct spelling
  setMessages: (messages) => set({ messages }),
}));
