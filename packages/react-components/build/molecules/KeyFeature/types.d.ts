declare type Position = "left" | "right";
declare type TypeBorder = "waves" | "triangle" | "circle" | "pyramid" | "none" | 'trapezium' | 'oval' | 'ellipse' | 'trapezium_vertical' | 'half_an_ellipse' | 'half_a_circle';
export declare type IKeyFeature = {
    title: string;
    descriptionTop?: string;
    descriptionBottom?: string;
    image: string;
    imagePosition?: Position;
    higher: boolean;
    typeBorder?: TypeBorder;
    contentBorder?: {
        waves?: string;
        triangle?: string;
        circle?: string;
        pyramid?: string;
        none?: string;
    };
};
export {};
