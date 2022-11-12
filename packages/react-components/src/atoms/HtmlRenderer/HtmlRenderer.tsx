import React, { isValidElement, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { HtmlRendererProps } from './type';

const HtmlRenderer = (props: HtmlRendererProps) => {
    const { component, value, ...rest } = props;

    const isElement = isValidElement(value) || (value as ReactNode[])?.every?.(item => isValidElement(item as ReactNode));

    return (
        <Box component={component} {...rest}>
            {isElement ? value : <Box dangerouslySetInnerHTML={{ __html: value as string }} />}
        </Box>
    )
};
export default HtmlRenderer;