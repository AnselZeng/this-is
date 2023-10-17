import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Box, Image, Text } from '@chakra-ui/react';
import HomeProjects from '../components/home/homeProjects';
import HomeIntro from '../components/home/homeIntro';
import Footer from '../components/footer';
import Me from '../images/home/me.png';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Box minW="100vw" h="40vh" textAlign="center">
        <Text pt="13vh" maxW="container.lg" m="auto" fontSize="4xl" fontWeight="bold" letterSpacing="widest" lineHeight="none">
          THIS IS
        </Text>
        <Text maxW="container.lg" m="auto" fontSize="7xl" fontWeight="bold" lineHeight="shorter">
          Ansel Zeng
        </Text>
      </Box>
      <Box
        style={{
          background: 'linear-gradient(to bottom right, #675B40, #E6DABF)',
        }}
        h="60vh"
        position="relative"
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            minHeight: '96vh',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Image src={Me} h="100%" style={{ userSelect: 'none' }} />
        </div>
      </Box>
      <HomeIntro />
      <HomeProjects />
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
