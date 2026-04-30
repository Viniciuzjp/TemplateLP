type CardType = {
  children?: React.ReactNode,
  className?: string
}

export const Card = ({ className, children }: CardType) => {
  return (
    <div className={`flex flex-col w-full bg-(--card-bg) p-5 group overflow-hidden rounded-2xl  backdrop-blur-md border border-white/10 hover:bg-white/10 transition ${className}`}>
      {children}
    </div>
  );
};