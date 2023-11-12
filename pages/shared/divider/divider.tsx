import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="pt-50 pb-80 text-center">
      <svg className="col-6 col-md-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.54 9.24">
        <path className="divider"
          d="M1.26,3.24C19.55,3.11,19.6,9.11,37.89,9S56.15,2.87,74.45,2.74,92.79,8.62,111.09,8.5s18.26-6.13,36.56-6.25S166,8.13,184.29,8"
          transform="translate(-0.01 -1)"></path>
      </svg>
    </div>
  )
}

Divider.displayName = "Divider";
export default Divider;