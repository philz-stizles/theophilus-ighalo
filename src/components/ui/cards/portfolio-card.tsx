import Image from 'next/image';
import IconButton from '../icon-button/icon-button';
import { Play } from 'lucide-react';

const PortfolioCard = () => {
  return (
    <div>
      <div className='relative flex overflow-hidden aspect-video'>
        <video className='max-w-full h-auto'></video>
        <Image fill src={''} alt={''} />
        <div className='absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full'>
          <IconButton icon={Play} />
        </div>
      </div>
      <h2 className="mt-4">KryptoFundMe</h2>
      <p className="text-lg font-medium">
        Apartment & booking management platform for landlords renting out on
        Wunderflats.
      </p>
      <small className="">Built with Next.js, Tailwind CSS</small>
    </div>
  );
};

export default PortfolioCard;
