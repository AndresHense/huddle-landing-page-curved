import {
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Section4 = () => {
  const bgTop = useBreakpointValue({
    base: 'images/bg-section-top-mobile-2.svg',
    lg: 'images/bg-section-top-desktop-2.svg',
  });

  const bgBottom = useBreakpointValue({
    base: 'images/bg-section-bottom-mobile-2.svg',
    lg: 'images/bg-section-bottom-desktop-2.svg',
  });
  return (
    <VStack spacing={0} w='100%'>
      <Image src={bgTop} w='100%' />
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        bg='#f6fbff'
        px={{ base: 8, lg: 16, xl: 32, '2xl': 44 }}
        spacing={{ base: 20, lg: 'inherit' }}
        py={16}
      >
        <VStack
          align={{ base: 'center', lg: 'start' }}
          justify='center'
          pr={{ base: 0, lg: 8, xl: 14 }}
          spacing={{ base: 4, lg: 'inherit' }}
          as={motion.div}
          transition='1s'
          initial={{ y: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Text textStyle='h3'>Your Users</Text>
          <Text
            textStyle='h5'
            textAlign={{ base: 'center', lg: 'inherit' }}
            w={{ base: '100%', md: '60%', lg: '78%' }}
          >
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </Text>
        </VStack>
        <Image
          as={motion.img}
          transition='1s'
          initial={{ x: 25, opacity: 0 }}
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
          src='images/illustration-your-users.svg'
        />
      </Stack>
      <Image src={bgBottom} w='100%' />
    </VStack>
  );
};

export default Section4;
