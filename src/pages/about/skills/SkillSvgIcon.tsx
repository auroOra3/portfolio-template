// src/pages/about/skills/SkillSvgIcon.tsx
import { Box, Tooltip } from "@chakra-ui/react";

interface SkillSvgIconProps {
  name: string;
  svgUrl: string;
}

export function SkillSvgIcon({ name, svgUrl }: SkillSvgIconProps): JSX.Element {
  return (
    <Tooltip label={name} hasArrow>
      <Box
        w="32px"
        h="32px"
        p="0"
        m="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={svgUrl}
          alt={name}
          width="100%"
          height="100%"
          style={{
            display: "block",
            margin: 0,
            padding: 0,
            verticalAlign: "middle",
          }}
        />
      </Box>
    </Tooltip>
  );
}
