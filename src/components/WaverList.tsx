import Card from '@/components/Card';
import List from '@/components/List/List';
import ListItem from '@/components/List/ListItem';

import Waver from '@/types/Waver';

interface Props {
  title: string;
  data: Waver[];
}

const WaverList = ({ title, data }: Props) => (
  <Card title={title}>
    <List>
      {data.length ? (
        data.map((waver, index) => {
          const { walletAddress, lastWavedAt, count } = waver;

          return (
            <ListItem
              key={index}
              firstLineText={walletAddress}
              secondLineText={`Total waves: ${count}`}
              thirdLineText={`Last wave: ${lastWavedAt?.toLocaleString()}`}
              position={index + 1}
            />
          );
        })
      ) : (
        <p className='text-sm font-normal text-gray-400'>
          Connect your wallet to see this data.
        </p>
      )}
    </List>
  </Card>
);

export default WaverList;
