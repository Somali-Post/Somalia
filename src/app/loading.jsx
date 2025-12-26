import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="text-center">
        <Image
          src="/logos/coat-of-arms.png"
          alt="Loading"
          width={80}
          height={80}
          className="animate-pulse inline-block"
        />
        <p className="mt-4 text-sm font-medium text-slate-400 tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}