import React, { useState } from "react";
import { IState } from "./IState";
import { IHook } from "./IHook";

export const useSignUpForm = (): IHook => {
    const [state, setState] = useState<IState>({
        email: "",
        username: "",
        password: "",
        date: {
            day: "",
            month: "",
            year: ""
        },
        isSendEmailAndNotification: false
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            date: {
                ...prevState.date,
                [name]: value
            }
        }));
    }

    const onClick = () => {
        alert("you clicked, me!");
    }

    return { state, onChange, onClick, onChangeSelect };
}