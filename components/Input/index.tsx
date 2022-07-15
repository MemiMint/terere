import React, { FunctionComponent } from "react";
import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const Input: FunctionComponent<IProps> = (props) => {
    return (
        <FormControl mt={5} >
            <FormLabel color="white">{props.label}</FormLabel>
            <ChakraInput w="100%" variant="filled" fontWeight="medium" color="white" bg="#748DA6" _hover={{}} _focusVisible={{}}  { ...props } />
        </FormControl>
    )
}
