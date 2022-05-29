import { SyntheticEvent, useState } from 'react';

import { useMetaMask } from '@/hooks/MetamaskProvider';
import useWave from '@/hooks/useWaves';

import Layout from '@/components/Layout/Layout';
import MessageList from '@/components/MessageList';
import Profile from '@/components/Profile';
import Seo from '@/components/Seo';
import WaveForm from '@/components/WaveForm';
import WaverList from '@/components/WaverList';

const HomePage = () => {
  const { isLoading, connectWallet, profile } = useMetaMask();
  const { isWaveLoading, sendWave, allWaves, topWavers } = useWave();

  const [message, setMessage] = useState<string>('');

  const handleSendWave = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!profile) {
      alert('Connect your wallet to start waving.');
      return;
    }

    sendWave(message);
    setMessage('');
  };

  return (
    <Layout>
      <Seo />
      <main className='mainContainer'>
        <div className='flex flex-col justify-center lg:flex-row'>
          <div className='basis-1/3'>
            <Profile
              isLoading={isLoading}
              profile={profile}
              handleConnectWallet={connectWallet}
            />
          </div>
          <div className='basis-2/3'>
            <WaveForm
              message={message}
              setMessage={setMessage}
              isWaveLoading={isWaveLoading}
              handleSendWave={handleSendWave}
            />
          </div>
        </div>

        <div className='flex flex-col justify-center lg:flex-row'>
          <div className='basis-1/3'>
            <WaverList title='Top Wavers' data={topWavers} />
          </div>
          <div className='basis-2/3'>
            <MessageList title='Last Messages' data={allWaves} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
