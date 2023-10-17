import React, { useState } from 'react';
import { Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';

const AboutImage = ({ imageSource }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Image
        src={imageSource}
        objectFit="cover"
        borderRadius="md"
        onClick={openModal}
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0} borderRadius="md">
            <Image src={imageSource} objectFit="cover" borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutImage;
