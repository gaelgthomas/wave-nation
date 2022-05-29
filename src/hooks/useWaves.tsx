import { useState } from 'react';
import { useEffect } from 'react';

import { useMetaMask } from '@/hooks/MetamaskProvider';

import { formatTopWavers, formatWaves, getErrorMessage } from '@/helpers/utils';

import Wave from '@/types/Wave';
import Waver from '@/types/Waver';

const useWave = () => {
  const { getMetamask, contract, profile } = useMetaMask();
  const [isWaveLoading, setIsWaveLoading] = useState<boolean>(false);
  const [allWaves, setAllWaves] = useState<Wave[]>([]);
  const [topWavers, setTopWavers] = useState<Waver[]>([]);

  const sendWave = async (message: string) => {
    try {
      setIsWaveLoading(true);

      const waveTxn = await contract.wave(message, { gasLimit: 1000000 });

      await waveTxn.wait();
    } catch (error) {
      alert(getErrorMessage(error));
    } finally {
      setIsWaveLoading(false);
    }
  };

  const getAllWaves = async () => {
    try {
      const waves = await contract.getAllWaves();

      setAllWaves(formatWaves(waves));
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  const getTopWavers = async () => {
    try {
      const topWavers = await contract.getTopWavers();

      setTopWavers(formatTopWavers(topWavers));
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (!profile) {
      return;
    }

    getAllWaves();
    getTopWavers();
  }, [profile]);

  /**
   * Listen in for emitter events!
   */
  useEffect(() => {
    const onNewWave = (from: string, timestamp: number, message: string) => {
      const newWave: Wave = {
        walletAddress: from,
        timestamp: new Date(timestamp * 1000),
        message: message,
      };

      setAllWaves((prevState: Wave[]) => [newWave, ...prevState]);

      // Reload the top wavers
      // TODO: Send an event for changes in the top wavers
      getTopWavers();
    };

    const ethereum = getMetamask();

    if (ethereum) {
      contract.on('NewWave', onNewWave);
    }

    return () => {
      if (contract) {
        contract.off('NewWave', onNewWave);
      }
    };
  }, []);

  return { allWaves, topWavers, isWaveLoading, sendWave };
};

export default useWave;
