import Image from "next/image";

import Box from "@/global/layout/Box";
import Text from "@/global/Typography/Text/Text";

import FinalizePurchases from "@/assets/images/Group 43.svg";

import { Button, Loading } from "@/components";
import { useTheme } from "styled-components";
import { Content } from "./styles";

export default function ErrorGet({
  handleBackHome,
  isLoading,
  isMobile,
}: {
  handleBackHome: () => void;
  isLoading: boolean;
  isMobile: boolean;
}) {
  const theme = useTheme();
  const renderTextMobile = () => {
    if (isMobile) {
      return (
        <Box display="flex">
          <Text
            fontSize={theme.fontSize.lg}
            fontWeight={theme.fontWeight.bold}
            color={theme.colors.dark}
            lineHeight={"30.24px"}
            textAlign="center"
          >
            Parece que não há nada por aqui :(
          </Text>
        </Box>
      );
    } else {
      return (
        <Text
          fontSize={theme.fontSize.lg}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.dark}
          lineHeight={"16.34px"}
        >
          Parece que não há nada por aqui :(
        </Text>
      );
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Content>
      {renderTextMobile()}
      <Image src={FinalizePurchases} alt="" />
      <Button
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={theme.gaps.lg}
        height={"40px"}
        width={"180px"}
        padding={theme.paddings.xxs}
        backGround={theme.colors.tertiary}
        borderRadius={theme.borderRadius.small}
        border={"none"}
        onClick={handleBackHome}
      >
        <Text
          fontSize={theme.fontSize.sm}
          fontWeight={theme.fontWeight.bold}
          color={theme.colors.primary}
          lineHeight={"19.07px"}
        >
          Recarregar página
        </Text>
      </Button>
    </Content>
  );
}
