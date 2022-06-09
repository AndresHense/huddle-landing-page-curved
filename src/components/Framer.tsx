import { chakra } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const FrButton = chakra(motion.button, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const FrText = chakra(motion.h6, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export { FrButton, FrText };
