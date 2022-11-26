import { createContext, FC, PropsWithChildren, useContext } from "react";

const UIContext = createContext<Record<string, string>>({
  uiState: "defaultState",
});

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: "someState" }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
