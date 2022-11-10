import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Button from '~/atoms/Button';
import { IconClose, IconLoading } from '~/atoms/Icon';
import Typography from '~/atoms/Typography';
import colors from '~/theme/colors';
import { disableScrollBody } from '~/utils/disableScrollBody';

type TModalRemove = {
    open: boolean,
    titleBtnRemove?: string,
    titleBtnCancel?: string,
    onClose: () => void,
    onConfirm: (callback?: (value: any) => void) => void,
    titleRemove?: string
}
function ModalConfirmRemove(props: TModalRemove) {
    const { open,
        onClose,
        onConfirm,
        titleRemove = "Are you sure you want to remove this address?",
        titleBtnRemove = "Remove",
        titleBtnCancel = "Cancel"
    } = props;

    const [error, serError] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        serError("");
        if (typeof window !== "undefined") {
            disableScrollBody(open);
        }
    }, [open]);

    const handleConfirmDelete = () => {
        setLoading(true);
        onConfirm((v) => {
            setLoading(false);
            if (v?.success) {
                serError("");
                onClose();
            };
            if (v?.message) {
                serError(v?.message || "");
            }
        });
    };

    return (
        <Box
            sx={{
                pointerEvents: "auto"
            }}
        >
            <Modal
                open={open}
                onClose={() => loading ? {} : onClose()}
                sx={{
                    pointerEvents: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        background: "#fff",
                        borderRadius: "20px",
                        width: {
                            xs: "311px",
                            md: "402px",
                        },
                        minHeight: "200px",
                        padding: {
                            xs: "64px 28px 36px 28px",
                            md: "56px 52px 60px 52px"
                        },
                        "&:focus": {
                            outline: "none"
                        },
                        position: "relative",

                        "& button": {
                            width: "100%",
                            marginTop: "12px"
                        }
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "26px",
                            right: {
                                xs: "28px",
                                md: "52px"
                            },
                            cursor: loading ? "auto" : "pointer"
                        }}
                        onClick={() => loading ? {} : onClose()}
                    >
                        <IconClose />
                    </Box>
                    <Typography
                        variant='h6'
                        sx={{
                            textAlign: "center",
                            maxWidth: {
                                xs: "255px",
                                md: "298px"
                            },
                            marginBottom: {
                                xs: "32px",
                                md: "40px"
                            }
                        }}
                    >
                        {titleRemove}
                    </Typography>
                    {(!!error && !loading) && <Typography
                        sx={{
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            color: colors.primary.bandaiNamcoRed,
                            textAlign: "center"
                        }}
                    >
                        {error}
                    </Typography>}

                    <Button
                        variant="secondaryBlack"
                        onClick={() => loading ? {} : handleConfirmDelete()}
                    >  {loading ? <IconLoading htmlColor={"#fff"} /> : titleBtnRemove}</Button>

                    <Button
                        variant="secondary"
                        onClick={() => loading ? {} : onClose()}
                    > {titleBtnCancel}</Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default ModalConfirmRemove;