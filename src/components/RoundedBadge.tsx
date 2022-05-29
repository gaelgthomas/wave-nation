import { classNames } from '@/helpers/classNames';

type ButtonVariant = 'gray';

const variants: Record<ButtonVariant, string> = {
  gray: 'bg-gray-700 text-gray-300',
};

interface Props {
  variant: ButtonVariant;
  text: string;
}

const RoundedBadge = ({ variant, text }: Props) => {
  return (
    <div
      className={classNames(
        'text-md inline-flex flex-shrink-0 items-center rounded-full  p-1.5 font-semibold',
        variants[variant]
      )}
    >
      <span>{text}</span>
    </div>
  );
};

export default RoundedBadge;
