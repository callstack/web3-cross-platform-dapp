import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text';
import { theme } from '../../lib/theme';
import { FeedItem, Post } from '../../lib/lens-sdk';
import PublicationProfile from './PublicationProfile';
import PublicationReactions from './PublicationReactions';

type PostItemProps = {
  item: FeedItem;
};

function PublicationItem({ item }: PostItemProps) {
  const publication = item.root as Post;
  const profile = publication.by;

  // For simplicity, filtering out EventMetadataV3 items because they do not have content
  if (publication.metadata.__typename === 'EventMetadataV3') {
    return null;
  }

  return (
    <View style={styles.container}>
      <PublicationProfile profile={profile} />

      <View style={styles.contentContainer}>
        <Text>{publication.metadata?.content}</Text>
      </View>

      <PublicationReactions publication={publication} />
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
  contentContainer: {
    marginTop: 12,
    marginLeft: 62,
  },
});

export default PublicationItem;
