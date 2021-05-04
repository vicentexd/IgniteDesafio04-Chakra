import { Flex } from "@chakra-ui/react";
import { Tip } from "./Tip";

export function TravelTips() {
  return (
    <Flex
      as="section"
      mt="7.125rem"
      flex="1"
      justify="space-between"
      align="baseline"
    >
      <Tip text="vida noturna" url="/images/cocktail.svg" />
      <Tip text="praia" url="/images/surf.svg" />
      <Tip text="moderno" url="/images/building.svg" />
      <Tip text="clássico" url="/images/museum.svg" />
      <Tip text="e mais.." url="/images/earth.svg" />
    </Flex>
  );
}
