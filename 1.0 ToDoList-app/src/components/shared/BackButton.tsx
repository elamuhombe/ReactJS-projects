import{ FC, ReactElement } from 'react';

interface BackButtonProps {
  icon: ReactElement | null; // Define the icon prop
}

const BackButton: FC<BackButtonProps> = ({ icon }) => {
  return (
    <div>
      {icon} {/* Render the provided icon */}
    </div>
  );
};

export default BackButton;
