import { createContext, FC, PropsWithChildren, useContext } from "react";

interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const openSidebar = () => alert("Opening Sidebar");
  const closeSidebar = () => alert("Closing Sidebar");

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: true,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
