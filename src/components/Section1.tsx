import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Section1 = () => {
  return (
    <VStack spacing={0} w='100%'>
      <Image
        src='images/screen-mockups.svg'
        as={motion.img}
        initial={{ opacity: 0 }}
        transition='1s'
        whileInView={{ opacity: [0, 0, 1] }}
        viewport={{ once: true }}
        px={{ base: 5, lg: 0 }}
      />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        pt={32}
        w='100%'
        align='center'
        spacing={{ base: 24, lg: 24, xl: 48 }}
        justify='center'
      >
        <VStack
          px={{ base: 10, xl: 20 }}
          as={motion.div}
          transition='1s'
          initial={{ y: -45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          align={{ base: 'start', lg: 'inherit' }}
        >
          <Image
            src='images/icon-communities.svg'
            alignSelf='flex-start'
            h={{ base: 8, lg: 'inherit' }}
          />
          <Text textStyle='h1'>1.4k+</Text>
          <Text fontSize={{ base: 'xl', lg: '3xl' }} color='gray.500'>
            Communities Formed
          </Text>
        </VStack>
        <VStack
          px={{ base: 10, xl: 20 }}
          as={motion.div}
          transition='1s'
          initial={{ y: -45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          align={{ base: 'start', lg: 'inherit' }}
        >
          <Image
            src='images/icon-messages.svg'
            alignSelf='flex-start'
            h={{ base: 8, lg: 'inherit' }}
          />
          <Text textStyle='h1'>2.7m+</Text>
          <Text fontSize={{ base: 'xl', lg: '3xl' }} color='gray.500'>
            Messages Sent
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Section1;
