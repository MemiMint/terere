import React from "react";
import { NextPage } from "next";
import { Center } from '@chakra-ui/react';
import { LoginForm } from "../components/LoginForm";
import { LightenDarkenColor } from "../utils/lighten-darken-hex";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Center w="100vw" h="100vh" bg="#F2D7D9" >
        <LoginForm />
      </Center>
    </>
  )
}

export default Home;