import React from 'react';
import { Linking, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Nft } from 'alchemy-sdk';
import { Image } from 'expo-image';
import Text from '../../components/Text';
import { theme } from '../../lib/theme';
import { OPENSEA_BASE_URL } from '../../constants';

type NftListItemProps = {
  nft: Nft;
  style: ViewStyle;
};

function NftListItem({ nft, style }: NftListItemProps) {
  const openMarketplace = () => {
    void Linking.openURL(
      `${OPENSEA_BASE_URL}/${nft.contract.address}/${nft.tokenId}`,
    );
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={openMarketplace}
      style={[styles.container, style]}>
      {/* @ts-expect-error: react-native-web does not export TS typings for the `hovered` argument */}
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
