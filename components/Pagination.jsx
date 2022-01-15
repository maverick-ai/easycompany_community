import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react"
import {PageNumberLimit} from "./constants"

const Pagination = (props) => {
    var [start, setStart] = useState(Math.floor(props.currentPage%PageNumberLimit == 0? ((props.currentPage/PageNumberLimit)*PageNumberLimit + 1 - PageNumberLimit):Math.floor(props.currentPage/PageNumberLimit)*PageNumberLimit + 1));
    var [pageLinks, setPageLinks] = useState([]);
    var [currentPage, setCurrentPage] = useState(Number(props.currentPage))

    const prevPages = () => {
        const currentStart = start;
        setStart(currentStart - PageNumberLimit);
    }
    const nextPages = () => {
        const currentStart = start;
        setStart(currentStart + PageNumberLimit);
    }
    const changePage = (newPage) => {
        console.log(newPage);
        setCurrentPage(newPage);
    }

    useEffect(()=> {
        var pageNumber = []
        console.log(start)
        if (start > 1) {
            console.log("prev pages");
            pageNumber.push(<a onClick={prevPages}>{"<<"}</a>)
        }
        if (currentPage>1) {
            console.log("prev");
            pageNumber.push(<Link href={props.baseURL + "page=" + (currentPage - 1)}><a onClick={() => changePage(currentPage - 1)}>{"<"}</a></Link>)
        }

        for (var i=0; i<PageNumberLimit && start+i<=props.count; i++){
            console.log("page" + (start+i));
            pageNumber.push(<Link href={props.baseURL + "page=" + (start + i)}><a onClick={() => changePage(start + i)}>{start + i}</a></Link>)
        }
        if (currentPage<props.count) {
            console.log(currentPage);
            pageNumber.push(<Link href={props.baseURL + "page=" + (currentPage + 1)}><a onClick={() => changePage(currentPage + 1)}>{">"}</a></Link>)
        }
        if (start + PageNumberLimit <= props.count) {
            console.log("next pages");
            pageNumber.push(<a onClick={nextPages}>{">>"}</a>)
        }
        setPageLinks(pageNumber);
    }, [start, currentPage])

    return (
        <>
        <div className="pagination">
        {pageLinks.map((url) => {
            return url
        })}
        </div>
        <style jsx>
            {`
            .pagination a:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              }
              
            .pagination a:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            }
            `}
        </style>
        </>
    )
}

export default Pagination