export declare type IUpdateBar = {
    title: string;
    events: Array<{
        date: string;
        title: string;
    }>;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
};
