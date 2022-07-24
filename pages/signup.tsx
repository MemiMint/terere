import React from "react";
import { NextPage } from "next";
import { Center } from '@chakra-ui/react';
import { SignUpForm } from "../components/SignUpForm"

const SignUp: NextPage = (): JSX.Element => {
  return (
    <>
      <Center w="100vw" h="100vh" bg="#F2D7D9" >
        <SignUpForm />
      </Center>
    </>
  )
}

export default SignUp;