import { FormControl, Select, InputLabel, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import { Repository } from "@vinstacore";
import { ChangeEvent, useState } from "react";


interface DestinationSelectorProps {
    destinations: Repository.Destination[],
    destination : Repository.Destination,
    selectDestination : (destination : Repository.Destination) => void
}
export function DestinationSelector(props: DestinationSelectorProps) {
    const { destinations,destination,selectDestination } = props



    const updateDestination = (event: SelectChangeEvent) => {
        const targetName = event.target.value as string
        const newDestination = destinations.find(element => element.name === targetName)
        if (newDestination !== undefined) {
            selectDestination(newDestination);

        }
    }


    return (
        <FormControl fullWidth>
            <InputLabel id="destination-select-label">Addresse</InputLabel>
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
    )
}


interface AppTextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;

}

export function AppTextField(props: AppTextFieldProps) {
    const { onChange, label, value,className } = props

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