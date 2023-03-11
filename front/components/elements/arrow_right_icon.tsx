import { Flex, Box, BoxProps, Text } from "@chakra-ui/react";
import styles from "./arrow_right_icon.module.css";

export interface ArrowRightIconPorps {
  boxProps?: BoxProps;
  displayText: String;
}

export const ArrowRightIcon: React.FC<ArrowRightIconPorps> = ({
  boxProps,
  displayText,
}) => {
  return (
    <Flex justifyContent="center">
      <Box
        mx="2"
        mt="2px"
        {...boxProps}
        className={styles.arrowRight}
        display="inline-block"
      />
      <Text display="inline-block">{displayText}</Text>
    </Flex>
  );
};
