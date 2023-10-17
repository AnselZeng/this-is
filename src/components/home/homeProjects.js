import React from 'react';
import { Container, HStack, Box, VStack, Heading, Text, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import W_EXP from '../../images/home/wurk.png';
import '../home/hp.css';

const GRADIENT_TOP_COLOR = '#BFB299';
const GRADIENT_BOTTOM_COLOR = '#121212';

const projectData = [
  {
    index: 1,
    role: 'Software Engineer Intern',
    company: 'Telus',
    timeline: 'May – August 2023',
    time: '3:02',
  },
  {
    index: 2,
    role: 'Software Engineer Intern',
    company: 'Royal Bank of Canada',
    timeline: 'May – August 2022',
    time: '4:26',
  },
  {
    index: 3,
    role: 'UX/UI Designer Intern',
    company: 'Tweebaa',
    timeline: 'May – August 2021',
    time: '1:52',
  },
];

const HomeProjects = () => (
  <Container maxW="container.lg" p={6} mb={6}>
    <Container maxW="100%" bg="#EBEBEB" p={4}>
      <VStack spacing={0}>
        <HStack w="100%" bgGradient={`linear(to bottom, ${GRADIENT_TOP_COLOR}, ${GRADIENT_BOTTOM_COLOR})`} spacing={4} alignItems="end" p={6}>
          <Box maxW="25%" boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.5)">
            <Image src={W_EXP} style={{ userSelect: 'none' }} />
          </Box>
          <VStack spacing={0} alignItems="start">
            <Text color="white" fontSize="xs" fontWeight="light">Public Playlist</Text>
            <Heading color="white" fontSize="6xl" pb={3}>Work Experience</Heading>
            <HStack>
              <Text color="white" fontSize="sm">ansel zeng • 15 likes • 3 internships, <Text as="span" color="#FFFFFFB2">9 min 20 sec</Text></Text>
            </HStack>
          </VStack>
        </HStack>

        <VStack w="100%" bg="#121212" px={6}>
          <TableContainer w="container.lg" pb={6}>
            <Table variant="unstyled" size="md" color="#B3B3B3" className="hover-table">
              <Thead>
                <Tr>
                  <Th isNumeric>#</Th>
                  <Th>Role</Th>
                  <Th>Company</Th>
                  <Th>Timeline</Th>
                  <Th>🕒</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projectData.map((project) => (
                  <TableRow key={project.index} {...project} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </VStack>
    </Container>
  </Container>
);

const TableRow = ({ index, role, company, timeline, time }) => (
  <Tr>
    <Td>{index}</Td>
    <Td>{role}</Td>
    <Td>{company}</Td>
    <Td>{timeline}</Td>
    <Td>{time}</Td>
  </Tr>
);

export default HomeProjects;
