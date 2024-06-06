import { ChakraProvider, Box, Button, VStack, Heading, Text, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import theme from "./theme";
import CodeEditor from "./CodeEditor";
import { useState } from "react";

const OnlineCompiler = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    },
    {
      id: 2,
      title: 'Reverse String',
      description: 'Write a function that reverses a string. The input string is given as an array of characters.',
    },
    // Add more problems here
  ];

  const handleBackClick = () => {
    setSelectedProblem(null);
  };

  const navigateToHome = () => {
    // Add navigation logic to go back to the homepage
    // This can be a router navigation or window.location.href, depending on your setup
    window.location.href = "/";
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minH="50vh" px={6} py={8}>
        <VStack spacing={6} align="stretch">
          <Box display="flex" alignItems="center">
            {!selectedProblem && (<IconButton 
              icon={<ArrowBackIcon />} 
              onClick={navigateToHome} 
              aria-label="Back to homepage" 
              variant="outline" 
              mr={4}
            />)}
            {!selectedProblem && (
              <Heading>Select a Problem</Heading>
            )}
          </Box>
          {!selectedProblem ? (
            <Box>
              <VStack align="stretch" mt={4} spacing={2}>
                {problems.map(problem => (
                  <Button key={problem.id} onClick={() => setSelectedProblem(problem)} variant="outline">
                    {problem.title}
                  </Button>
                ))}
              </VStack>
            </Box>
          ) : (
            <>
              
              <Box>
              <Box  display="flex" alignItems="center">
                <IconButton 
                icon={<ArrowBackIcon />} 
                onClick={handleBackClick} 
                aria-label="Back" 
                variant="outline" 
                mr={4} 
                />
                <Heading>{selectedProblem.title}</Heading>
              </Box>
                <Text mt={2}>{selectedProblem.description}</Text>
              </Box>
              <Box mt={4}>
                <CodeEditor />
              </Box>
            </>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default OnlineCompiler;
