import Card from '@/components/Card';
import List from '@/components/List/List';
import ListItem from '@/components/List/ListItem';

import Wave from '@/types/Wave';

interface Props {
  title: string;
  data: Wave[];
}

const MessageList = ({ title, data }: Props) => (
  <Card title={title}>
    <List>
      {data.length ? (
        data.map((wave, index) => {
          const { walletAddress, timestamp, message } = wave;

          return (
            <ListItem
              key={index}
              firstLineText={walletAddress}
              secondLineText={timestamp.toLocaleString()}
              thirdLineText={message}
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

export default MessageList;
