import React from "react";
import { NextPage } from "next";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Input } from "../Input";
import { Button } from "../Button";

export const LoginForm = (): JSX.Element => {
  return (
    <>
          <Box w="container.md" height={400} bg="#9CB4CC" borderRadius="lg" boxShadow="xl" >
              <Grid h="100%" templateColumns="repeat(2, 1fr)" p={4}>
                  <GridItem w='100%' h="100%">
                      <Heading textAlign="center" size="lg" color="white">
                          Hi, again!
                      </Heading>
                      <Text textAlign="center" size="xs" color="white" mt={1} >
                          Glad to see you again!
                      </Text>
                      <Input label="Email or Phonenumber" />
                      <Input label="Password" />
                      <Heading size="xs" color="blue.600" mt={2}>Forgot Password?</Heading>
                      <Button text="Log In" bg="#354259" color="white" mt={8} w="100%">Log In</Button>
                      <Heading size="xs" color="white" mt={2}>Need an account? <Text as="span" color="blue.600">Sign up</Text></Heading>
                  </GridItem>
                  <GridItem w='100%' h='100%' display="flex" alignItems="center" justifyContent="center">
                      <img src="/logo.svg" />
                  </GridItem>
              </Grid>
          </Box>
    </>
  )
}