"use client";

import {
  ClipboardIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const statusOptions = [
  { label: "Estimate Shared" },
  { label: "Planned Visit" },
  { label: "Assigned" },
  { label: "Created" },
];

const LeadFilter = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-semibold text-gray-800">Leads</p>
        <button className="bg-red-500 p-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors">
          <PlusIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white shadow-sm transition-all"
          />

          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <XMarkIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>

        <div>
          

          <select
            className={`px-3 py-1.5 text-sm font-medium rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors cursor-pointer`}
          >
            {statusOptions.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>

        </div>

        <button className="flex items-center space-x-1 border border-red-300 flex cursor-pointer text-pink-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-stone-200 transition">
          <FunnelIcon className="h-6 w-6 text-red-500 " />
        </button>

        <button className="flex items-center space-x-1 border border-red-300 flex cursor-pointer text-pink-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-stone-200 transition">
          <ClipboardIcon className="h-6 w-6 text-red-500 " />
        </button>

        <button className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-colors">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default LeadFilter;
