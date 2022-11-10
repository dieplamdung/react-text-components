import React from 'react';

import { useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { CustomThemeType } from '~/theme/';
import { MobileDown } from '~/utils/viewport';

export interface WithMobileCheckProps {
  isMobile: boolean;
}

export function withMobileCheck<T extends WithMobileCheckProps>(
  WrappedComponent: React.ComponentType<T> | any,
) {
  const ComponentWithMobileCheck = (props: Omit<T, keyof WithMobileCheckProps>) => {
    const theme = useTheme() as CustomThemeType;
    const isMobileDown = useMediaQuery(MobileDown(theme));

    return <WrappedComponent {...(props as T)} isMobile={isMobileDown} />;
  };

  return ComponentWithMobileCheck;
}
