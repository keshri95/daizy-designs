"use client";

import {
  BellIcon,
  EllipsisVerticalIcon,
  SparklesIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import React from "react";

 const Header:React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl text-neutral-900 flex items-center">
          <span className="mr-1 text-black">[+]</span> Daizy Designs
        </h1>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          icon={SparklesIcon}
          className="bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1.5 hover:bg-pink-200"
          iconClassName="text-stone-400 hover:text-gray-700 mr-1"
        >
          Smart Actions
        </Button>

        <Button
          icon={BellIcon}
          badge={1}
          className="bg-stone-100 text-pink-600 px-3 py-1.5 hover:bg-pink-200"
          iconClassName="h-6 w-6 text-red-500"
        />

        <Button
          icon={SpeakerWaveIcon}
          badge={15}
          className="bg-stone-100 text-pink-600 px-3 py-1.5 hover:bg-pink-200"
          iconClassName="h-6 w-6 text-red-500"
        />

        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-700">Ashish Keshri</span>
        </div>

        <Button
          icon={EllipsisVerticalIcon}
          className="text-gray-500 hover:text-gray-700"
        />
      </div>
    </header>
  );
}

export default Header