import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Avatar,
  VStack,
  IconButton,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

import { Header } from "../components/Header";

export default function Home() {
  const handleInfo = () => {
    console.log("oi");
  };

  return (
    <Box overflowX="hidden">
      <Header allowGoBack />

      <Flex
        w="100%"
        height="50vh"
        justify="center"
        backgroundImage="url('/images/europe_banner.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex w="100%" maxWidth="1160px" p="16" align="flex-end">
          <Text color="white" fontSize="4xl" fontWeight="bold" mb="4">
            Europa
          </Text>
        </Flex>
      </Flex>

      <Flex w="100%" align="center" justify="center" paddingY="16">
        <Flex
          w="100%"
          maxWidth="1160px"
          align="center"
          justify="space-between"
          flexDirection="row"
        >
          <Box p="4" flex={1}>
            <Text color="gray.600" fontSize="lg" fontWeight="medium">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Flex
            align="center"
            justify="space-between"
            flexDirection="row"
            flex={1}
            p={16}
          >
            <Box flexDirection="column" align="center">
              <Text color="yellow.500" fontSize="4xl" fontWeight="bold">
                50
              </Text>
              <Text fontWeight="medium" fontSize="20" textTransform="lowercase">
                paises
              </Text>
            </Box>
            <Box flexDirection="column" align="center">
              <Text color="yellow.500" fontSize="4xl" fontWeight="bold">
                60
              </Text>
              <Text fontWeight="medium" fontSize="20" textTransform="lowercase">
                línguas
              </Text>
            </Box>
            <Box flexDirection="column" align="center">
              <Text color="yellow.500" fontSize="4xl" fontWeight="bold">
                27
              </Text>
              <Text fontWeight="medium" fontSize="20" textTransform="lowercase">
                cidades +100
                <Tooltip
                  label="Número de cidades entre as 100 mais visitadas do mundo"
                  fontSize="md"
                >
                  <span>
                    <Icon as={FaInfoCircle} color="gray.500" ml="4" />
                  </span>
                </Tooltip>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex w="100%" align="center" justify="center">
        <Flex w="100%" maxWidth="1160px" p="4">
          <Text color="gray.600" fontSize="4xl" fontWeight="bold">
            Cidade +100
          </Text>
        </Flex>
      </Flex>

      <Flex w="100%" align="center" justify="center">
        <Box w="100%" maxWidth="1160px" p="4">
          <SimpleGrid columns={4} spacing={10}>
            <Box height="280px" width="256px" flexDirection="column">
              <Image
                width="100%"
                height="50%"
                objectFit="cover"
                src="/images/london.jpg"
                alt="London"
                borderTopRadius="8"
              />
              <Flex
                h="50%"
                w="100%"
                borderColor="yellow.500"
                borderWidth="thin"
                borderBottomRadius="8"
                flexDirection="row"
                align="center"
                justifyContent="space-around"
              >
                <Box p="4">
                  <VStack spacing="4" align="flex-start">
                    <Text fontWeight="bold" fontSize="lg">
                      Londres
                    </Text>
                    <Text>Reino Unido</Text>
                  </VStack>
                </Box>
                <Box p="4">
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" />
                </Box>
              </Flex>
            </Box>

            <Box height="280px" width="256px" flexDirection="column">
              <Image
                width="100%"
                height="50%"
                objectFit="cover"
                src="/images/paris.jpg"
                alt="Paris"
                borderTopRadius="8"
              />
              <Flex
                h="50%"
                w="100%"
                borderColor="yellow.500"
                borderWidth="thin"
                borderBottomRadius="8"
                flexDirection="row"
                align="center"
                justifyContent="space-around"
              >
                <Box p="4">
                  <VStack spacing="4" align="flex-start">
                    <Text fontWeight="bold" fontSize="lg">
                      Paris
                    </Text>
                    <Text>França</Text>
                  </VStack>
                </Box>
                <Box p="4">
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" />
                </Box>
              </Flex>
            </Box>

            <Box height="280px" width="256px" flexDirection="column">
              <Image
                width="100%"
                height="50%"
                objectFit="cover"
                src="/images/roma.jpg"
                alt="Paris"
                borderTopRadius="8"
              />
              <Flex
                h="50%"
                w="100%"
                borderColor="yellow.500"
                borderWidth="thin"
                borderBottomRadius="8"
                flexDirection="row"
                align="center"
                justifyContent="space-around"
              >
                <Box p="4">
                  <VStack spacing="4" align="flex-start">
                    <Text fontWeight="bold" fontSize="lg">
                      Roma
                    </Text>
                    <Text>Italia</Text>
                  </VStack>
                </Box>
                <Box p="4">
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png" />
                </Box>
              </Flex>
            </Box>

            <Box height="280px" width="256px" flexDirection="column">
              <Image
                width="100%"
                height="50%"
                objectFit="cover"
                src="/images/praga.jpg"
                alt="Praga"
                borderTopRadius="8"
              />
              <Flex
                h="50%"
                w="100%"
                borderColor="yellow.500"
                borderWidth="thin"
                borderBottomRadius="8"
                flexDirection="row"
                align="center"
                justifyContent="space-around"
              >
                <Box p="4">
                  <VStack spacing="4" align="flex-start">
                    <Text fontWeight="bold" fontSize="lg">
                      Praga
                    </Text>
                    <Text>República Tcheca</Text>
                  </VStack>
                </Box>
                <Box p="4">
                  <Avatar src="https://i.pinimg.com/originals/43/3b/4a/433b4a591542187c75cbe37321a0e97d.png" />
                </Box>
              </Flex>
            </Box>

            <Box height="280px" width="256px" flexDirection="column">
              <Image
                width="100%"
                height="50%"
                objectFit="cover"
                src="/images/amsterda.jpg"
                alt="Amsterda"
                borderTopRadius="8"
              />
              <Flex
                h="50%"
                w="100%"
                borderColor="yellow.500"
                borderWidth="thin"
                borderBottomRadius="8"
                flexDirection="row"
                align="center"
                justifyContent="space-around"
              >
                <Box p="4">
                  <VStack spacing="4" align="flex-start">
                    <Text fontWeight="bold" fontSize="lg">
                      Amsterdã
                    </Text>
                    <Text>Holanda</Text>
                  </VStack>
                </Box>
                <Box p="4">
                  <Avatar src="https://www.holandaevoce.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png" />
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
