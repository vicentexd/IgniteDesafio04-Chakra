import { Flex, Image, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

interface HeaderProps {
  allowGoBack?: boolean;
}

export function Header({ allowGoBack = false }: HeaderProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Flex
      as="header"
      w="100%"
      height="6.25rem"
      p="6"
      align="center"
      justify="center"
      bg="white"
    >
      {allowGoBack && (
        <IconButton
          position="absolute"
          left="8"
          aria-label="Navigation go back"
          icon={<Icon as={FaChevronLeft} />}
          fontSize="16"
          variant="unstyled"
          onClick={handleGoBack}
          mr="2"
        />
      )}
      <Image src="/images/logo.svg" alt="Logo" height="100%" />
    </Flex>
  );
}
