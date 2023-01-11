import { ReactNode } from "react";
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common";
import { getConfig } from "@framework/api/config";

const config = getConfig();

interface ShopifyProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config, testKey: "testValue" }}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useCoreApiProvider();
