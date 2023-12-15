import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { Image } from 'expo-image';
import Text from '../../components/Text';
import { theme } from '../../lib/theme';
import {
  FeedItem,
  Post,
  ProfilePictureSet,
  PublicationReactionType,
  useReactionToggle,
} from '../../lib/lens-sdk';

type PostItemProps = {
  item: FeedItem;
};

function PublicationItem({ item }: PostItemProps) {
  const { execute: toggleReaction } = useReactionToggle();

  const publication = item.root as Post;
  const profile = publication.by;
  const avatarImageUri = (profile.metadata?.picture as ProfilePictureSet)
    ?.thumbnail?.uri;

  const toggleUpvote = async () => {
    await toggleReaction({
      reaction: PublicationReactionType.Upvote,
      publication,
    });
  };

  // For simplicity, filtering out EventMetadataV3 items because they do not have content
  if (publication.metadata.__typename === 'EventMetadataV3') {
    return null;
  }

  return (
    <View style={styles.container}>
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

      <View style={styles.contentContainer}>
        <Text>{publication.metadata?.content}</Text>
      </View>

      <View style={styles.reactionContainer}>
        <Pressable
          accessibilityRole="button"
          onPress={toggleUpvote}
          //@ts-expect-error: react-native-web does not export TS typings for the `hovered` argument
          style={({ pressed, hovered }) => [
            styles.reactionButton,
            {
              backgroundColor:
                pressed || hovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            },
          ]}>
          {/* @ts-expect-error: react-native-web does not export TS typings for the `hovered` argument */}
          {({ pressed, hovered }) => (
            <Octicons
              name="thumbsup"
              size={16}
              color={
                publication.operations.hasUpvoted || pressed || hovered
                  ? theme.colors.primary
                  : theme.colors.disabled
              }
            />
          )}
        </Pressable>

        <Text
          style={{
            color: publication.operations.hasUpvoted
              ? theme.colors.primary
              : theme.colors.disabled,
          }}>
          {publication.stats.upvotes}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    borderCurve: 'continuous',
    padding: 12,
  },
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
  contentContainer: {
    marginTop: 12,
    marginLeft: 62,
  },
  reactionContainer: {
    marginTop: 12,
    marginLeft: 54,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reactionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PublicationItem;
