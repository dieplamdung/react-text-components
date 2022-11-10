import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from '~/atoms/Container';
import AdsContainer from "./AdsContainer"

export default {
    title: 'Organisms/AdsContainer',
    component: AdsContainer,
} as ComponentMeta<typeof AdsContainer>;


const Template: ComponentStory<typeof AdsContainer> = (args) => (
    <Container>
        <AdsContainer {...args} />
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    img: "https://images.ctfassets.net/hnoi7ctzfs57/6dYAv7kvoSAfqzE1H7P3wS/cc9dd230ce36eb813edf2ff5147d1aa9/Images.png",
    alt: "image",
    title: "Black Friday sale!",
    description: "Save up to 80%",
    href: "/"
};