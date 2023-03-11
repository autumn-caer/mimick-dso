import { IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { TabPanelsPorps } from "../../interfaces";

import { ArrowRightIcon } from "./arrow_right_icon";
import { ArrowRightIconWithChakra } from "./arrow_right_icon_with_chakra";

export const TabPanels: React.FC<TabPanelsPorps> = ({
  tabPanels,
  flexBasis,
}) => {
  const DEFAULT_FLEX_BASIS = flexBasis
    ? flexBasis
    : ["100%", "48%", "48%", "30.83333%"];
  return (
    <Wrap
      w={{ base: "100%", md: "100%", lg: "100%" }}
      direction={{ base: "row", md: "row", lg: "row" }}
    >
      {tabPanels.map((footer_link) => {
        return (
          <WrapItem
            position="relative"
            flexBasis={DEFAULT_FLEX_BASIS}
            alignItems="center"
            justifyContent="start"
            h="40px"
            bg="red.200"
            as="a"
            fontSize="14px"
            href="#"
            cursor="pointer"
            lineHeight="1.8"
            _hover={{
              backgroundColor: "red.300",
              transition: "0.5s", //ホバーしたら出てくる
            }}
          >
            <ArrowRightIconWithChakra displayText={footer_link.name} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
