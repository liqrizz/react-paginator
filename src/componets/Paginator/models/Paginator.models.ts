import {IBaseReactProps} from "../../../common/models/component.model";

export interface IPaginatorProps extends IBaseReactProps, IPaginatorState {

}

export interface IPaginatorState {
    pageCount: number;
    currentPage: number;
    pagesPerPage: number;
}
