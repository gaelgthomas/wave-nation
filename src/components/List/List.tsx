import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

const List = ({ children }: Props) => (
  <ul role='list' className='divide-y divide-gray-700'>
    {children}
  </ul>
);

export default List;
