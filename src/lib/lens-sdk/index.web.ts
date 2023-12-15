import { LensConfig, development } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  // Use `development` or `production` depending on your need
  environment: development,
};

export * from '@lens-protocol/react-web';
export { lensConfig };
