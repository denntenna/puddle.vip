import { Grommet, Box, Heading, Text } from "grommet";
import { useEffect } from "react";
import { setup } from "./island";
import { useElementSize } from "usehooks-ts";

const theme = {
  global: {
    font: {
      family: "IBM Plex Mono",
      weight: 400,
    },
  },
  heading: {
    weight: 900,
    color: "#9a8c98",
    font: {
      family: "IBM Plex Mono",
    },
  },
  paragraph: {
    font: {
      family: "IBM Plex Mono",
    },
  },
  text: {
    font: {
      family: "IBM Plex Mono",
      weight: 100,
    },
  },
};

function App() {
  const [squareRef, { width, height }] = useElementSize();
  useEffect(() => {
    setup();
    // initialize matter
    // initialize tone
  });
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Box pad="xsmall" height={"fit-content"}>
          <Heading level={3} margin={"none"}>
            puddle.vip
          </Heading>
        </Box>
        <Box flex={"grow"} ref={squareRef}>
          <canvas width={width} height={height} id="islands"></canvas>
        </Box>
        <Box
          height={"fit-content"}
          pad="large"
          border
          round
          margin={{ left: "small", right: "small", bottom: "small" }}
        >
          "Chipkali ke nana hain, chipkali ke hain sasur, Danasur Danasur
          Danasur" - Gulzar
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
