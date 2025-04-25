import { FC } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "./ProjectCardFooter";

export enum ImagePosition {
    Right,
    Left,
}
interface Props {
    id: string;
    title: string;
    github?: string;
    tags: string[];
    description: string;
    image: string;
    imagePosition: ImagePosition;
    jpg: string;
}

const ImagePositionLayoutMapper: Record<ImagePosition, "row" | "row-reverse"> = {
    [ImagePosition.Right]: "row",
    [ImagePosition.Left]: "row-reverse",
};

const ImagePositionPaddingRightMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "8",
    [ImagePosition.Left]: "0",
};

const ImagePositionPaddingLeftMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "0",
    [ImagePosition.Left]: "8",
};

export const FeaturedProjectCard: FC<Props> = ({ id, title, github, tags, description, image, imagePosition, jpg }) => {
    const layoutDirection = ImagePositionLayoutMapper[imagePosition];
    const paddingRight = ImagePositionPaddingRightMapper[imagePosition];
    const paddingLeft = ImagePositionPaddingLeftMapper[imagePosition];

    return (
        <Flex
            justifyContent="space-between"
            id="featured-project-card"
            py={{ base: "12", md: "12", lg: "28" }}
            direction={{ base: "column-reverse", lg: layoutDirection }}
        >
            <Flex
                h="auto"
                pr={{ base: "0", lg: paddingRight }}
                pl={{ base: "0", lg: paddingLeft }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Heading data-aos="fade-down" data-aos-offset="200" fontSize="4xl" lineHeight="1">
                        {title}
                    </Heading>

                    <Box
                        py="4"
                        display={{ base: "inherit", lg: "none" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <Image borderRadius="xl" src={image} />
                    </Box>

                    <Text
                        fontSize="lg"
                        pt={{ base: 0, lg: "2" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        borderRadius="xl"
                        pb="2"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <Tags tags={tags} id={id} />
                </Box>

                <ProjectCardFooter github={github} />
            </Flex>

            <Box
                data-aos="fade-up"
                data-aos-offset="200"
                display={{ base: "none", lg: "block" }}
                flex={{ base: 1, lg: 0.6 }}
                pl={{ base: "0", lg: paddingRight }}
                pr={{ base: "0", lg: paddingLeft }}
            >
                <picture>
                    <source type="image/webp" srcSet={image}></source>
                    <source type="image/jpeg" srcSet={jpg}></source>
                    <Image
                        borderRadius="xl"
                        src={jpg}
                        alt={`${title}-cover-image`}
                        transition="all 0.4s ease-in-out"
                        _hover={{ boxShadow: "0px 20px 60px rgb(77 77 77 / 10%)", transform: "scale(1.01)" }}
                    />
                </picture>
            </Box>
        </Flex>
    );
};
