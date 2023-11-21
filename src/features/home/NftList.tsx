import React from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { useAccount } from 'wagmi';
import Separator from '../../components/Separator';
import { useNFTsForAddress } from '../../services/alchemy';
import Text from '../../components/Text';
import NftListItem from './NftListItem';

const NUM_COLUMNS = Platform.OS === 'web' ? 4 : 1;

function NftList() {
  const { address } = useAccount();
  let { nfts, isLoading } = useNFTsForAddress(address);

  const renderItem = ({ item }) => {
    const width: `${number}%` =
      NUM_COLUMNS > 1 ? `${90 / NUM_COLUMNS}%` : '100%';

    return <NftListItem nft={item} style={{ width }} />;
  };

  if (nfts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>No NFTs were found for address: {address}</Text>
        )}
      </View>
    );
  }

  return (
    <FlatList
      data={nfts}
      numColumns={NUM_COLUMNS}
      renderItem={renderItem}
      keyExtractor={item => `${item.contract?.address}-${item.tokenId}`}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={NUM_COLUMNS > 1 ? styles.columnWrapper : undefined}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: '5%',
  },
  columnWrapper: {
    columnGap: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NftList;
