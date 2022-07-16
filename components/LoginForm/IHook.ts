import React from "react";
import { IState } from "./IState";

export interface IHook {
    state: IState;
    onChange: (event: React.ChangeEvent<HTMLInputElement>);
    onClick: () => void;
}