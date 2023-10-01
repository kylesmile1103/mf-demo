import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop-cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
