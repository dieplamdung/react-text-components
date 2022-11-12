export declare type ILocateUs = {
    title: string;
    description: string;
    connect: {
        title: string;
        href: string;
    };
    mainImageNextProps?: any;
    localeMap: {
        mapDesktop: string;
        mapMobile: string;
        listInfoMarker: {
            continent?: string;
            image: string;
            title: string;
            address: string;
            infoLink: IInfo[];
        }[];
    };
    listTabs: {
        label: string;
        value: string;
    }[];
};
export declare type ILocaleMap = {
    mapDesktop?: string;
    mapMobile?: string;
    mainImageNextProps?: any;
    listInfoMarker: {
        continent?: string;
        image: string;
        title: string;
        address: string;
        infoLink: IInfo[];
    }[];
    listTabs: {
        label: string;
        value: string;
    }[];
};
declare type IInfo = {
    title: string;
    href: string;
};
export declare type IMarker = {
    sx: any;
    continent?: string;
    image: string;
    title: string;
    address: string;
    infoLink: IInfo[];
    mainImageNextProps?: any;
    position: string;
    continentActive?: number;
};
export declare type ILocaleCardInfo = {
    mainImageNextProps: any;
    item: {
        continent?: string;
        image: string;
        title: string;
        address: string;
        infoLink: IInfo[];
    };
};
export {};
