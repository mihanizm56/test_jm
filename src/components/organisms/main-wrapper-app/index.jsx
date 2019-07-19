import React, { memo } from "react";
import { Searcher } from "../../../modules/searcher";
import "./main-wrapper.css";

export const MainWrapper = memo(() => {
  return (
    <div className="global-wrapper">
      <div className="main-wrapper">
        <Searcher />
      </div>
    </div>
  );
});
