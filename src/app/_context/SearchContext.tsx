"use client";
import { createContext, useContext, useState } from "react";

interface Dates {
  startDate: Date | null;
  endDate: Date | null;
}

interface SearchContextType {
  dates: Dates;
  setDates: React.Dispatch<React.SetStateAction<Dates>>;
  isDateEmpty: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [dates, setDates] = useState<Dates>({ startDate: null, endDate: null });
  const isDateEmpty = !dates.startDate || !dates.endDate;

  return (
    <SearchContext.Provider value={{ dates, setDates, isDateEmpty }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
