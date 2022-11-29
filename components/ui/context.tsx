import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

interface StateValues {
  isSidebarOpen: boolean;
}

type State = StateValues & StateModifiers;

type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return { ...state, isSidebarOpen: true };
    }
    case "CLOSE_SIDEBAR": {
      return { ...state, isSidebarOpen: false };
    }
  }
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
