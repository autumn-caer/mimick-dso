import { Flex, Box, BoxProps, Text } from "@chakra-ui/react";
import styles from "./arrow_right_icon.module.css";

export interface ArrowRightIconPorps {
  boxProps?: BoxProps;
  displayText: String;
}

export const ArrowRightIconWithChakra: React.FC<ArrowRightIconPorps> = ({
  boxProps,
  displayText,
}) => {
  return (
    <Flex justifyContent="center" role="group">
      <Box
        mx="2"
        mt="2px"
        {...boxProps}
        display="inline-block"
        position="relative"
        width="21px"
        height="21px"
        border="solid 2px #000"
        borderRadius="50%"
        boxShadow="0 3px 10px rgb(0 0 0 / 16%)"
        _groupHover={{
          _after: {
            transform: "translate(-50%, -50%) scale(1.1, 1.1)",
          },
          _before: {
            borderColor: "#fff",
          },
        }}
        _before={{
          content: `""`,
          position: "absolute",
          zIndex: "10",
          top: "50%",
          left: "45%",
          width: "5px",
          height: "5px",
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: "1px 0 0 1px",
          transform: "translate(-50%, -50%) rotate(135deg)",
          transition: "border-color ease 0.1s",
        }}
        _after={{
          content: `""`,
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "21px",
          height: "21px",
          backgroundColor: "#000",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) scale(0, 0)",
          transition: "transform ease 0.4s",
        }}
      />
      <Text display="inline-block">{displayText}</Text>
    </Flex>
  );
};
