import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { theme } from '../../lib/theme';
import Text from '../../components/Text';
import {
  Post,
  PublicationReactionType,
  useReactionToggle,
} from '../../lib/lens-sdk';

type PublicationProfileProps = {
  publication: Post;
};

function PublicationProfile({ publication }: PublicationProfileProps) {
  const { execute: toggleReaction } = useReactionToggle();

  const toggleUpvote = async () => {
    await toggleReaction({
      reaction: PublicationReactionType.Upvote,
      publication,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        onPress={toggleUpvote}
        // @ts-expect-error: react-native-web does not export TS typings for the `hovered` argument
        style={({ pressed, hovered }) => [
          styles.reactionButton,
          {
            backgroundColor:
              pressed || hovered ? theme.colors.lightWhite : 'transparent',
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
  );
}

const styles = StyleSheet.create({
  container: {
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

export default PublicationProfile;
