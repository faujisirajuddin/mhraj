import React, { Children, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import BackToTop from "../../components/BackToTop";
import Dashboard from "@/admin/dashboard/Dashboard";

function DashboardLayout({children}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header isSidebarCollapsed={isSidebarCollapsed} />

      <div className="flex flex-1">
        {/* Sidebar - fixed width */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />

        {/* Scrollable Main Content */}
        <main
          className={`flex-1 overflow-y-auto pt-16 transition-all duration-300 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 ${
            isSidebarCollapsed ? "ml-16" : "ml-64"
          }`}
          style={{backgroundColor:"#ccc"}}
        >
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>

      <BackToTop />
    </div>
  );
}

export default DashboardLayout;
