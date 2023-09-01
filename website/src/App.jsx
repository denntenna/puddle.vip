import { Grommet, Box, Heading, Text } from "grommet";
import { useEffect } from "react";
import { setup } from "./island";

const theme = {
  global: {
    font: {
      family: "IBM Plex Mono",
    },
  },
};

function App() {
  useEffect(() => {
    setup();
    // initialize matter
    // initialize tone
  });
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Box pad="large">
          <Heading margin={"none"}>puddle.vip</Heading>
        </Box>
        <Box flex={"grow"}>
          <canvas width={800} height={1000} id="islands"></canvas>
        </Box>
        <Box pad="large" border round margin={"small"}>
          "Chipkali ke nana hain, chipkali ke hain sasur, Danasur Danasur
          Danasur" - Gulzar
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
