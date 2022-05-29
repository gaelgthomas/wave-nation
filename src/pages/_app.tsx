import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { MetaMaskProvider } from '@/hooks/MetamaskProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <Component {...pageProps} />
    </MetaMaskProvider>
  );
}

export default MyApp;
