import { createContext, useContext, useState } from "react";

const DiscoveryContext = createContext(null);

export function DiscoveryProvider({ children }) {
  const [discoveredStoryIds, setDiscoveredStoryIds] = useState([]);

  const addDiscovery = (storyId) => {
    setDiscoveredStoryIds((current) => {
      if (current.includes(storyId)) {
        return current;
      }

      return [...current, storyId];
    });
  };

  const hasDiscoveries = discoveredStoryIds.length > 0;

  return (
    <DiscoveryContext.Provider
      value={{
        discoveredStoryIds,
        addDiscovery,
        hasDiscoveries,
      }}
    >
      {children}
    </DiscoveryContext.Provider>
  );
}

export function useDiscovery() {
  const context = useContext(DiscoveryContext);

  if (!context) {
    throw new Error(
      "useDiscovery must be used inside DiscoveryProvider"
    );
  }

  return context;
}