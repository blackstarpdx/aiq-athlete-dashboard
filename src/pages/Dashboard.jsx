import React from 'react';
import DashboardCard from '../components/DashboardCard';

function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <DashboardCard title="Athletes" value="10" />
      <DashboardCard title="Videos" value="25" />
    </div>
  );
}

export default Dashboard;