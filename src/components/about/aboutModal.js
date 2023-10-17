import React, { useState } from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import csa from '../../images/about/csa.png';
import hw from '../../images/about/hw.png';
import ips from '../../images/about/ips.png';
import itc from '../../images/about/itc.png';
import wfn from '../../images/about/wfn.png';

const modalData = [
  {
    imageSrc: hw,
    heading: 'Hack Western',
    text: 'hackathon! 💜',
  },
  {
    imageSrc: ips,
    heading: 'IPS',
    text: 'pm bootcamp',
  },
  {
    imageSrc: itc,
    heading: 'ITC',
    text: 'ivey tech club',
  },
  {
    imageSrc: wfn,
    heading: 'WFN',
    text: 'founders fam',
  },
  {
    imageSrc: csa,
    heading: 'CSA',
    text: 'chinese assoc.',
  },
];

const AboutModal = () => {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const openModal = (index) => {
    setSelectedModalIndex(index);
  };

  const closeModal = () => {
    setSelectedModalIndex(null);
  };

  return (
    <HStack spacing={4}>
      {modalData.map(({ imageSrc, heading, text }, index) => (
        <Box
          key={index}
          bg="#181818"
          p={4}
          borderRadius="md"
          maxW="36"
          cursor="pointer"
          onClick={() => openModal(index)}
          _hover={{ bg: '#282828' }}
        >
          <Image src={imageSrc} w="100%" borderRadius="md" style={{ userSelect: 'none' }} />
          <Heading mt={4} mb={2} fontSize="sm" color="white">
            {heading}
          </Heading>
          <Text color="#A7A7A7" fontSize="sm">
            {text}
          </Text>
        </Box>
      ))}

      {selectedModalIndex !== null && (
        <Modal isOpen={true} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalData[selectedModalIndex].heading}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={modalData[selectedModalIndex].imageSrc} w="100%" style={{ userSelect: 'none' }} />
              <Text mt={2}>{modalData[selectedModalIndex].text}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </HStack>
  );
};

export default AboutModal;
