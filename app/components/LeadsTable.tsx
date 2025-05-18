
"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { CalendarDaysIcon, CheckIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import { updateLeadStatus } from "@/lib/features/leads/leadsSlice";

export default function LeadsTable() {
  const leads = useSelector((state: RootState) => state.leads.leads);
  const dispatch = useDispatch();

  const statusOptions = [
    { label: "Created", bgColor: "bg-gray-100", textColor: "text-gray-800" },
    { label: "Estimate Shared", bgColor: "bg-orange-100", textColor: "text-orange-800" },
    { label: "Planned Visit", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
    { label: "Assigned", bgColor: "bg-green-100", textColor: "text-green-800" },
  ];

  const handleStatusChange = (leadId: string, newStatus: string) => {
    dispatch(updateLeadStatus({ id: leadId, status: newStatus }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {[
              "ID",
              "Client Name",
              "Status",
              "Phone",
              "Follow Up",
              "Created Date",
              "Project Name",
              "Assigned To",
              "Budget",
              "Last Update",
            ].map((header, index) => (
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
        </thead>
        <tbody className="bg-white">
          {leads.length === 0 ? (
            <tr>
              <td colSpan={10} className="px-4 py-4 text-center text-gray-500">
                No leads available.
              </td>
            </tr>
          ) : (
            leads.map((lead, index) => (
              <tr key={lead.id} className={index !== 1 ? "bg-white" : "bg-red-100"}>
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
                      lead.status === "Estimate Shared"
                        ? "bg-orange-100 text-orange-800"
                        : lead.status === "Planned Visit"
                        ? "bg-yellow-100 text-yellow-800"
                        : lead.status === "Assigned"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
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
                      {(() => {
                        const getName = lead.assignedTo.trim().split(" ");
                        const initials = getName[0][0] + (getName[1]?.[0] || '');
                        return initials.toUpperCase();
                      })()}
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
                        value={lead.lastCreated}
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
        </tbody>
      </table>
    </div>
  );
}






