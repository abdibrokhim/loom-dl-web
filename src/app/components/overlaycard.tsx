import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OverlayCard = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowOverlay(false);

    // Show the overlay again after 5 minutes
    setTimeout(showAgain, 5000); // 5 minutes
  };

  const showAgain = () => {
    setShowOverlay(true);
  }

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[#1f2024] rounded-md p-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Sidebar"
          className="absolute top-2 right-2 hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
        >
          <Image
            aria-hidden
            src="/close.svg"
            alt="close icon"
            width={22}
            height={22}
          />
        </button>

        {/* Image */}
        <Image
          src="/intro.png"
          alt="Intro Image"
          width={400}
          height={300}
          className="mb-4 rounded-md"
        />

        {/* Navigation Link */}
        <div
          className="flex flex-row gap-2 bg-[#A1A2A5] text-black w-full items-center justify-center py-2 rounded-lg text-md font-bold hover:bg-[#BBBCBE] transition cursor-pointer"
        >
          <a
            href="https://theopencommunity.vercel.app/"
            className="text-[#000000] hover:underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Early Access
          </a>
          <Image
            aria-hidden
            src="/arrow-top.svg"
            alt="Demo icon"
            width={22}
            height={22}
            className="inline"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;