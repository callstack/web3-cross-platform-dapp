import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Text from '../../components/Text';
import Button from '../../components/Button';
import SignInScreen from '../sign-in/SignInScreen';
import { theme } from '../../lib/theme';
import {
  ProfilePictureSet,
  SessionType,
  useLogout,
  useSession,
} from '../../lib/lens-sdk';

export default function ProfileScreen() {
  const { data: session } = useSession();
  const { execute: logout, loading: logoutLoading } = useLogout();

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
          title="Logout"
          color="danger"
          loading={logoutLoading}
          onPress={logout}
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
    backgroundColor: theme.colors.disabled,
  },
  overlay: {
    position: 'absolute',
    height: 300,
    width: '100%',
    backgroundColor: theme.colors.overlay,
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
