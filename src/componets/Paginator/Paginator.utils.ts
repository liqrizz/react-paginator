import {IPaginatorProps} from "./models/Paginator.models";

export function genPages({pagesPerPage, currentPage, pageCount}: IPaginatorProps, prevPages: number[]): number[] {
    const median = Math.floor(pagesPerPage / 2);
    let start = currentPage - median;
    const end = currentPage + median + (pagesPerPage % 2 === 0 ? - 1 : 0);
    if (end > pageCount || start < 1) {
        start = end > pageCount ? pageCount - pagesPerPage + 1 : 1;
    }

    if (prevPages[0] !== start && prevPages[-1] !== pageCount) {
        return Array.from(
            {length: pagesPerPage},
            (_, i) => i + start
        );
    }

    return prevPages;
}
