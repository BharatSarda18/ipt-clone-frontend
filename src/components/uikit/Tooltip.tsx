import React from 'react';
import { Tooltip as AntTooltip } from 'antd';

interface TooltipProps {
  title: string; // Title of the tooltip
  children: React.ReactNode; // The element that will trigger the tooltip when hovered
  placement?: 'top' | 'left' | 'right' | 'bottom'; // Tooltip placement (optional)
}

// Rename the Tooltip component to avoid the naming conflict
const CustomTooltip: React.FC<TooltipProps> = ({ title, children, placement = 'top' }) => {
  return (
    <AntTooltip title={title} placement={placement}>
      {children}
    </AntTooltip>
  );
};

export default CustomTooltip;
