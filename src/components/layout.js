import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box w={'100%'} color={'black'} minH={'100vh'} display={'flex'} justifyContent={'center'}>
      <Container bg={`rgba(255, 255, 255, 0.96)`} maxW={'100%'} color={'black'} p={'4'} pos={'fixed'} zIndex={2}>
        <Flex alignItems={'center'} gap={'4'} maxW={'container.lg'} m={'auto'}>
          <Link to='/'>
            <Heading>
              AZ
            </Heading>
          </Link>
          <Spacer />
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <a href='/Ansel_Zeng_Resume.pdf' target='_blank' rel='noopener noreferrer'>
            <b>Resume</b>
          </a>
        </Flex>
      </Container>
      <main>
        {children}
      </main>
    </Box>
  );
};

export default Layout;
