import React from 'react';
import { Container, Box, Text, Link, HStack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaYoutube, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container maxW="100vw" bg="#121212">
      <Container maxW="container.lg" p={6}>
        <Box display="flex" flexDir="column" w="fit-content" m="auto" p={6}>
          <HStack spacing={4} color="white">
            <Link href="https://www.linkedin.com/in/anselzeng/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </Link>
            <Link href="https://github.com/AnselZeng" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </Link>
            <Link href="https://www.youtube.com/c/AnselZeng" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={32} />
            </Link>
            <Link href="https://anselzeng.medium.com/" target="_blank" rel="noopener noreferrer">
              <FaMedium size={32} />
            </Link>
          </HStack>
          <Text pt={2} textAlign="center" color="white">
            Made with ❤️ by me :D
          </Text>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
