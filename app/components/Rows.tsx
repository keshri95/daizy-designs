"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { CalendarDaysIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { updateLeadStatus } from "@/lib/features/leads/leadsSlice";
import { Lead, Status } from "@/types/leads";

interface RowsProps {
  leads: Lead[];
  statusOptions: Status[];
}

const Rows: React.FC<RowsProps> = React.memo(({ leads, statusOptions }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (leadId: string, newStatus: string) => {
    dispatch(updateLeadStatus({ id: leadId, status: newStatus }));
  };

  const getName = (name: string): string => {
    const nameSlice = name.trim().split(" ");
    return (nameSlice[0][0] + (nameSlice[1]?.[0] || "")).toUpperCase();
  };

  return (
    <>
      {leads.length === 0 ? (
        <tr>
          <td colSpan={10} className="px-4 py-4 text-center text-gray-500">
            No leads available.
          </td>
        </tr>
      ) : (
        leads.map((lead, index) => (
          <tr key={lead.id} className={index === 1 ? "bg-red-100" : "bg-white"}>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.id}
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.clientName}
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300">
              <select
                value={lead.status}
                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                className={`px-2 py-1 text-xs font-semibold rounded-full focus:outline-none ${
                  statusOptions.find((option) => option.label === lead.status)?.bgColor ||
                  "bg-gray-100"
                } ${
                  statusOptions.find((option) => option.label === lead.status)?.textColor ||
                  "text-gray-800"
                }`}
              >
                {statusOptions.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.phone}
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300">
              <div className="flex items-center space-x-1">
                <div className="relative">
                  <CalendarDaysIcon className="h-6 w-6 text-red-500" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-neutral-700 rounded-full shadow-sm">
                    3
                  </span>
                </div>
              </div>
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.created}
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.project}
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300">
              <div className="flex items-center space-x-2">
                <span className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-sm font-semibold text-gray-800">
                  {getName(lead.assignedTo)}
                </span>
              </div>
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300 text-sm text-gray-800">
              {lead.budget} L
            </td>
            <td className="px-4 py-2 whitespace-nowrap border border-gray-300">
              {index === 1 ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    defaultValue={lead.lastCreated}
                    className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-800 focus:outline-none"
                  />
                  <div className="flex flex-col space-y-1">
                    <button className="bg-gray-800 p-1 rounded-full text-white cursor-pointer">
                      <CheckIcon className="h-4 w-4" />
                    </button>
                    <button className="bg-red-500 p-1 rounded-full text-white cursor-pointer">
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-800">{lead.lastCreated}</span>
                </div>
              )}
            </td>
          </tr>
        ))
      )}
    </>
  );
});

export default Rows;