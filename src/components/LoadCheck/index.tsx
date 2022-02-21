import React from "react";

import "./loadCheck.scss";

interface ILoadingProps {
  isLoad: boolean;
}

const LoadCheck: React.FC<ILoadingProps> = (props) => {
  const { isLoad } = props;

  if (isLoad) {
    return <>{props.children}</>;
  }

  return (
    <div className="laoder">
      <svg className="loader__stroke">
        <circle cx="70" cy="70" r="50"></circle>
      </svg>
    </div>
  );
};

export default LoadCheck;
