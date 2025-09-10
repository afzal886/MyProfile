import React, { useState, useEffect } from 'react';

const generateBinaryString = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.round(Math.random());
  }
  return result.split('').join(' '); // Add spaces for better visuals
};

const BinaryMarquee: React.FC = () => {
  const [binaryString, setBinaryString] = useState('');

  useEffect(() => {
    // Generate a long string to fill the screen and allow for looping
    const str = generateBinaryString(1000);
    setBinaryString(str);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-12 bg-[#0d1117]/80 backdrop-blur-sm z-50 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 whitespace-nowrap">
        <p className="inline-block text-cyan-500/50 font-mono text-lg animate-marquee py-2 select-none">
          {binaryString}{binaryString} {/* Duplicate for seamless loop */}
        </p>
      </div>
    </div>
  );
};

export default BinaryMarquee;