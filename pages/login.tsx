import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      bg="bugreportsdark.100"
      height={"100%"}
      color={useColorModeValue("#fff", "#000")}
      flexDirection="row"
    >
      <aside style={{ width: "25%" }}>
        <Flex
          w={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          bg={"bugreportsdark.200"}
          borderTopEndRadius={"lg"}
          borderBottomEndRadius={"lg"}
        >
          <span>Logo</span>
          <span>Frase</span>
        </Flex>
      </aside>
      <main style={{ width: "75%" }}>
        <Flex
          w={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <span>Login Form</span>
        </Flex>
      </main>
    </Flex>
  );
}
