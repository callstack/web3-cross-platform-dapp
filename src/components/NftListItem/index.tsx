import React from 'react';
import { Image, Linking, Pressable, StyleSheet, View } from 'react-native';
import { Nft } from 'alchemy-sdk';
import Text from '../Text';
import { theme } from '../../theme';

type NftListItemProps = {
  nft: Nft;
  numColumns: number;
};

function NftListItem({ nft, numColumns }: NftListItemProps) {
  const openNft = () => {
    void Linking.openURL(
      `https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`,
    );
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={openNft}
      style={[{ flex: 1 / numColumns }, styles.container]}>
      {/* react-native-web does not export TS typings for the `hovered` argument */}
      {/* @ts-expect-error */}
      {({ hovered, pressed }) => (
        <View style={(hovered || pressed) && styles.pressed}>
          <Image
            accessibilityIgnoresInvertColors
            source={{ uri: nft.image.thumbnailUrl }}
            style={styles.image}
          />
          <View style={styles.nameContainer}>
            <Text numberOfLines={1} style={styles.name}>
              {nft.name}
            </Text>
            {nft.collection?.name && (
              <Text numberOfLines={1}>{nft.collection.name}</Text>
            )}
          </View>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: theme.colors.border,
  },
  pressed: {
    opacity: 0.8,
  },
  nameContainer: {
    justifyContent: 'center',
    gap: 4,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  image: {
    height: 250,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default NftListItem;
