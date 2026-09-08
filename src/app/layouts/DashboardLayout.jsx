import React from "react";
import { Outlet } from "react-router-dom";
import AsideNav from "../../shared/ui/components/AsideNav";
import TopNav from "../../shared/ui/components/TopNav";
import BottomNav from "../../shared/ui/components/BottomNav";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-(--background) text-(--foreground)">
      <AsideNav />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
