import { FC } from "react"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}></ChakraProvider>
  )
}

export default App
