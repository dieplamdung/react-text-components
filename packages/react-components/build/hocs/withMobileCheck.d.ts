import React from 'react';
export interface WithMobileCheckProps {
    isMobile: boolean;
}
export declare function withMobileCheck<T extends WithMobileCheckProps>(WrappedComponent: React.ComponentType<T> | any): (props: Omit<T, keyof WithMobileCheckProps>) => JSX.Element;
