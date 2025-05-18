"use client";

import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

interface ColsProps {
  headers: string[];
}

const Cols: React.FC<ColsProps> = React.memo(({ headers }) => {
  return (
    <tr>
      {headers.map((header) => (
        <th
          key={header}
          className="px-4 py-2 text-left text-xs font-semibold text-neutral-800 uppercase tracking-wider border border-gray-300"
        >
          <div className="flex items-center space-x-1">
            <span>{header}</span>
            {header === "Last Update" && (
              <PencilIcon className="h-4 w-4 text-gray-600 cursor-pointer" />
            )}
          </div>
        </th>
      ))}
    </tr>
  );
});

export default Cols;