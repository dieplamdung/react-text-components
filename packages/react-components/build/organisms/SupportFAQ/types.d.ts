import { IAccordion } from "~/atoms/Accordion";
import { ListTabIcons } from "~/atoms/TabIcons";
export declare type ListAccordion = {
    key: string;
    accordionItems: IAccordion[];
};
export declare type ListLink = {
    label: string;
    href: string;
};
export declare type ISupportFAQ = {
    title: string;
    secondaryTitle?: string;
    listAccordion?: ListAccordion[];
    listAccordionDefault?: ListAccordion[];
    listTabIcons?: ListTabIcons[];
    listLink?: ListLink[];
};
