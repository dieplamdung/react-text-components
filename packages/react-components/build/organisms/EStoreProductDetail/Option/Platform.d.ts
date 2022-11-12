import React from 'react';
declare type IPlatform = {
    isSelect?: boolean;
    titleIcon?: string;
    onClick: () => void;
};
declare function Platform(props: IPlatform): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Platform>;
export default _default;
