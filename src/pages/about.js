import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  IconButton,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { FaPlayCircle, FaEllipsisH } from 'react-icons/fa';
import AboutModal from '../components/about/aboutModal';
import AboutImage from '../components/about/aboutImage';
import Footer from '../components/footer';

import Banner from '../images/about/banner.png';
import Me from '../images/about/me.jpeg';

const FollowButton = {
  baseStyle: {
    borderColor: '#727272',
    color: 'white',
  },
  _hover: {
    borderColor: 'white',
    color: 'white',
  },
};

const TableRow = ({ index, location, event, time }) => (
  <Tr>
    <Td>{index}</Td>
    <Td>{location}</Td>
    <Td>{event}</Td>
    <Td>{time}</Td>
  </Tr>
);

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Box bg="#121212" minH="100vh">
        <Box position="relative" h="44vh">
          <Image src={Banner} w="100vw" h="100%" objectFit="cover" style={{ userSelect: 'none' }} />
          <Box position="absolute" bottom={0} w="100%" display="flex" justifyContent="center" color="white">
            <VStack w="container.lg" align="flex-start" spacing={0} pl={6} pb={6}>
              <Text>Software Engineer</Text>
              <Heading fontSize="6xl">Ansel Zeng</Heading>
              <Text>22,996,658 monthly commits</Text>
            </VStack>
          </Box>
        </Box>
        <Container maxW="container.lg" p={6}>
          <HStack spacing={0} w="fit-content" pb={0.5}>
            <IconButton icon={<FaPlayCircle size={40} />} aria-label="Play" color="#1AD760" variant="link" />
            <Button variant="outline" color="#727272" size="sm" ml={6} mr={4} borderRadius="full" _hover={FollowButton._hover} {...FollowButton.baseStyle}>
              Follow
            </Button>
            <IconButton icon={<FaEllipsisH size={25} />} aria-label="Options" color="#A7A7A7" variant="link" />
          </HStack>
          <Heading my={4} fontSize="xl" color="white">
            Life Timeline
          </Heading>
          <TableContainer maxW="fit-content" color="white">
            <Table variant="unstyled" size="sm" className="hover-table">
              <Tbody>
                <TableRow index={1} location="Amsterdam, Netherlands" event="Born" time="December 4, 2002" />
                <TableRow index={2} location="Beijing, China" event="Childhood Days" time="2003 – 2011" />
                <TableRow index={3} location="Toronto (North York), Canada" event="Elementary School" time="2011 – 2013" />
                <TableRow index={4} location="Markham (Thornhill), Canada" event="Middle School" time="2013 – 2015" />
                <TableRow index={5} location="London, Canada" event="High School & University" time="2015 – Present" />
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
        <Container maxW="container.lg" px={6} mb={6}>
          <Heading mb={4} fontSize="xl" color="white">
            Extracurriculars
          </Heading>
          <AboutModal />
        </Container>
        <Container maxW="container.lg" px={6} mb={6}>
          <Heading mb={4} fontSize="xl" color="white">
            Interests
          </Heading>
          <Text color="white">work in progress...</Text>
        </Container>
        <Container maxW="container.lg" px={6}>
          <Heading mb={4} fontSize="xl" color="white">
            About Me
          </Heading>
          <Box maxW="39rem" maxH="25rem" display="flex">
            <AboutImage imageSource={Me} />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
