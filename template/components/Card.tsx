type CardType = {
  children?: React.ReactNode,
  className?: string
}

export const Card = ({ className, children }: CardType) => {
  return (
    <div className={`flex flex-col w-full bg-(--card-bg) rounded-md p-5 ${className}`}>
      {children}
    </div>
  );
};