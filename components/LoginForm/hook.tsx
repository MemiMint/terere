import React, { useState } from "react";
import { IState } from "./IState";
import { IHook } from "./IHook";

export const useLoginForm = (): IHook => {
    const [state, setState] = useState<IState>({
        username: "",
        password: ""
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    } 

    const onClick = (): void => {
        alert(`username: ${state.username} password: ${state.password}`);
    }

    return { state, onChange, onClick };
}