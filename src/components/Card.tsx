import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode | ReactNode[];
};

const Card = ({ title, children }: Props) => (
  <div className='m-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-md'>
    <h2 className='text-xl font-bold leading-none text-white'>{title}</h2>
    <div className='py-3'>{children}</div>
  </div>
);

export default Card;
