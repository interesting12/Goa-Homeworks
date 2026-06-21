import React from "react";

const RenderDivsManual = () => {
  const div = <div className="box">div</div>;

  return (
    <div>
      {[...Array(100).fill(div)]}
    </div>
  );
};

export default RenderDivsManual;

