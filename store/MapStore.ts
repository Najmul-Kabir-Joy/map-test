import create from "zustand";

interface MapSearch {
  searchKey: string;
  quickAccessKey: string;
  setSearchKey: (searchKey: string) => void;
  setQuickAccessKey: (quickAccessKey: string) => void;
}

export const useMapSearch = create<MapSearch>((set) => ({
  searchKey: "",
  quickAccessKey: "California",
  setSearchKey: (searchKey) =>
    set((state) => ({
      ...state,
      searchKey,
    })),
  setQuickAccessKey: (quickAccessKey) =>
    set((state) => ({
      ...state,
      quickAccessKey,
    })),
}));
