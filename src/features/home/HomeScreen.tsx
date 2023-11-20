import React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { useAccount } from 'wagmi';
import Text from '../../components/Text';
import { useNFTsForAddress } from '../../services/alchemy';
import NftListItem from '../../components/NftListItem';
import Separator from '../../components/Separator';
import ListEmptyComponent from '../../components/ListEmptyComponent';

const NUM_COLUMNS = Platform.OS === 'web' ? 4 : 1;

export default function HomeScreen() {
  const { address, isConnected } = useAccount();

  let { nfts, isLoading } = useNFTsForAddress('thiagobrez.eth');

  const missingItemsToFillRow =
    nfts.length % NUM_COLUMNS === 0
      ? 0
      : NUM_COLUMNS - (nfts.length % NUM_COLUMNS);

  if (nfts.length > 0 && missingItemsToFillRow > 0) {
    nfts = [...nfts, ...Array(missingItemsToFillRow).fill({})];
  }

  const renderItem = ({ item }) => {
    const isDummyItem = Object.keys(item).length === 0;

    if (isDummyItem) {
      return <View style={styles.dummyItem} />;
    }

    return <NftListItem nft={item} numColumns={NUM_COLUMNS} />;
  };

  return (
    <View style={styles.container}>
      {isConnected ? (
        <FlatList
          data={nfts}
          numColumns={NUM_COLUMNS}
          renderItem={renderItem}
          keyExtractor={item => `${item.contract?.address}-${item.tokenId}`}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={
            NUM_COLUMNS > 1 ? styles.columnWrapper : undefined
          }
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <ListEmptyComponent
              text={
                isLoading
                  ? 'Loading...'
                  : `No NFTs were found for address: ${address}`
              }
            />
          }
        />
      ) : (
        <Text style={styles.notConnectedText}>
          Connect wallet to display NFTs
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
  columnWrapper: {
    columnGap: 20,
  },
  dummyItem: {
    flex: 1 / NUM_COLUMNS,
    borderWidth: 1,
  },
  notConnectedText: {
    textAlign: 'center',
  },
});
