import React, { FunctionComponent } from "react";
import { Box, Heading, Checkbox, HStack, Select, FormLabel } from '@chakra-ui/react';
import { Input } from "../Input";
import { Button } from "../Button";
import { useSignUpForm } from "./hook"

export const SignUpForm: FunctionComponent = (): JSX.Element => {
    const { state, onChange, onClick, onChangeSelect } = useSignUpForm();

    return (
        <Box w={500} bg="#9CB4CC" borderRadius="lg" boxShadow="xl" p={8} >
            <Heading textAlign="center" size="lg" color="white">
                Create an account
            </Heading>
            <Input label="Email" name="email" value={state.email} onChange={onChange} />
            <Input label="Username" name="username" value={state.username} onChange={onChange} />
            <Input label="Password" name="password" value={state.password} onChange={onChange} />
            <Box mt={4} >
                <FormLabel color="white">Birth Date</FormLabel>
                <HStack display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                    <Select w={150} variant='filled' placeholder='Select' color="white" bg="#748DA6" fontWeight="semibold" name="day" value={state.date.day} onChange={onChangeSelect} />
                    <Select w={150} variant='filled' placeholder='Select' color="white" bg="#748DA6" fontWeight="semibold" name="month" value={state.date.month} onChange={onChangeSelect} />
                    <Select w={150} variant='filled' placeholder='Select' color="white" bg="#748DA6" fontWeight="semibold" name="year" value={state.date.year} onChange={onChangeSelect} />
                </HStack>
            </Box>
            <Checkbox size='lg' mt={8} color="white" fontSize="medium" fontWeight="semibold" >
                Receive emails and notifications
            </Checkbox>
            <Button text="Continue" bg="#354259" color="white" mt={8} w="100%" onClick={onClick} />
            <Heading size="xs" color="blue.600" mt={2}>Already have an account?</Heading>
        </Box>
    )
}
