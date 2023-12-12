import React from 'react';
import { useLogin, useLazyProfile } from '@lens-protocol/react-native';
import { Button } from 'react-native';
import { useAccount } from 'wagmi';
import { theme } from '../../lib/theme';

export function LensButton() {
  const { address } = useAccount();
  const { execute: fetchProfile } = useLazyProfile();
  const { execute: login, loading: loginLoading } = useLogin();

  const onLoginPress = async () => {
    // TODO: fetch profile from wallet

    const profileResult = await fetchProfile({ forProfileId: '0x0214' });

    if (profileResult.isFailure()) {
      console.log('fetchProfile error:', profileResult.error.message);
      return;
    }

    const profile = profileResult.value;

    const loginResult = await login({
      address: address,
      profileId: profile.id,
    });

    if (loginResult.isFailure()) {
      console.log('login error:', loginResult.error.message);
      return;
    }
  };

  return (
    <Button
      color={theme.colors.primary}
      disabled={loginLoading}
      onPress={onLoginPress}
      title="Sign in with Lens"
    />
  );
}
