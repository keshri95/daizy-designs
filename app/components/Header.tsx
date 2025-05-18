import { BellIcon, EllipsisVerticalIcon, SparklesIcon, SpeakerWaveIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl  text-neutral-900 flex items-center">
          <span className="mr-1 text-black">[+]</span> Daizy Designs
        </h1>
      </div>

     

      <div className="flex items-center space-x-3">
        <button className="bg-pink-100 flex cursor-pointer text-pink-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-pink-200 transition">
          <span>
            <SparklesIcon className="h-5 w-5 text-stone-400 hover:text-gray-700 cursor-pointer" />
            </span> Smart Actions
        </button>


        <button className="flex items-center space-x-1 bg-stone-100 flex cursor-pointer text-pink-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-pink-200 transition">
          <div className="relative">
            <BellIcon className="h-6 w-6 text-red-500 " />
            <span className="absolute -top-3 -right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-400 rounded-full shadow-sm">
              1
            </span>
          </div>
        </button>


        <button className="flex items-center space-x-1 bg-stone-100 flex cursor-pointer text-pink-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-pink-200 transition">
          <div className="relative">
            <SpeakerWaveIcon className="h-6 w-6 text-red-500 " />
            <span className="absolute -top-3 -right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-400 rounded-full shadow-sm">
              15
            </span>
          </div>
        </button>

       

        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-700">Ashish Keshri</span>
        </div>

        <button className="cursor-pointer">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 " />
        </button>

        
      </div>
    </header>
  );
}