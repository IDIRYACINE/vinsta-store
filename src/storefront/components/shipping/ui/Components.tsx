import { FormControl, Box, Select, InputLabel, Typography, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import { Destination, DeliveryType, DeliveryTypeEnum, calculateDeliveryPrice } from "@vinstacore/index";
import { ChangeEvent, useState } from "react";

interface DestinationSelectorProps {
    destinations: Destination[],
    destination: Destination,
    selectDestination: (destination: Destination) => void,
    deliveryTypes: DeliveryType[],
    deliveryType: DeliveryType,
    selectDeliveryType: (deliveryType: DeliveryType) => void,
    homeAddress: string,
    onHomeAddressChange: (value: string) => void,
    deliveryPrice: number,
}

export function DestinationSelector(props: DestinationSelectorProps) {
    const { destinations, destination, selectDestination } = props
    const { deliveryTypes, deliveryType, deliveryPrice, selectDeliveryType } = props
    const { homeAddress, onHomeAddressChange } = props



    const deliveryPriceFieldProps = {
        label: "DeliveryPrice",
        value: deliveryPrice.toString(),
        readOnly: true
    }

    const updateDestination = (event: SelectChangeEvent) => {
        const targetName = event.target.value as string
        const newDestination = destinations.find(element => element.name === targetName)
        if (newDestination !== undefined) {
            selectDestination(newDestination);
        }
    }

    const updateHomeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        onHomeAddressChange(event.target.value)
    }


    const updateDeliveryType = (event: SelectChangeEvent) => {
        const targetName = event.target.value as string
        const newDeliveryType = deliveryTypes.find(element => element.name === targetName)
        if (newDeliveryType !== undefined) {
            selectDeliveryType(newDeliveryType);
        }
    }

    return (

        <Box className="w-full">
            <FormControl fullWidth className="mb-2">
                <InputLabel id="delivery-type-label">Delivery Type</InputLabel>
                <Select
                    labelId="delivery-type-label"
                    id="delivery-type"
                    value={deliveryType.name}
                    label="Delivery Type"
                    onChange={updateDeliveryType}
                >
                    {
                        deliveryTypes.map(
                            (deliveryType) => {
                                return <MenuItem value={deliveryType.name} key={deliveryType.id}>{deliveryType.name}</MenuItem>
                            }
                        )
                    }
                </Select>
            </FormControl>
            <Box className="flex flex-row w-full mt-2 justify-center items-center">

                <FormControl fullWidth className="mr-2">
                    <InputLabel id="destination-select-label">Destination</InputLabel>
                    <Select
                        labelId="destination-select-label"
                        id="destination-select"
                        value={destination.name}
                        label="Age"
                        onChange={updateDestination}
                    >
                        {
                            destinations.map(
                                (destination) => {
                                    return <MenuItem value={destination.name} key={destination.id}>{destination.name}</MenuItem>
                                }
                            )
                        }
                    </Select>
                </FormControl>

                <AppTextField {...deliveryPriceFieldProps} />

            </Box>
            {
                deliveryType.isDeliverHome ?

                    <TextField
                        className="mt-1"
                        label="Addresse"
                        value={homeAddress}
                        onChange={updateHomeAddress}
                    />
                    : null
            }


        </Box>

    )
}

interface AppTextFieldProps {
    label: string;
    onChange?: (value: string) => void;
    className?: string;
    readOnly?: boolean;
    value?: string;
    validator?: (value: string) => boolean;
    enforcer?: (value: string) => string;
    required?: boolean;
    helperText?: string;
}
export function AppTextField(props: AppTextFieldProps) {
    const { onChange, label, enforcer, className, validator } = props
    const helperText = props.helperText ?? "error"
    const [value, setValue] = useState<string>(props.value ?? "")

    const readOnly = props.readOnly ?? false

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let newVal = event.target.value
        if (enforcer) {
            newVal = enforcer(newVal)
        }
        if (onChange) {
            onChange(newVal)

        }
        setValue(newVal)
    }

    const validate = () => {
        if (validator) {
            return validator(value)
        }
        return false
    }

    return (
        <TextField
            InputProps={{
                readOnly,
            }}
            required={props.required ?? false}
            error={validate()}
            helperText={validate() ? helperText : ""}
            className={className}
            label={label}
            value={value}
            onChange={handleChange}
        />
    )
}
