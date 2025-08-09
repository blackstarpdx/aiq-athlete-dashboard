import React from 'react';
import PropTypes from 'prop-types';

function DashboardCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 m-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashboardCard.defaultProps = {
  title: '',
  value: '',
};

export default DashboardCard;