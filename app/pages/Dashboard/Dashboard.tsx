import SideNav from '@/app/components/SideNav';
import TopNav from '@/app/components/TopNav';
import React, { ReactNode } from 'react';

interface DashboardProps {
    children: ReactNode; 
  }

const Dashboard = ({ children }: DashboardProps) => {
    return (
        <div className="flex h-screen">
        <SideNav />
        <div className="flex flex-col w-full">
          <TopNav />
          <main className="p-4">{children}</main>
        </div>
      </div>
    );
  };
  

export default Dashboard;
