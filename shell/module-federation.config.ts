import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['shop-cart'],
};

export default config;
