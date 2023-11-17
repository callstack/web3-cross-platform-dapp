import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from '../Text';
import { NftData } from '../../services/zora';
import { theme } from '../../theme';

type NftListItemProps = {
  nft: NftData;
  numColumns: number;
};

function NftListItem({ nft, numColumns }: NftListItemProps) {
  return (
    <View style={[{ flex: 1 / numColumns }, styles.container]}>
      <View>
        <Image
          source={{ uri: nft.image?.mediaEncoding?.original }}
          style={{ height: 200 }}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text numberOfLines={1}>{nft.name}</Text>
        <Text>#{nft.tokenId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: theme.colors.primary,
  },
  nameContainer: {
    gap: 4,
  },
});

export default NftListItem;
