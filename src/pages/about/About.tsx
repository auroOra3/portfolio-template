import { FC } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Skills } from "pages/about/skills/Skills";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" />
                    </picture>
                </Box>
                <Box flex="0.85">
                    <Heading data-aos="fade-down">{configs.common.name}</Heading>
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink={0} overflow="hidden">
                </Box>
                <Box flex="0.6" overflow="hidden">
                </Box>
            </Flex>
            <Box pt="16">
                <Skills />
            </Box>
            <Box pt="16">
            </Box>
        </Box>
    );
};
