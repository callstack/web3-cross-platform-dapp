import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, View } from 'react-native';
import {
  ProfilePictureSet,
  SessionType,
  useLogout,
  useSession,
} from '@lens-protocol/react-native';
import Text from '../../components/Text';
import SignInScreen from '../sign-in/SignInScreen';
import { theme } from '../../lib/theme';

export default function ProfileScreen() {
  const { data: session } = useSession();
  const { execute: logout, loading: logoutLoading } = useLogout();

  const onLogoutPress = async () => {
    await logout();
  };

  if (!session?.authenticated) {
    return null;
  }

  if (session?.type !== SessionType.WithProfile) {
    return <SignInScreen />;
  }

  const profile = session.profile;
  const coverImageUri = profile.metadata?.coverPicture?.optimized?.uri;
  const avatarImageUri = (profile.metadata?.picture as ProfilePictureSet)
    ?.thumbnail?.uri;

  console.log('profile', profile);

  return (
    <View style={styles.container}>
      <ImageBackground
        accessibilityIgnoresInvertColors
        style={styles.coverImage}
        source={{ uri: coverImageUri }}>
        <View style={styles.overlay} />
        <Image
          accessibilityIgnoresInvertColors
          style={styles.avatarImage}
          source={{ uri: avatarImageUri }}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{profile.metadata?.displayName}</Text>
          <Text style={styles.handle}>@{profile.handle?.localName}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text>Following</Text>
            <Text>{profile.stats.following}</Text>
          </View>
          <View style={styles.statsItem}>
            <Text>Followers</Text>
            <Text>{profile.stats.followers}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Button
          color={theme.colors.danger}
          disabled={logoutLoading}
          onPress={onLogoutPress}
          title="Logout"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  coverImage: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 300,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    height: 300,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    borderCurve: 'continuous',
  },
  nameContainer: {
    gap: 4,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  handle: {
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  statsItem: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  body: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
