import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const UIContext = createContext<Record<string, any>>({
  uiState: "defaultState",
});

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const uiState = {
    isSidebarOpen,
    setSidebarOpen,
  };

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
