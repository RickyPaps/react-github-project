import React from "react";
import "../styles/pagination.scss";

enum PageNavigation {
  FORWARD = "ADD",
  BACKWARD = "SUBTRACT",
}

interface PaginationProps {
  startCursor: any;
  endCursor: any;
  nextPage: any;
  hasNext: any;
  hasPrevious: any;
}

export const Pagination: React.FC<PaginationProps> = ({
  startCursor,
  endCursor,
  nextPage,
  hasNext,
  hasPrevious,
}) => {
  const handlePagination = (process: string) => {
    const newPages = {
      after: null,
      before: null,
    };
    if (process === PageNavigation.FORWARD) {
      newPages.before = null;
      newPages.after = endCursor;
      nextPage({ currentCursors: newPages });
    }
    if (process === PageNavigation.BACKWARD) {
      newPages.before = startCursor;
      newPages.after = null;
      nextPage({ currentCursors: newPages });
    }
  };

  return (
    <div id="arrow_2" className="arrow-wrapper">
      {hasPrevious && (
        <div
          className="arrow arrow--left"
          onClick={() => handlePagination("SUBTRACT")}
        >
          <span>Prev</span>
        </div>
      )}
      {hasNext && (
        <div
          className="arrow arrow--right"
          onClick={() => handlePagination("ADD")}
        >
          <span>Next</span>
        </div>
      )}
    </div>
  );
};
