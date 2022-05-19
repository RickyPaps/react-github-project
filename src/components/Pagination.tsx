import React, { useEffect, useState } from "react";
import "../styles/pagination.scss";

enum PageNavigation {
  Forward = "ADD",
  BACKWARD = "SUBTRACT",
}

interface PaginationProps {
  startCursor: any;
  endCursor: any;
  nextPage: any;
}

export const Pagination: React.FC<PaginationProps> = ({
  startCursor,
  endCursor,
  nextPage,
}) => {
  const handlePagination = (process: string) => {
    const newPages = {
      after: null,
      before: null,
    };
    if (process === PageNavigation.Forward) {
      newPages.before = null;
      newPages.after = endCursor;
      nextPage({ currentCursors: newPages });
    } else {
      newPages.before = startCursor;
      newPages.after = null;
      nextPage({ currentCursors: newPages });
    }
  };

  return (
    <div id="arrow_2" className="arrow-wrapper">
      <div
        className="arrow arrow--left"
        onClick={() => handlePagination("SUBTRACT")}
      >
        <span>Prev</span>
      </div>
      <div
        className="arrow arrow--right"
        onClick={() => handlePagination("ADD")}
      >
        <span>Next</span>
      </div>
    </div>
  );
};
