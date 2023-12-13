import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAccount } from 'wagmi';
import Text from '../../components/Text';
import { useLastLoggedInProfile, useProfilesManaged } from '../../lib/lens-sdk';
import ProfileCard from '../../components/ProfileCard';

export default function SignInScreen() {
  const { isConnected, address } = useAccount();

  const { data: profiles = [] } = useProfilesManaged({
    for: address,
  });

  // TODO: useLastLoggedInProfile seems to not be updating right after logout
  const { data: lastLoggedInProfile } = useLastLoggedInProfile({
    for: address,
  });

  const sortedProfiles = [...profiles].sort((a, b) => {
    if (a.id === lastLoggedInProfile?.id) {
      return -1;
    }
    if (b.id === lastLoggedInProfile?.id) {
      return 1;
    }
    return 0;
  });

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <Text>Choose profile to sign in with</Text>
          {sortedProfiles.map(profile => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isLastLoggedInProfile={profile.id === lastLoggedInProfile?.id}
            />
          ))}
        </>
      ) : (
        <Text>Connect wallet to sign in</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 20,
  },
});
