import { Box, Modal, } from '@mui/material'

import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from '~/atoms/Button'
import { IconClose, IconLoading, } from '~/atoms/Icon'
import Typography from '~/atoms/Typography'
import colors from '~/theme/colors'
import { disableScrollBody } from '~/utils/disableScrollBody'
import DropdownAsynchronous from '../DropdownAsynchronous'
import TextField from '../TextField'
import TextNumber from '../TextNumber'
import { TemplateAddAddress } from './types'

type IModalUpdate = {
    open: boolean,
    onClose: () => void,
    onSave: (value: any, callback?: (v: any) => void) => void,
    title?: string,
    titleBtnSave?: string,
    template?: TemplateAddAddress,
    countryCode: {
        label: string, value: string, country: string
    }[],
    countryName: {
        label: string, value: string,
    }[],
};



export default function ModalUpdate(props: IModalUpdate) {
    const { open, onClose,
        onSave,
        title, titleBtnSave, template = {}, countryCode, countryName } = props;

    const { register, formState: { errors, isValid }, control, reset, getValues, setValue } = useForm({
        mode: "onBlur",
    });
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [countryNumber, setCountryNumber] = useState<string>('');
    const [countryDefault, setCountryDefault] = useState<string>("");
    const [errorApi, setErrorApi] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [countryList, setCountryList] = useState<{ label: string, value: string }[]>
        ([]);
    const [countryListCode, setCountryListCode] = useState<{ label: string, value: string, country: string }[]>
        ([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            disableScrollBody(open);
        }
    }, [open]);

    useEffect(() => {
        setCountryListCode(countryCode);
    }, [countryCode]);

    useEffect(() => {
        setCountryList(countryName);
    }, [countryName])

    useEffect(() => {
        setOpenModal(open);
        setLoading(false);
        setErrorApi("");
    }, [open])


    // handle close modal and reset value
    const handleCloseModal = () => {
        onClose();
        reset();
    };

    // set value default for location
    useEffect(() => {
        setValue(template?.location?.title || "", countryDefault);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryDefault]);

    useEffect(() => {
        setCountryDefault(template?.location?.valueDefault || "");
        setCountryNumber(template?.countryNumber?.valueDefault || "");
    }, [template])

    const handleSave = () => {
        setLoading(true);
        const value: any = getValues();
        const newValue = {
            first_name: value[template.firstName?.title || ""],
            last_name: value[template.lastName?.title || ""],
            address1: value[template.address?.title || ""],
            address2: value[template.apartment?.title || ""],
            // apartment: value[template.apartment?.title || ""],
            state_or_province: value[template.location?.title || ""],
            city: value[template.town?.title || ""],
            postal_code: value[template.postalCode?.title || ""],
            country: value[template.location?.title || ""],
            phone: `${countryNumber} ${value[template.phoneNumber?.title || ""]}`,
            company: value[template.company?.title || ""],
        }
        onSave(newValue, (v: any) => {
            setLoading(false);
            if (v?.success) {
                setErrorApi("");
                handleCloseModal();
            } else {
                setErrorApi(v?.message);
            }
        });
    };

    return (
        <Box
            sx={{
                pointerEvents: "auto",
            }}
        >
            <Modal
                open={openModal}
                onClose={() => loading ? {} : handleCloseModal()}
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
                        flexDirection: "column",
                        background: "#fff",
                        borderRadius: "20px",
                        width: {
                            xs: "333px",
                            md: "490px",
                        },
                        minHeight: "200px",
                        padding: {
                            xs: "56px 32px 40px 32px",
                            md: "64px"
                        },
                        "&:focus": {
                            outline: "none"
                        },
                        position: "relative",
                        "& .MuiFormControl-root": {
                            maxHeight: "100% !important"
                        }
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "26px",
                            right: {
                                xs: "32px",
                                md: "26px"
                            },
                            cursor: loading ? "auto" : "pointer"
                        }}
                        onClick={() => loading ? {} : handleCloseModal()}
                    >
                        <IconClose />
                    </Box>
                    {title && <Typography
                        variant='h5'
                        color={colors.primary.bandaiNamcoBlack}
                        sx={{
                            paddingBottom: "16px",
                            marginBottom: "8px",
                            position: "relative",
                            letterSpacing: {
                                xs: "-0.4px",
                                md: "-0.8px",
                            },
                            "&:before": {
                                content: "' '",
                                position: "absolute",
                                bottom: "0px",
                                left: "0px",
                                width: "100%",
                                borderBottom: "1px solid #dddddd80"
                            }
                        }}
                    >
                        {title}
                    </Typography>}
                    <form
                        id="formContactUs"
                        style={{ display: 'flex', flexDirection: "column", maxHeight: "50vh", overflowY: "scroll" }}
                        autoComplete="off"
                    >
                        {/* first name */}
                        <Box sx={{ marginTop: "24px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.firstName?.title}
                                helperText={errors?.[template?.firstName?.title || ""]?.message}
                                emptyField={template?.firstName?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.firstName?.valueDefault}
                                error={errors?.[template?.firstName?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.firstName?.title || "",
                                    {
                                        required: `${template?.firstName?.messageEmpty}`,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* last name */}
                        <Box sx={{ marginTop: "20px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.lastName?.title}
                                helperText={errors?.[template?.lastName?.title || ""]?.message}
                                emptyField={template?.lastName?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.lastName?.valueDefault}
                                error={errors?.[template?.lastName?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.lastName?.title || "",
                                    {
                                        required: `${template?.lastName?.messageEmpty}`,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* last address */}
                        <Box sx={{ marginTop: "20px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.address?.title}
                                helperText={errors?.[template?.address?.title || ""]?.message}
                                emptyField={template?.address?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.address?.valueDefault}
                                error={errors?.[template?.address?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.address?.title || "",
                                    {
                                        required: `${template?.address?.messageEmpty}`,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* last apartment */}
                        <Box sx={{ marginTop: "20px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.apartment?.title}
                                helperText={errors?.[template?.apartment?.title || ""]?.message}
                                emptyField={template?.apartment?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.apartment?.valueDefault}
                                error={errors?.[template?.apartment?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.apartment?.title || "",
                                    {
                                        required: template?.apartment?.messageEmpty,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* last Town/City (optional) */}
                        <Box sx={{ marginTop: "20px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.town?.title}
                                helperText={errors?.[template?.town?.title || ""]?.message}
                                emptyField={template?.town?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.town?.valueDefault}
                                error={errors?.[template?.town?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.town?.title || "",
                                    {
                                        required: template?.town?.messageEmpty,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* last Postal code/ZIP */}
                        <Box sx={{ marginTop: "20px" }}>
                            <TextNumber
                                InputLabelProps={{ required: false }}
                                label={template?.postalCode?.title || ""}
                                helperText={errors?.[template?.postalCode?.title || ""]?.message}
                                defaultValue={template?.postalCode?.valueDefault}
                                iconPosEnd
                                error={errors?.[template?.postalCode?.title || ""]?.message && true}
                                {...register(template?.postalCode?.title || "",
                                    {
                                        required: template?.postalCode?.messageEmpty,
                                        // onBlur: () => {handelBlurInput(getValues())},
                                    })}
                            />
                        </Box>

                        {/* Location  */}
                        <Box sx={{ marginTop: "20px" }}>
                            <Controller
                                name={template?.location?.title ?? "located"}
                                render={() => {
                                    return (
                                        <DropdownAsynchronous
                                            title={template?.location?.title}
                                            defaultValue={template?.location?.valueDefault}
                                            width="100%"
                                            data={countryList}
                                            required
                                            helperText={template?.location?.messageEmpty}
                                            onChange={(v) => setCountryDefault(v as string)}
                                            inModal
                                        />
                                    )
                                }
                                }
                                control={control}
                            />
                        </Box>

                        {/* Phone number  */}
                        <Box sx={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <Box className='DropdownAsynchronous'
                                sx={{
                                    display: "flex",
                                    // background: "red",
                                    position: "relative",
                                    minWidth: {
                                        xs: "90px",
                                        md: "118px"
                                    },
                                    "& .MuiFormControl-root": {
                                        "& .MuiOutlinedInput-root": {
                                            paddingRight: {
                                                xs: "11px !important",
                                                md: "31px !important"
                                            },
                                            "& input": {
                                                padding: {
                                                    xs: "19px 0px 18px 16px !important",
                                                    md: "19px 0px 18px 32px !important",
                                                },
                                            },
                                            cursor: "pointer",
                                        },
                                    },
                                    "& .icon-dropdown": {
                                        right: {
                                            xs: "14px",
                                            md: "26px"
                                        },
                                        background: "#fff"
                                    },
                                    marginRight: {
                                        xs: "8px",
                                        md: "16px"
                                    },
                                }}
                            >
                                <DropdownAsynchronous
                                    width="100%"
                                    data={countryListCode}
                                    isMin
                                    defaultValue={countryNumber}
                                    isShowClose
                                    isCountryCode
                                    onChange={(v) => setCountryNumber(v || "")}
                                    inModal
                                // onChangeCountry={(v?: string) => setCountryDefault(v || "")}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%"
                                }}
                            >
                                <TextNumber
                                    InputLabelProps={{ required: false }}
                                    label={template?.phoneNumber?.title || ""}
                                    helperText={errors?.[template?.phoneNumber?.title || ""]?.message}
                                    defaultValue={template?.phoneNumber?.valueDefault}
                                    iconPosEnd
                                    error={errors?.[template?.phoneNumber?.title || ""]?.message && true}
                                    {...register(template?.phoneNumber?.title || "",
                                        {
                                            required: template?.phoneNumber?.messageEmpty,
                                            // onBlur: () => {handelBlurInput(getValues())},
                                        })}
                                />
                            </Box>
                        </Box>

                        {/* Company name (optional) */}
                        <Box sx={{ marginTop: "20px", marginBottom: "10px" }}>
                            <TextField
                                InputLabelProps={{ required: false }}
                                label={template?.company?.title}
                                helperText={errors?.[template?.company?.title || ""]?.message}
                                emptyField={template?.company?.messageEmpty}
                                iconPosEnd
                                defaultValue={template?.company?.valueDefault}
                                error={errors?.[template?.company?.title || ""]?.message && true}
                                type={"text"}
                                {...register(template?.company?.title || "",
                                    {
                                        required: template?.company?.messageEmpty,
                                    })}
                            />
                        </Box>
                    </form>
                    {/* alert error when api error */}
                    {!!errorApi && <Typography
                        sx={{
                            marginTop: "10px",
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            color: colors.primary.bandaiNamcoRed,
                            paddingLeft: "32px"
                        }}
                    >
                        {errorApi}
                    </Typography>}
                    <Button
                        sx={{
                            marginTop: {
                                xs: "10px",
                                md: "38px"
                            }
                        }}
                        variant={(!countryDefault || !isValid) ? "primary" : "primaryDark"}
                        disabled={(!countryDefault || !isValid)}
                        onClick={() => loading ? {} : handleSave()}
                    >
                        {loading ? <IconLoading htmlColor={"#fff"} /> : titleBtnSave}
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}
