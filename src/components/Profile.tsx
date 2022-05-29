import Card from '@/components/Card';
import MetamaskLogo from '@/components/MetamaskLogo';

interface Props {
  isLoading: boolean;
  profile: any;
  handleConnectWallet: () => void;
}

const Profile = ({ isLoading, profile, handleConnectWallet }: Props) => (
  <Card title={profile ? 'Profile' : 'Connect wallet'}>
    {/* Profile not loaded */}
    {!profile && (
      <p className='text-sm font-normal text-gray-400'>
        Connect with one available wallet provider.
      </p>
    )}
    {!profile && (
      <ul className='my-4 space-y-3'>
        <li>
          <a
            onClick={handleConnectWallet}
            className='group flex items-center rounded-lg  bg-gray-600 p-3 text-base  font-bold text-white hover:bg-gray-500 hover:shadow'
          >
            <MetamaskLogo className='h-4' />
            <span className='ml-3 flex-1 whitespace-nowrap'>
              MetaMask {isLoading && '- Loading...'}
            </span>
          </a>
        </li>
      </ul>
    )}

    {/* Profile loaded */}
    {profile && (
      <>
        <p className='font-normal text-gray-400'>
          <span className='font-semibold text-white'>Address:</span>{' '}
          {profile.walletAddress}
          <br />
          <span className='font-semibold text-white'>Total waves:</span>{' '}
          {profile.count || 0}
          <br />
          <span className='font-semibold text-white'>Last waved at:</span>{' '}
          {profile?.lastWavedAt?.toLocaleString() || 'N/A'}
        </p>
      </>
    )}
  </Card>
);

export default Profile;
