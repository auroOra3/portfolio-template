import { FC } from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Container,
} from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { SkillSvgIcon } from "./SkillSvgIcon";
import { PageHeader } from "shared/page-header/PageHeader";

const convertToSvgUrl = (iconClass: string): string => {
  const match = iconClass.match(/devicon-([a-z0-9]+)-/);
  if (!match) return "";
  const icon = match[1];
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;
};

export const Skills: FC = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardHoverBg = useColorModeValue("gray.50", "gray.600");
  const borderHoverColor = useColorModeValue("gray.200", "gray.600");
  const boxShadowHover = useColorModeValue(
    "0 12px 24px rgba(0, 0, 0, 0.06)",
    "0 12px 24px rgba(0, 0, 0, 0.3)"
  );

  return (
    <Box as="section" data-aos="fade-up">
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 4 }}>
        <PageHeader label="Skills" />

        <Flex wrap="wrap" gap={4} rowGap={6} justify={{ base: "center", md: "space-between" }}>
          {configs.about.skills.map((section, index) => (
            <Box
              key={section.title}
              bg={cardBg}
              borderRadius="xl"
              shadow="md"
              p={{ base: 4, sm: 6 }}
              w={{ base: "100%", md: "50%", lg: "50%" }}
              maxW={{ base: "100%", md: "48%" }}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: { base: "none", md: "scale(1.025)" },
                bg: cardHoverBg,
                borderColor: borderHoverColor,
                boxShadow: boxShadowHover,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Text
                fontSize={{ base: "lg", sm: "xl" }}
                fontWeight="bold"
                mb={4}
              >
                {section.title}
              </Text>

              <Wrap spacing={4} justify={{ base: "start", sm: "flex-start" }}>
                {section.tools.map((tool) => (
                  <WrapItem
                    key={tool.name}
                    transition="transform 0.3s ease, filter 0.3s ease"
                    _hover={{
                      transform: { base: "none", md: "scale(1.15)" },
                      filter: { base: "none", md: "brightness(1.2)" },
                    }}
                  >
                    <SkillSvgIcon
                      name={tool.name}
                      svgUrl={convertToSvgUrl(tool.iconClass)}
                    />
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
