import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
      },
    }),
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
