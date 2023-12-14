import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFeed, useSession, ProfileSession } from '../../lib/lens-sdk';
import Text from '../../components/Text';
import FeedList from './FeedList';

export default function HomeScreen() {
  const { data: session } = useSession();

  const { data, loading } = useFeed({
    where: {
      for: (session as ProfileSession).profile?.id,
    },
  });

  if (data?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        {loading ? <Text>Loading...</Text> : <Text>Your feed is empty ☹️</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FeedList feed={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
