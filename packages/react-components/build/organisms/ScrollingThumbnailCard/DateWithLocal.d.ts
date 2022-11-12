import React from 'react';
declare type IProps = {
    locale: string;
    toDate: string;
    fromDate: {
        month?: string;
        day?: string;
    };
    textDateRange: string;
};
declare const DateWithLocal: React.FC<IProps>;
export default DateWithLocal;
