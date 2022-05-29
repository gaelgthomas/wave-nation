import { ethers } from 'ethers';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/helpers/constants';
import {
  checkIfWindowIsLoaded,
  formatWaver,
  getErrorMessage,
  getMetamask,
} from '@/helpers/utils';

import Waver from '@/types/Waver';

const MetaMaskContext = createContext(null);

interface Props {
  children: ReactNode | ReactNode[];
}

export const MetaMaskProvider = ({ children }: Props) => {
  const [profile, setProfile] = useState<Waver>();
  const [isLoading, setIsLoading] = useState(false);
  const isWindowReady = checkIfWindowIsLoaded();

  /**
   * Wallet connection
   */
  const connectWallet = async () => {
    try {
      setIsLoading(true);

      const ethereum = getMetamask();

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      await getProfile(accounts[0]);
    } catch (error) {
      console.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      setIsLoading(true);

      const ethereum = getMetamask();
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (!accounts.length) {
        return;
      }

      await getProfile(accounts[0]);
    } catch (error) {
      console.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Profile fetching
   */
  const getProfile = async (walletAddress: string) => {
    try {
      if (!contract) {
        return;
      }

      const myProfile = await contract.getProfile(walletAddress);

      setProfile(formatWaver(myProfile));
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  /**
   * Initialization
   */
  const contract = useMemo(() => {
    if (!isWindowReady) {
      return;
    }

    const ethereum = getMetamask();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  }, [isWindowReady]);

  useEffect(() => {
    if (!isWindowReady) {
      return;
    }

    checkIfWalletIsConnected();
  }, [isWindowReady]);

  return (
    <MetaMaskContext.Provider
      value={{ isLoading, profile, contract, getMetamask, connectWallet }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error(
      'useMetaMask hook must be used with a MetaMaskProvider component'
    );
  }

  return context;
};
