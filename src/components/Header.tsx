import { Button, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <HStack w='100%' justify='space-between' p={{ base: 5, lg: 16 }}>
      <Image
        src='images/logo.svg'
        pt={{ base: 0, lg: 1 }}
        w={{ base: 24, lg: 60 }}
      />
      <Button
        bg='white'
        borderWidth={1}
        borderRadius={29}
        borderColor='pink.400'
        color='pink.400'
        fontSize={{ base: 'md', lg: 'lg' }}
        h={{ base: 9, lg: 12 }}
        _hover={{ bg: 'white' }}
        w={{ base: '120px', lg: '160px' }}
      >
        Try it Free
      </Button>
    </HStack>
  );
};

export default Header;
