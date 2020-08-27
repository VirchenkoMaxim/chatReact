import React, { FunctionComponent } from 'react'
import './Paginator.scss'
import Pagination from '@material-ui/lab/Pagination';

type Props = {
    totalUsersCount: number,
    pageSize: number,
    portionNumber: number,
    onPortionPrev: () => void,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    onPortionNext: () => void,
}

export const Paginator: FunctionComponent<Props> = ({ totalUsersCount, pageSize, portionNumber, onPortionPrev, currentPage,
    onPageChanged, onPortionNext }) => {
    // const portionSize = 10;
    let pageCount: number = Math.ceil(totalUsersCount / pageSize);
    // let sectionCount: number = Math.ceil(pageCount / portionSize)
    // let portionLeft: number = (portionNumber - 1) * portionSize + 1;
    // let portionRight: number = portionLeft + portionSize;
    // let pages: Array<number> = [];
    // for (let i = 1; i <= pageCount; i++) {
    // pages.push(i);
    // }
    return (
        <div className="paginator" >
            <Pagination count={pageCount} page={currentPage} onChange={(e, p) => onPageChanged(p)} variant="outlined" shape="rounded" />
        </div>
        //     <button className="paginator__prev"
        //         onClick={onPortionPrev}
        //         disabled={portionNumber <= 1 ? true : false}
        //     >prev</button>
        //     <div className="paginator__pages">
        //         {pages
        //             .filter((item: number) => item >= portionLeft && item < portionRight)
        //             .map((item: number) => {
        //                 return (<span onClick={() => onPageChanged(item)}
        //                     className={currentPage === item ? "paginator__pages_count" : "paginator__pages_items"}>{item}</span>)
        //             })}
        //     </div>
        //     <button className="paginator__next"
        //         onClick={onPortionNext}
        //         disabled={portionNumber >= sectionCount ? true : false}
        //     >next</button>
        // </div >
    )
}
