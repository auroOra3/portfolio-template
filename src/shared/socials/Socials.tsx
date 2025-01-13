import { FC } from "react";
import { Button, HStack, IconButton, Tooltip, Link } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, YoutubeIcon } from "utils/Icons";

const LinksToIconMapper: Record<string, JSX.Element> = {
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    youtube: <YoutubeIcon />,
    mail: <MailIcon />,
};

interface Props {  
    resume?: boolean;
    exclude?: Array<string>;
    delay?: number;
}

export const Socials: FC<Props> = ({ resume = true, exclude, delay = 800 }) => {
    return (
        <HStack spacing="5">
            {configs.common.socials.map((social, idx) =>
                !exclude?.includes(social.type) && (
                    <Tooltip key={social.type} label={social.type} textTransform="capitalize">
                    <Link href={social.link} isExternal>
                        <Button
                            p="0"
                            aria-label={`${social.type}-button`}
                            as={IconButton}
                            variant="icon"
                            data-aos="fade"
                            data-aos-delay={idx * 100 + delay}
                            fontSize={social.type === "mail" ? "24pt" : "20pt"}
                            icon={LinksToIconMapper[social.type] as JSX.Element}
                        />
                    </Link>
                    </Tooltip>
                )
            )}
        </HStack>
    );
};
