import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { GitHubIcon } from "utils/Icons";
import { open } from "utils/Functions";

interface GitHubButtonProps {
    github?: string;
}

interface Props extends GitHubButtonProps {}


export const GitHubButton: FC<GitHubButtonProps> = ({ github }) => {
    const isButton = useBreakpointValue({ base: false, lg: true }) ?? false;

    return github ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={isButton ? Button : IconButton}
            variant="secondary"
            py="5"
            leftIcon={isButton ? <GitHubIcon /> : undefined}
            icon={!isButton ? <GitHubIcon /> : undefined}
            onClick={() => open(github)}
        >
            {isButton && "GitHub"}
        </Button>
    ) : null;
};

export const ProjectCardFooter: FC<Props> = ({github }) => {
    return (
        <Flex justifyContent="flex-start" alignItems="center" pt="8">
                <GitHubButton github={github} />
        </Flex>
    );
};
