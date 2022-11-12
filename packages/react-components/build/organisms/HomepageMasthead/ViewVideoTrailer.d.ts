import React from 'react';
export declare type VideoTrailer = {
    title?: string;
    idVideo: string;
};
declare type PropsViewVideoTrailer = {
    onClose: () => void;
    open?: boolean;
    listTrailer: VideoTrailer[];
};
declare const ViewVideoTrailer: React.FC<PropsViewVideoTrailer>;
export default ViewVideoTrailer;
