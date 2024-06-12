import { FC } from 'react';


interface BackButtonProps {
  onClick: () => void;
}

const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md cursor-pointer" onClick={onClick}>
  
    </div>
  );
};

export default BackButton;
