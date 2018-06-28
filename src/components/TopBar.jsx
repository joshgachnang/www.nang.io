import React, { Component } from "react";
import { Box, Text } from "gestalt";

export default class TopBar extends Component {
  render() {
    return (
      <Box
        width="100%"
        display="flex"
        direction="row"
        // height="72px"
        smPaddingX={2}
        mdPaddingX={10}
        mdPaddingY={5}
        smPaddingY={1}
      >
        <Box flex="shrink" paddingX={4} paddingY={2}>
          <Text size="xl" bold={true}>
            <a href="/" className="no-link">
              <span className="site-title">Josh Gachnang</span>
            </a>
          </Text>
        </Box>
        <Box flex="grow" />

        <Box flex="shrink" paddingX={4} paddingY={2}>
          <Text size="xl" bold={true}>
            <a href="/contact" className="no-link">
              Contact
            </a>
          </Text>
        </Box>
        <Box flex="shrink" paddingX={4} paddingY={2}>
          <Text size="xl" bold={true}>
            <a href="/blog" className="no-link">
              Blog
            </a>
          </Text>
        </Box>
      </Box>
    );
  }
}
