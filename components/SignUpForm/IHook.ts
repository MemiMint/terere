import React from "react";
import { IState } from "./IState";

export interface IHook {
    state: IState;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onClick: () => void;
}