import { Flex, Image, Text } from "@chakra-ui/react";

interface TipProps {
  url: string;
  text: string;
}

export function Tip({ url, text }: TipProps) {
  return (
    <Flex flex={1} flexDirection="column" align="center">
      <Image src={url} mb="4" w="85px" h="85px" />
      <Text fontWeight="medium" fontSize="20" textTransform="lowercase">
        {text}
      </Text>
    </Flex>
  );
}
