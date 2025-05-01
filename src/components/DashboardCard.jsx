import React from 'react';

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 m-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}

export default DashboardCard;