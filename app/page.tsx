import type { Metadata } from "next";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LeadsTable from "./components/LeadsTable";
import InitLeads from "./components/InitLeads";
import LeadFilter from "./components/LeadFilter";

export default function IndexPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <div className="flex flex-1 pt-16">
        <div className="fixed top-16 left-0 bottom-0 w-64 z-10">
          <Sidebar />
        </div>

        <div className="flex-1 ml-64 overflow-hidden">
          <div className="h-full p-6 flex flex-col gap-6 bg-white p-4 rounded-lg shadow-sm">
            <LeadFilter />

            <div>
              <InitLeads />
            </div>

            <div className="flex-1 overflow-auto ">
              <LeadsTable />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Daizy Designs Dashboard",
};
