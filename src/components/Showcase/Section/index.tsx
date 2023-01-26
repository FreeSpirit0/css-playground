import React from "react";

interface Props {
  headerName: string;
  categoryName: string;
  child: React.ReactNode;
}

const Content: React.FC<Props> = ({ headerName, categoryName, child }) => {
  return (
    <div className="p-4 pb-0">
      <p className="text-l pl-2 text-fuchsia-700">{categoryName}</p>
      <p className="text-2xl p-2 pb-0 text-bold">{headerName}</p>
      <div className="pl-2">{child}</div>
    </div>
  );
};

export default Content;
