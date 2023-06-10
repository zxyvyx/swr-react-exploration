interface FullLoadingProps {
  isFullScreen?: boolean;
}

export default function FullLoading({
  isFullScreen = false,
}: FullLoadingProps) {
  return (
    <div
      className={`w-full bg-white/70 flex justify-center items-center ${
        isFullScreen ? 'h-screen' : 'h-full'
      }`}
    >
      <div className='border-t-transparent border-solid animate-spin rounded-full border-black/50 border-4 h-10 w-10' />
    </div>
  );
}
