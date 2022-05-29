import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

import Card from '@/components/Card';

interface Props {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  isWaveLoading: boolean;
  handleSendWave: (event: SyntheticEvent) => void;
}

const WaveForm = ({
  message,
  setMessage,
  isWaveLoading,
  handleSendWave,
}: Props) => {
  return (
    <Card title='Send a wave'>
      <form onSubmit={handleSendWave}>
        <label
          htmlFor='message'
          className='mb-3 block text-sm font-medium text-gray-400'
        >
          Your message
        </label>
        <textarea
          id='message'
          className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
          placeholder='Hello how are you?'
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type='submit'
          disabled={isWaveLoading}
          className='mt-3 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-amber-300 hover:to-amber-100 focus:outline-none focus:ring-4'
        >
          {isWaveLoading ? 'Loading...' : 'Join the wave'}
        </button>
      </form>
    </Card>
  );
};

export default WaveForm;
