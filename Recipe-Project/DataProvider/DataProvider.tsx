import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface DataContextType {
  selectedItems: any[]; // You can replace 'any' with the specific type of data you're storing if known
  setSelectedItems: React.Dispatch<React.SetStateAction<any[]>>;
}

// Create a context with default values (optional)
export const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

// Create a provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <DataContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </DataContext.Provider>
  );
};
