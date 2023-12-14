import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Separator from '../../components/Separator';
import { FeedItem } from '../../lib/lens-sdk';
import PublicationItem from './PublicationItem';

type FeedListProps = {
  feed: FeedItem[];
};

function FeedList({ feed = [] }: FeedListProps) {
  const renderItem = ({ item }) => {
    return <PublicationItem item={item} />;
  };

  return (
    <FlatList
      data={feed}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.contentContainerStyle}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 20,
  },
});

export default FeedList;
