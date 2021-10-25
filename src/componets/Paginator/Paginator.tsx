import React, {useContext, useEffect, useState} from "react";
import {setPageStateContext} from "../../App";
import Button from "../Button/Button";
import {IPaginatorProps} from "./models/Paginator.models";
import {genPages} from "./Paginator.utils";
import CSS_CLASSES from './Paginator.module.css';

console.log(CSS_CLASSES);

const Paginator = ({pageCount, currentPage, pagesPerPage}: IPaginatorProps) => {
    const [pages, setPages] = useState<number[]>([]);
    const setPageState = useContext(setPageStateContext);

    useEffect(() => {
        setPages(
            genPages({pagesPerPage, pageCount, currentPage}, pages)
        );
    }, [currentPage, pagesPerPage, pageCount, pages]);

    function activeClassName(pageNumber: number): string {
        return pageNumber === currentPage ? 'active' : '';
    }

    function genPageItems(arr: number[]): JSX.Element[] {
        return arr.map((pageNumber, i) => (
            <span key={i}
                  className={activeClassName(pageNumber) + ' page-number'}
                  onClick={() => updateCurrentPage(pageNumber)}>
                {pageNumber}
            </span>
        ));
    }

    function next(): void {
        if (currentPage >= pageCount) {
            return;
        }
        updateCurrentPage(currentPage + 1);
    }

    function prev(): void {
        if (currentPage === 1) {
            return;
        }
        updateCurrentPage(currentPage - 1);
    }

    function updateCurrentPage(value: number): void {
        setPageState({
            pageCount,
            pagesPerPage,
            currentPage: value
        });
    }

    return (
        <div className={CSS_CLASSES.paginator}>
            <div className={CSS_CLASSES.left}>
                <Button onClick={(e) => prev()}>
                    {"<"}
                </Button>
            </div>

            {genPageItems(pages)}

            <div className={CSS_CLASSES.right}>
                <Button onClick={(e) => next()}>
                    {">"}
                </Button>
            </div>
        </div>
    );
};

export default Paginator;
