import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common";
import { shopifyHooks } from "./hooks";
import { getConfig } from "@framework/api/config";

const config = getConfig();

interface ShopifyProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
