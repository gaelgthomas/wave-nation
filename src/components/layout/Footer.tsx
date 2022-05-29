import { GITHUB_LINK, TWITTER_LINK } from '@/helpers/constants';

const Footer = () => (
  <footer className=' inset-x-0 bottom-0 bg-gray-800 p-4 shadow md:px-6 md:py-8'>
    <div className='sm:flex sm:items-center sm:justify-between'>
      <span className='mb-4 flex items-center self-center whitespace-nowrap text-2xl font-semibold text-white sm:mb-0'>
        👋 Wave Nation
      </span>
      <ul className='mb-6 flex flex-wrap items-center text-sm text-gray-400 sm:mb-0'>
        <li>
          <a href={TWITTER_LINK} className='mr-4 hover:underline md:mr-6 '>
            Twitter
          </a>
        </li>
        <li>
          <a href={GITHUB_LINK} className='mr-4 hover:underline md:mr-6 '>
            GitHub
          </a>
        </li>
      </ul>
    </div>
    <hr className='my-6 border-gray-700 sm:mx-auto lg:my-8' />
    <span className='block text-sm text-gray-400 sm:text-center'>
      © {new Date().getFullYear()} by{' '}
      <a
        href={TWITTER_LINK}
        target='_blank'
        rel='noreferrer'
        className='underline'
      >
        Gaël Thomas
      </a>
    </span>
  </footer>
);

export default Footer;
