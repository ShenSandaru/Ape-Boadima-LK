// components/layout/SimpleLayout.js
import React from 'react';

const SimpleLayout = ({ children }) => {
  return (
    <div className="simple-layout">
      <main>{children}</main>
    </div>
  );
};

export default SimpleLayout;
