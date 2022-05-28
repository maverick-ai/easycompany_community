import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { PageNumberLimit } from "./constants";

const Pagination = (props) => {
  console.log("....");
  console.log(props.currentPage);
  var [start, setStart] = useState(
    Math.floor(
      props.currentPage % PageNumberLimit == 0
        ? (props.currentPage / PageNumberLimit) * PageNumberLimit +
            1 -
            PageNumberLimit
        : Math.floor(props.currentPage / PageNumberLimit) * PageNumberLimit + 1
    )
  );
  var [pageLinks, setPageLinks] = useState([]);
  var [currentPage, setCurrentPage] = useState(Number(props.currentPage));

  const prevPages = () => {
    const currentStart = start;
    setStart(currentStart - PageNumberLimit);
  };
  const nextPages = () => {
    const currentStart = start;
    setStart(currentStart + PageNumberLimit);
  };
  const changePage = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    var pageNumber = [];
    console.log(start);
    if (start > 1) {
      console.log("prev pages");
      pageNumber.push(<a onClick={prevPages}>{"<<"}</a>);
    }
    if (currentPage > 1) {
      console.log("prev");
      pageNumber.push(
        <Link href={props.baseURL + "page=" + (currentPage - 1)}>
          <a
            className="controllerL"
            style={{ paddingRight: "20px" }}
            onClick={() => changePage(currentPage - 1)}
          >
            {"<"}
          </a>
        </Link>
      );
    }

    for (var i = 0; i < PageNumberLimit && start + i <= props.count; i++) {
      console.log("page" + (start + i));
      if (start + i == currentPage)
        pageNumber.push(
          <Link href={props.baseURL + "page=" + (start + i)}>
            <a className="active" onClick={() => changePage(start + i)}>
              {start + i}
            </a>
          </Link>
        );
      else
        pageNumber.push(
          <Link href={props.baseURL + "page=" + (start + i)}>
            <a onClick={() => changePage(start + i)}>{start + i}</a>
          </Link>
        );
    }
    if (currentPage < props.count) {
      console.log(currentPage);
      pageNumber.push(
        <Link href={props.baseURL + "page=" + (currentPage + 1)}>
          <a
            className="controllerR"
            onClick={() => changePage(currentPage + 1)}
          >
            {">"}
          </a>
        </Link>
      );
    }
    if (start + PageNumberLimit <= props.count) {
      console.log("next pages");
      pageNumber.push(<a onClick={nextPages}>{">>"}</a>);
    }
    setPageLinks(pageNumber);
  }, [start, currentPage]);

  return (
    <div className="pagination-container">
      <div className="pagination">
        {pageLinks.map((url) => {
          return url;
        })}
      </div>
    </div>
  );
};

export default Pagination;
