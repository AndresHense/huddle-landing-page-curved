import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Section3 = () => {
  return (
    <Stack
      w='100%'
      direction={{ base: 'column', lg: 'row' }}
      px={{ base: 8, lg: 16, xl: 32, '2xl': 44 }}
      py={16}
      spacing={{ base: 20, lg: 'inherit' }}
    >
      <Image
        as={motion.img}
        transition='1s'
        initial={{ x: -45, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        objectFit='contain'
        h={{
          base: '240px',
          md: '320px',
          lg: '380px',
          xl: '480px',
          '2xl': '560px',
        }}
        pr={{ base: 0, lg: 8, xl: 12 }}
        src='images/illustration-flowing-conversation.svg'
      />
      <VStack
        align='start'
        justify='center'
        pl={{ base: 0, lg: 8, xl: 14 }}
        alignItems={{ base: 'center', lg: 'inherit' }}
        as={motion.div}
        spacing={{ base: 4, lg: 'inherit' }}
        transition='1s'
        initial={{ y: 45, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Text textStyle='h3'>Flowing Conversations</Text>
        <Text textStyle='h5' w={{ base: '100%', md: '60%', lg: '78%' }}>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </Text>
      </VStack>
    </Stack>
  );
};

export default Section3;
