import React from 'react';
import { Container, Box, VStack, Heading, Text, Image } from '@chakra-ui/react';
import Profile from '../../images/home/pfp.png';

const HomeIntro = () => {
  const spotifyProfileURL = 'https://open.spotify.com/user/21qlylh2xqrwsmdnu4aymmrui?si=156b73d690e24a47';

  return (
    <Container maxW="container.lg" px={6} pt={6}>
      <Box display="flex" p={6} maxW="100%" m="auto" justifyContent="center" alignItems="center">
        <a href={spotifyProfileURL} target="_blank" rel="noopener noreferrer">
          <Box
            bg="#181818"
            p={4}
            borderRadius="md"
            maxW="36"
            cursor="pointer"
            _hover={{ boxShadow: '0 0 24px rgba(217, 167, 190, 0.8)' }}
            userSelect="none"
          >
            <Image src={Profile} borderRadius="full" style={{ boxShadow: '0 0 14px rgba(255, 255, 255, 0.4)' }} />
            <Heading mt={4} mb={2} fontSize="sm" color="white">
              ansel zeng
            </Heading>
            <Text color="#A7A7A7" fontSize="sm">
              Profile
            </Text>
          </Box>
        </a>
        <VStack pl={9} maxW="lg" align="start">
          <Heading>hello!</Heading>
          <Text>
            My name is Ansel Zeng, and I'm currently pursuing a dual degree in computer science and business administration from Western University and Ivey Business School.
          </Text>
          <Text>
            My passion lies in the world of software development, product management, and Artificial Intelligence! I live by the philosophy of driving positive change through technology.
          </Text>
          <Text>
            Beyond my academic pursuits, I enjoy a diverse range of hobbies, including playing hockey, immersing myself in live concerts, exploring record stores, and indulging in Teddy Baldassare's watch reviews.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default HomeIntro;
