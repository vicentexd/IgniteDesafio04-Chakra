import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      height="21rem"
      backgroundImage="url('/images/home_banner.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        maxWidth="1160px"
        width="100%"
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Box color="white">
          <Heading fontWeight="bold" mb="4" lineHeight="3.375rem">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          mb="-32"
          src="/images/airplane.svg"
          alt="Avião voando entre as nuvens"
        />
      </Flex>
    </Flex>
  );
}
