import React from 'react';
import { useLogin } from '@lens-protocol/react-native';
import { useAccount } from 'wagmi';
import { ProfileId } from '../../lib/lens-sdk';
import Button from '../Button';

type LensButtonProps = {
  profileId: ProfileId;
};

/**
 * Button used to sign in with Lens Protocol
 *
 * @param profileId Lens profile ID
 */
export function LensButton({ profileId }: LensButtonProps) {
  const { address } = useAccount();
  const { execute: login, loading: loginLoading } = useLogin();

  const onLogin = async () => {
    const loginResult = await login({
      address: address,
      profileId,
    });

    if (loginResult.isFailure()) {
      console.log('login error:', loginResult.error.message);
      return;
    }
  };

  return (
    <Button title="Sign in  🌱" loading={loginLoading} onPress={onLogin} />
  );
}
