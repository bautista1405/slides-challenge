import React from 'react'; 

interface RightArrowIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const RightArrowIcon: React.FC<RightArrowIconProps> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
}

export default RightArrowIcon;
