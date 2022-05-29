import { ethers } from 'ethers';

import Wave from '@/types/Wave';
import Waver from '@/types/Waver';

export const getErrorMessage = (error: any): string => {
  const errorMessage = error?.reason || 'Unexpected error';

  return errorMessage.replace('execution reverted: ', '');
};

export const checkIfWindowIsLoaded = (): boolean =>
  typeof window !== 'undefined';

export const getMetamask = () => {
  const { ethereum } = window;

  if (!ethereum) {
    alert('Get MetaMask!');
    return;
  }

  return ethereum;
};

export const formatWaves = (waves: Wave[]): Wave[] =>
  waves
    .map((wave: Wave) => ({
      walletAddress: wave.walletAddress,
      timestamp: new Date((wave.timestamp as number) * 1000),
      message: wave.message,
    }))
    .reverse();

export const formatTopWavers = (topWavers: Waver[]): Waver[] =>
  topWavers
    .map((waver: Waver) => {
      if (waver.walletAddress === ethers.constants.AddressZero) {
        return;
      }

      return formatWaver(waver);
    })
    .filter((waver: Waver) => waver);

export const formatWaver = (waver: Waver): Waver => ({
  walletAddress: waver.walletAddress,
  lastWavedAt: new Date((waver.lastWavedAt as number) * 1000),
  count: waver.count,
  waves: formatWaves(waver.waves),
});
