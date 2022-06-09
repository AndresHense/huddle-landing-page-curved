import { Box, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FrButton } from './Framer';

const Section5 = () => {
  return (
    <VStack
      w='100%'
      align='center'
      py={{ base: 32, lg: 56 }}
      spacing={{ base: 8, lg: 14 }}
    >
      <Box>
        <Text
          textStyle='h3'
          as={motion.h3}
          alignSelf='center'
          w='100%'
          px={{ base: 6, lg: 'inherit' }}
          transition='1s'
          initial={{ y: -45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Ready to Build Your Community?
        </Text>
      </Box>
      <FrButton
        fontSize={{ base: 'xl', lg: '2xl' }}
        h={{ base: '45px', lg: '85px' }}
        w={{ base: '230px', lg: '520px' }}
        borderRadius={79}
        //@ts-ignore
        transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        _hover={{ bg: 'pink.300' }}
        bg='pink.400'
        color='white'
        boxShadow='1px 5px 17px #dedede'
      >
        Get Started For Free
      </FrButton>
    </VStack>
  );
};

export default Section5;
