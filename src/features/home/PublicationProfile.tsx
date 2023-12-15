import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Octicons from '@expo/vector-icons/Octicons';
import { theme } from '../../lib/theme';
import Text from '../../components/Text';
import { Profile, ProfilePictureSet } from '../../lib/lens-sdk';

type PublicationProfileProps = {
  profile: Profile;
};

function PublicationProfile({ profile }: PublicationProfileProps) {
  const avatarImageUri = (profile.metadata?.picture as ProfilePictureSet)
    ?.thumbnail?.uri;

  return (
    <View style={styles.profileContainer}>
      {avatarImageUri ? (
        <Image
          accessibilityIgnoresInvertColors
          source={{ uri: avatarImageUri }}
          style={styles.avatarImage}
        />
      ) : (
        <View style={styles.avatarImage}>
          <Octicons name="person" size={16} color={theme.colors.disabled} />
        </View>
      )}
      <View style={styles.textContainer}>
        {profile.metadata?.displayName && (
          <Text style={styles.name} numberOfLines={1}>
            {profile.metadata.displayName}
          </Text>
        )}
        {profile.handle?.localName && (
          <Text numberOfLines={1}>@{profile.handle?.localName}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
  },
  name: {
    fontWeight: 'bold',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});

export default PublicationProfile;
