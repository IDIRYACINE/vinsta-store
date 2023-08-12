import { Box, Button, Container, Slider, FormControl, InputLabel, MenuItem, Popover, Select, SelectChangeEvent, Typography } from "@mui/material"
import React from "react"
import { FilterType, IProductFilter, ProductPriceFilter } from "@vinstastore/vinstacore"

interface FilterButtonProps<T> {
    name: string,
    value: T,
    onChange: (value: T) => void,
    options: T[],
    extractOptionsName: (option: T) => string,
    extractOptionsId: (option: T) => string
}

function FilterButton<T>(props: FilterButtonProps<T>) {
    const { name, value, onChange, options, extractOptionsName, extractOptionsId } = props

    const id = `filter-button-${name}`
    const inputLabelId = `filter-button-label-${name}`
    const labelId = `filter-button-label-${name}`

    function updateFilter(event: SelectChangeEvent) {
        const tagetId = event.target.value as string
        const newFilterValue = options.find(element => extractOptionsId(element) === tagetId)
        if (newFilterValue !== undefined) {
            onChange(newFilterValue);
        }
    }


    return (<FormControl fullWidth className="mr-2">
        <InputLabel id={inputLabelId}>Destination</InputLabel>

        <Select
            labelId={labelId}
            id={id}
            value={extractOptionsId(value)}
            label={name}
            onChange={updateFilter}
        >
            {
                options.map(
                    (option) => {
                        return <MenuItem value={extractOptionsName(option)} key={extractOptionsId(option)}>{extractOptionsName(option)}</MenuItem>
                    }
                )
            }
        </Select>
    </FormControl >)
}


interface FilterRangeButtonProps {
    name: string,
    onChange: (value: number[]) => void,
    min: number,
    max: number

}

function FilterRangeButton(props: FilterRangeButtonProps) {
    const { min, max, name, onChange, } = props
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [range, setRange] = React.useState<number[]>([min, max]);

    const id = `filter-range-button-${name}`

    const updateFilter = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number[]);
        setRange(newValue as number[])
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function valuetext(value: number) {
        return `${value} Da`
    }

    const open = Boolean(anchorEl);

    return (

        <Container className="mr-2">

            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                {name}
            </Button>

            <Popover sx={{ width: "30%", height: "20%" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

            >
                <Container sx={{ width: "20rem", height: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Slider
                        getAriaLabel={() => name}
                        value={range}
                        min={min}
                        max={max}
                        onChange={updateFilter}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Container>
            </Popover>
        </Container>
    )

}


interface ProductFilterSearchProps {
    onFilterChange: (filters: IProductFilter[]) => void
}
export function ProductFilterSearch(props: ProductFilterSearchProps) {
    const { onFilterChange } = props
    const filters: IProductFilter[] = []


    function setPriceFilter(value: number[]) {
        const priceFilterIndex = filters.findIndex(filter => filter.id === FilterType.Price)

        const priceFilter = ProductPriceFilter(value[0], value[1])

        if (priceFilterIndex !== -1) {
            filters[priceFilterIndex] = priceFilter
            return
        }
        filters.push(priceFilter)

        onFilterChange([...filters])
    }

    const priceFilterProps = {
        name: "Price Filter",
        onChange: setPriceFilter,
        min: 100,
        max: 2000
    }

    return (<Box className="flex flex-row justify-evenly w-full">
        <FilterRangeButton {...priceFilterProps} />
    </Box>)
}