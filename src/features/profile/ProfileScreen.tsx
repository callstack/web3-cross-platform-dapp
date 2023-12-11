import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {
  SessionType,
  useLogout,
  useSession,
} from '@lens-protocol/react-native';
import Text from '../../components/Text';

export default function ProfileScreen() {
  const { data: session } = useSession();
  const { execute: logout, loading: logoutLoading } = useLogout();

  const onLogoutPress = async () => {
    await logout();
  };

  if (!session?.authenticated) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>
        Welcome{' '}
        {session.type === SessionType.WithProfile
          ? session.profile.metadata?.displayName ??
            session.profile.handle?.fullHandle
          : session.address}
      </Text>
      <Button
        disabled={logoutLoading}
        onPress={onLogoutPress}
        title="Log out"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
