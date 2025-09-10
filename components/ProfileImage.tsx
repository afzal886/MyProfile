
import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

const ProfileImage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img
        src="/SideImage.png"
        alt="Professional Profile"
        className="w-full h-full object-cover object-center filter grayscale-[80%] contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
};

export default ProfileImage;
