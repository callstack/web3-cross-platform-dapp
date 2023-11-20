import { useEffect, useState } from 'react';
import { Alchemy, Network, Nft } from 'alchemy-sdk';

const alchemy = new Alchemy({
  apiKey: process.env.EXPO_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

export function useNFTsForAddress(address: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [nfts, setNfts] = useState<Nft[]>([]);

  useEffect(() => {
    const getNfts = async () => {
      const { ownedNfts } = await alchemy.nft.getNftsForOwner(address);
      const filtered = ownedNfts.filter(nft => !!nft.image.thumbnailUrl);
      setNfts(filtered);
      setIsLoading(false);
    };

    if (address) {
      void getNfts();
    }
  }, [address]);

  return { nfts, isLoading };
}
