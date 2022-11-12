import { IKeyFeature } from '~/molecules/KeyFeature';
import { IComplexKeyFeatureCard } from '~/molecules/ComplexKeyFeatureCard/types';
export declare type IKeyFeatureContainer = {
    title: string;
    onlyShowKeyFeatureCard?: boolean;
    dataComplexKeyFeatureCard?: IComplexKeyFeatureCard | any;
    dataKeyFeatureCard: IKeyFeature[];
    id?: string;
};
