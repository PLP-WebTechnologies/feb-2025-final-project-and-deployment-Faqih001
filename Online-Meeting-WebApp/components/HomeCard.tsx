'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

// Home Card props type definition that defines the props for the HomeCard component
interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

// HomeCard component that uses the HomeCardProps interface to render the home card component with the props passed to it from the parent component
const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
