import { FormControl, Box, Select, InputLabel, Typography, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import { Destination, DeliveryType, DeliveryTypeEnum, calculateDeliveryPrice } from "@vinstacore";
import { ChangeEvent, useState } from "react";

interface DestinationSelectorProps {
    destinations: Destination[],
    destination: Destination,
    selectDestination: (destination: Destination) => void,
    deliveryTypes: DeliveryType[],
    deliveryType: DeliveryType,
    selectDeliveryType: (deliveryType: DeliveryType) => void,
    homeAddress: string ,
    onHomeAddressChange: (value: string) => void
}

export function DestinationSelector(props: DestinationSelectorProps) {
    const { destinations, destination, selectDestination } = props
    const { deliveryTypes, deliveryType, selectDeliveryType } = props
    const { homeAddress, onHomeAddressChange } = props



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

        <Box >
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
            <Box className="flex flex-row w-full mb-2">

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

                <Typography className="w-full" variant="h6">Delivery Price : {calculateDeliveryPrice(deliveryType, destination)}</Typography>

            </Box>
            {
                deliveryType.isDeliverHome ?

                    <TextField 
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
    value: string;
    onChange: (value: string) => void;
    className?: string;

}

export function AppTextField(props: AppTextFieldProps) {
    const { onChange, label, value, className } = props

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
    }

    return (
        <TextField
            className={className}
            label={label}
            value={value}
            onChange={handleChange}
        />
    )
}