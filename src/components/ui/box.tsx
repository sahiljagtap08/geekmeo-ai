import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      {children}
    </div>
  );
};

export default Box;
