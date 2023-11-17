import { TokensQuery, ZDK, ZDKChain, ZDKNetwork } from '@zoralabs/zdk';
import { useEffect, useState } from 'react';

export type NftData = TokensQuery['tokens']['nodes'][number]['token'];

// TODO: Change Zora to Alchemy
const zdk = new ZDK({
  endpoint: 'https://api.zora.co/graphql',
  networks: [
    {
      chain: ZDKChain.Mainnet,
      network: ZDKNetwork.Ethereum,
    },
    {
      chain: ZDKChain.PgnMainnet,
      network: ZDKNetwork.Pgn,
    },
  ],
});

export function useNFTsForAddress(address: string) {
  const [nfts, setNFTs] = useState<NftData[]>([]);

  useEffect(() => {
    const getNfts = async () => {
      const { tokens } = await zdk.tokens({
        where: {
          ownerAddresses: [address],
        },
      });

      const formatted = tokens.nodes.map(node => node.token) as NftData[];

      setNFTs(formatted);
    };

    if (address) {
      void getNfts();
    }
  }, [address]);

  return nfts;
}
