"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Cols from "./Cols";
import Rows from "./Rows";
import { Status } from "@/types/leads";

export default function LeadsTable() {
  const leads = useSelector((state: RootState) => state.leads.leads);

  const headers = [
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
  ];

  const statusOptions: Status[] = [
    { label: "Created", bgColor: "bg-gray-100", textColor: "text-gray-800" },
    { label: "Estimate Shared", bgColor: "bg-orange-100", textColor: "text-orange-800" },
    { label: "Planned Visit", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
    { label: "Assigned", bgColor: "bg-green-100", textColor: "text-green-800" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <Cols headers={headers} />
        </thead>
        <tbody className="bg-white">
          <Rows leads={leads} statusOptions={statusOptions} />
        </tbody>
      </table>
    </div>
  );
}