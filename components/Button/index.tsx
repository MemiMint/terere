import React, { FunctionComponent } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { LightenDarkenColor } from "../../utils/lighten-darken-hex";
import { IProps } from "./IProps"

export const Button: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <ChakraButton _active={{ backgroundColor: LightenDarkenColor(props.bg as string, -30) }} _hover={{ backgroundColor: LightenDarkenColor(props.bg as string, -20) }} borderRadius={4} { ...props } >
            { props.text }
        </ChakraButton>
    )
}