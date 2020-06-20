import React from "react";
import { DetailedViewProvider } from "./DetailedView";

const Providers: React.FC = ({ children }) => {
  return <DetailedViewProvider>{children}</DetailedViewProvider>;
};

export default Providers;
