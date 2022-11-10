import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';

import Typography from '~/atoms/Typography';
import colors from '~/theme/colors';

// Types
import { IAdsContainerProps } from './types';


const AdsContainer: React.FC<IAdsContainerProps> = ({ img, alt, title, description, href, id }) => {

    const refContainer = useRef<any>()
    // const refIsShow = useRef<any>();

    // dispatchEvent event send id to sub navigation
    useEffect(() => {
        if (typeof window !== "undefined") {
            const container = refContainer.current;
            // const height = window.innerHeight;
            window.addEventListener("scroll", () => {
                if (container) {
                    const { bottom, top } = container.getBoundingClientRect();
                    const newBottom = Math.floor(bottom);
                    const newTop = Math.floor(top);
                    if (newTop < 120 && newBottom > 100) {
                        // refIsShow.current = true;
                        window?.dispatchEvent(new Event(`${id}`));
                    }
                    // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
                    //     refIsShow.current = false;
                    //     window.removeEventListener(`${id}`, () => { })
                    // }
                }
            })
        }
        return () => {
            window.removeEventListener(`${id}`, () => { });
            window.removeEventListener(`scroll`, () => { });
        }
    }, [id])

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
            id={id}
            ref={refContainer}
        >
            <Box
                sx={{
                    maxWidth: {
                        xs: "100%",
                        md: "736px"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "20px",
                    '& a': {
                        width: "100%",
                        height: {
                            xs: "204px",
                            md: "414px"
                        },
                        '& img': {
                            width: "100%",
                            height: "100%",
                            borderRadius: {
                                xs: "10px",
                                md: "20px"
                            },
                            objectFit: "cover"
                        }
                    }
                }}
            >
                <Link href={href} sx={{ textDecoration: "none", }}>
                    <img src={img || ""} alt={alt || ""} />
                </Link>
                <Typography variant='h5'
                    sx={{
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "block",
                        textOverflow: "ellipsis",
                        letterSpacing: {
                            xs: "-0.4px",
                            md: "-0.8px"
                        },
                        color: colors.primary.bandaiNamcoBlack,
                        marginTop: {
                            xs: "20px",
                            md: "32px",
                        }
                    }}
                >
                    {title}
                </Typography>
                <Typography variant='p4'
                    sx={{
                        textAlign: "center",
                        lineHeight: "24px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        display: "block",
                        textOverflow: "ellipsis",
                        color: "#7E7E7E",
                        marginTop: "4px",
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>

    );
}

export default AdsContainer;