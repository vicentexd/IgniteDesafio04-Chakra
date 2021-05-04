import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTips } from "../components/TravelTips";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <Flex
        as="main"
        maxWidth="1160px"
        justify="center"
        mx="auto"
        direction="column"
      >
        <TravelTips />

        <Divider
          width="90px"
          mt="20"
          mx="auto"
          mb="3.25rem"
          borderWidth="2px"
          borderColor="gray.600"
        />

        <Heading textAlign="center" fontWeight="medium" lineHeight="3.375rem">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
    </>
  );
}
