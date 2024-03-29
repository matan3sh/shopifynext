import { ApiConfig } from "@common/types/api";
import { fetchApi } from "@framework/utils";

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  fetch: fetchApi,
});

export function getConfig() {
  return configWrapper.getConfig();
}
