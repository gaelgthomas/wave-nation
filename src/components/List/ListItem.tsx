import RoundedBadge from '@/components/RoundedBadge';

type Props = {
  firstLineText: string;
  secondLineText: string;
  thirdLineText: string;
  position?: number;
};

const ListItem = ({
  firstLineText,
  secondLineText,
  thirdLineText,
  position,
}: Props) => (
  <li className='py-3'>
    <div className='flex items-center space-x-4'>
      {position && <RoundedBadge variant='gray' text={`#${position}`} />}
      <div className='min-w-0 flex-1'>
        <p className='text-md font-medium text-white'>{firstLineText}</p>
        <p className=' text-md text-gray-400'>{secondLineText}</p>
        <p className=' text-md text-gray-400'>{thirdLineText}</p>
      </div>
    </div>
  </li>
);

export default ListItem;
