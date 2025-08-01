import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  HelpCircle,
  FileCheck,
  Ruler,
  Settings,
  FileText,
  Tag,
  Package,
  Grid3X3,
  UserCheck,
  ChevronDown,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";
import { menuItems } from "../mock/mock";

const iconMap = {
  LayoutDashboard,
  Users,
  ShieldCheck,
  HelpCircle,
  FileCheck,
  Ruler,
  Settings,
  FileText,
  Tag,
  Package,
  Grid3X3,
  UserCheck,
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSubmenu = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (item.hasSubmenu) {
      toggleSubmenu(item.id);
    }
  };

  const renderIcon = (iconName, className = "w-5 h-5") => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <>
      {/* Menu Toggle Button - Outside sidebar */}

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed top-4 z-[70] p-2 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 ${
          isCollapsed && !isHovered ? "left-[5rem]" : "left-[17rem]"
        }`}
        data-testid="menu-toggle-button"
        aria-label="Toggle menu"
      >
        {isCollapsed ? (
          <X className="w-5 h-5 text-gray-600" />
        ) : (
          <Menu className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Sidebar - Full height from top */}
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-800 transition-all duration-300 z-[60] 
          ${isCollapsed && !isHovered ? "w-16" : "w-64"}
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full">
          <div
            className="flex items-center px-4  border-b border-gray-700"
            style={{ padding: "0.7rem 0.5rem" }}
          >
            <div className="flex items-center space-x-3 w-full">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              {(!isCollapsed || isHovered) && (
                <span className="text-xl font-bold text-white">MH Raj Electricals</span>
              )}
            </div>
          </div>

          {/* Sidebar content with individual scroll */}
          <div className="flex-1 overflow-y-auto py-4 px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {/* Main menu item */}
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center px-3 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200 group ${
                      activeItem === item.id
                        ? "bg-red-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    title={isCollapsed ? item.label : ""}
                  >
                    <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                      {renderIcon(item.icon)}
                    </div>

                    {(!isCollapsed || isHovered) && (
                      <>
                        <span className="ml-3 truncate flex-1">
                          {item.label}
                        </span>
                        {item.hasSubmenu && (
                          <div className="ml-2 flex-shrink-0">
                            {expandedItems[item.id] ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </button>

                  {/* Submenu items */}
                  {item.hasSubmenu &&
                    expandedItems[item.id] &&
                    !isCollapsed(
                      <div className="ml-8 mt-1 space-y-1">
                        {item.subItems?.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => setActiveItem(subItem.id)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                              activeItem === subItem.id
                                ? "bg-red-500 text-white"
                                : "text-gray-400 hover:bg-gray-700 hover:text-white"
                            }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
