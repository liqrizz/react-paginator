import React from "react";
import {IBaseReactProps} from "../../../common/models/component.model";

export interface IButtonProps extends IBaseReactProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}
