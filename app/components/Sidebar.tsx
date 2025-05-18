"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  ClipboardIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  TruckIcon,
  BuildingLibraryIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Leads", icon: UsersIcon },
  { name: "Projects", icon: FolderIcon },
  { name: "Tasks", icon: ClipboardIcon },
  { name: "Organizations", icon: BuildingOfficeIcon },
  {
    name: "Finance",
    icon: CurrencyDollarIcon,
    subItems: [
      { name: "Petty Expenses", icon: CreditCardIcon },
      { name: "Payments", icon: ShoppingCartIcon },
    ],
  },
  {
    name: "Procurement",
    icon: DocumentTextIcon,
    subItems: [
      { name: "Material Request", icon: TruckIcon },
      { name: "RFQ", icon: DocumentTextIcon },
      { name: "Purchase Order", icon: ShoppingCartIcon },
      { name: "Delivery", icon: TruckIcon },
    ],
  },
  { name: "Inventory", icon: BuildingLibraryIcon },
  { name: "Daizy Assistant", icon: GlobeAmericasIcon },
  { name: "Integrations", icon: DocumentTextIcon },
];

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDropdown = (name: string) => {
    if (!isCollapsed) {
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setOpenDropdown(null); 
  };

  return (
    <div
      className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="px-4 pt-6 flex items-center justify-between">
        {!isCollapsed && (
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-8 py-1.5 bg-gray-100 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        )}
        <button
          className="bg-gray-100 p-1 rounded-full text-gray-800 cursor-pointer mx-2"
          onClick={toggleSidebar}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? (
            <ArrowRightIcon className="h-4 w-4" />
          ) : (
            <ArrowLeftIcon className="h-4 w-4" />
          )}
        </button>
      </div>

      <nav className="mt-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div
              className={`flex items-center px-4 py-2.5 text-gray-800 hover:bg-red-500 transition cursor-pointer ${
                item.name === "Leads"
                  ? "bg-red-400 border-l-4 border-red-500"
                  : "border-l-4 border-transparent"
              } ${isCollapsed ? "justify-center" : ""}`}
              onClick={() => toggleDropdown(item.name)}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className="w-4 h-4 text-gray-800 flex-shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="text-sm font-medium flex-1 ml-3">{item.name}</span>
                  {item.subItems && (
                    <span>
                      {openDropdown === item.name ? (
                        <ChevronUpIcon className="h-4 w-4 text-gray-800" />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4 text-gray-800" />
                      )}
                    </span>
                  )}
                </>
              )}
            </div>

            {!isCollapsed && item.subItems && openDropdown === item.name && (
              <div className="pl-12">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href="#"
                    className="flex items-center px-4 py-2 text-red-400 hover:bg-red-500 transition text-sm"
                  >
                    <subItem.icon className="w-4 h-4 mr-3" />
                    <span>{subItem.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}