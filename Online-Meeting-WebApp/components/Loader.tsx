import Image from 'next/image';

// Loader component that renders the loader component with the loading circle image and the alt text "Loading..."
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
