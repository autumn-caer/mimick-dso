import { IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TabPanelsPorps } from "../../interfaces";

export const TabPanels: React.FC<TabPanelsPorps> = ({
  tabPanels,
  flexBasis,
}) => {
  const DEFAULT_FLEX_BASIS = flexBasis
    ? flexBasis
    : ["100%", "48%", "48%", "30.83333%"];
  return (
    <Wrap maxW="700" direction={{ base: "row", md: "row", lg: "row" }}>
      {tabPanels.map((footer_link) => {
        return (
          <WrapItem
            position="relative"
            flexBasis={DEFAULT_FLEX_BASIS}
            alignItems="center"
            justifyContent="start"
            h="80px"
            bg="red.200"
            as="a"
            href="#"
            cursor="pointer"
            _hover={{
              backgroundColor: "red.300",
              transition: "0.5s", //ホバーしたら出てくる
            }}
          >
            <IconButton
              variant="link"
              aria-label="LinkedIn"
              icon={<ArrowForwardIcon fontSize="1.25rem" />}
            />
            {footer_link.name}
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
