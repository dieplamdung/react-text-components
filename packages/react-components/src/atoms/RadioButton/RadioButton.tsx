import React, { useEffect, useState } from 'react';
import colors from '~/theme/colors';
import { Box } from '@mui/material';

// Types
import { IRadioButtonProps } from './types';
import Typography from '../Typography';

const RadioButton: React.FC<IRadioButtonProps> = ({ isChecked = false, onChange, title }) => {
    const [isCheck, setIsCheck] = useState<boolean>(true);

    useEffect(() => {
        setIsCheck(isChecked);
    }, [isChecked]);

    const Icon = <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L5 9L13 1" stroke="#0169B2" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%'
            }}
        >
            {
                title && (
                    <Typography variant="p1"
                        color={colors.otherColor.english}
                        onClick={() => { setIsCheck(!isCheck); onChange(!isCheck) }}
                        sx={{
                            width: '100%',
                            cursor: 'pointer',
                            fontSize: {
                                md: "20px",
                                xs: "16px",
                            },
                            lineHeight: {
                                md: "26px",
                                xs: "22px",
                            },
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            display: "block",
                            textOverflow: "ellipsis",
                            marginRight: "4px"
                        }}
                    >
                        {title}
                    </Typography>
                )
            }
            <Box sx={{
                display: "flex",
                width: 24,
                height: 24,
                minWidth: "24px",
                justifyContent: 'center',
                alignItems: 'center',
                background: isCheck ? "rgba(1, 105, 178, 0.1)" : colors.neutral.neutral6,
                borderRadius: "39px",
                border: "1px solid",
                borderColor: isCheck ? colors.secondary.reactNamcoBlue : colors.neutral.neutral6,
                transform: "all 0.3s",
                cursor: "pointer"
            }}

                onClick={() => { setIsCheck(!isCheck); onChange(!isCheck) }}
            >
                {isCheck && Icon}
            </Box>
        </Box>

    )
};

export default RadioButton;