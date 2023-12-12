import {
  LensProvider,
  LensConfig,
  development,
} from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

export { LensProvider, lensConfig };
