import { createContext } from "react";
import { useFlightData } from "./state/flight.state";

export const StoreContext = createContext();

export const StoreProvider = ({ context, children }) => {
  const useCreateStore = () => {
    const store = {
      // checklist: useChecklist(),
      flights: useFlightData(),
    };
    return store;
  };
  const store = useCreateStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
