"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLeads } from "@/lib/features/leads/leadsSlice";


interface Lead {
  id: number;
  clientName: string;
  status: string;
  phone: string;
  followUp: string;
  created: string;
  assignedTo: string;
  project: string;
  budget: number;
  lastCreated: string;
}
const dummyLeads: Lead[] = [
  {
    id: 1,
    clientName: "Ashish Keshri",
    status: "Estimate Shared",
    phone: "+91 9876543210",
    followUp: "2025-05-20",
    created: "2025-05-01",
    assignedTo: "Rahul Sharma",
    project: "Website Redesign",
    budget: 5.5,
    lastCreated: "2025-05-15",
  },
  {
    id: 2,
    clientName: "Priya Singh",
    status: "Planned Visit",
    phone: "+91 9123456789",
    followUp: "2025-05-22",
    created: "2025-05-03",
    assignedTo: "Anita Verma",
    project: "Mobile App",
    budget: 8.0,
    lastCreated: "2025-05-16",
  },
  {
    id: 3,
    clientName: "Vikram Patel",
    status: "Confirmed",
    phone: "+91 9988776655",
    followUp: "2025-05-21",
    created: "2025-05-05",
    assignedTo: "Suresh Nair",
    project: "E-commerce Platform",
    budget: 12.0,
    lastCreated: "2025-05-17",
  },
    {
    id: 4,
    clientName: "Ashish Keshri",
    status: "Estimate Shared",
    phone: "+91 9876543210",
    followUp: "2025-05-20",
    created: "2025-05-01",
    assignedTo: "Rahul Sharma",
    project: "Website Redesign",
    budget: 5.5,
    lastCreated: "2025-05-15",
  }

];

export default function InitLeads() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLeads(dummyLeads));
  }, [dispatch]);

  return null;
}