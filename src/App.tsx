import "./App.css";
import React, {useState} from "react";
import { createContext } from 'react';
import {IPaginatorState} from "./componets/Paginator/models/Paginator.models";
import Paginator from "./componets/Paginator/Paginator";
export const setPageStateContext = createContext((value: React.SetStateAction<IPaginatorState>) => {});

export default function App() {
    const [pageState, setPageState] = useState<IPaginatorState>({
        currentPage: 1,
        pageCount: 12,
        pagesPerPage: 5
    });

    return (
        <div className="App">
            <setPageStateContext.Provider value={setPageState}>
                <Paginator
                    currentPage={pageState.currentPage}
                    pagesPerPage={pageState.pagesPerPage}
                    pageCount={pageState.pageCount}
                />
            </setPageStateContext.Provider>
        </div>
    );
}
