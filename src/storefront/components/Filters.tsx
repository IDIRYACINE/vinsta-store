"use client"

import { Box, Grid,Toolbar, Paper, ToggleButtonGroup, ToggleButton, Container, Slider, FormControl, InputLabel, MenuItem, Popover, Select, SelectChangeEvent, Typography, } from "@mui/material"
import { useState, MouseEvent, useEffect, useRef } from "react"
import { FilterType, IProductFilter, ProductPriceFilter, sizes, SizeEntity, ProductSizeFilter, ColorEntity, ProductColorFilter, colors } from "@vinstacore/index"
import clsx from "clsx"
import { usePathname, } from "next/navigation"
import { CategoryNavigation } from "@storefront/modules/categories/ui/CategoryNavigation"

interface ToggleFilterProps<T> {
    items: T[],
    extractItemName: (item: T) => string,
    extractItemId: (item: T) => string,
    updateFilter: (items: T[]) => void,
    name: string
}

function ToggleFilterGroup<T>(props: ToggleFilterProps<T>) {

    const { items, extractItemId, extractItemName, name, updateFilter } = props
    const [selections, setSelections] = useState<string[]>(() => []);


    function handleChange(event: MouseEvent<HTMLElement>,
        newSelections: string[],) {
        setSelections(newSelections)

        const targetItems = items.filter((item) =>
            newSelections.includes(extractItemId(item))
        )

        updateFilter(targetItems)

    }



    return (
        <div className="flex flex-col justify-center items-start w-full p-2">
            <Typography>{name}</Typography>
            <ToggleButtonGroup
                size="small"
                sx={{
                    width : "100%",
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    gridGap: "0.5rem",
                    padding: "1rem",
                }}
                value={selections}
                onChange={handleChange}
            >
                {
                    items.map((item) => {
                        const id = extractItemId(item)

                        return <ToggleButton key={id} value={id}>{extractItemName(item)} </ToggleButton>
                    })
                }
            </ToggleButtonGroup>
        </div>


    )
}

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
    const [range, setRange] = useState<number[]>([min, max]);


    const updateFilter = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number[]);
        setRange(newValue as number[])
    };


    function valuetext(value: number) {
        return `${value} Da`
    }


    return (


        <Container className=" flex flex-col justify-center items-start w-full p-2 ">
            <Typography id="range-slider" >Price</Typography>
            <div className="flex flex-row justify-center items-center px-3 w-full">
            <Slider
                getAriaLabel={() => name}
                value={range}
                min={min}
                max={max}
                onChange={updateFilter}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
            </div>
        </Container>

    )

}


interface ProductFilterSearchProps {
    onFilterChange: (filters: IProductFilter[]) => void,
    className?: string,
    filters: IProductFilter[]
}
export function ProductFilterSearch(props: ProductFilterSearchProps) {
    const { onFilterChange } = props
    let filters = [...props.filters]

    const pathName = usePathname()

    const isInProductPage = useRef(false)

    useEffect(() => {
        isInProductPage.current = pathName.includes("category")
    },[pathName, isInProductPage])


    const className = clsx([
        "flex flex-col justify-start items-center h-full py-2 overflow-y-scroll overflow-x-hidden",
        props.className
    ])


    function setPriceFilter(value: number[]) {
        const priceFilterIndex = filters.findIndex(filter => filter.id === FilterType.Price)

        const priceFilter = ProductPriceFilter(value[0], value[1])

        if (priceFilterIndex !== -1) {
            filters[priceFilterIndex] = priceFilter
        }
        else {
            filters.push(priceFilter)
        }

        onFilterChange([...filters])
    }

    function setSizeFilter(items: SizeEntity[]) {
        const sizeFilterIndex = filters.findIndex(filter => filter.id === FilterType.Size)

        const sizeFilter = ProductSizeFilter(items)

        if (sizeFilter.remove) {
            filters = filters.filter((_, index) => index !== sizeFilterIndex)
        }

        else if (sizeFilterIndex !== -1) {
            filters[sizeFilterIndex] = sizeFilter
        }
        else {
            filters.push(sizeFilter)
        }

        onFilterChange([...filters])

    }


    function setColorFilter(items: ColorEntity[]) {
        const colorFilterIndex = filters.findIndex(filter => filter.id === FilterType.Color)

        const colorFilter = ProductColorFilter(items)

        if (colorFilter.remove) {
            filters = filters.filter((_, index) => index !== colorFilterIndex)
        }

        else if (colorFilterIndex !== -1) {
            filters[colorFilterIndex] = colorFilter
        }
        else {
            filters.push(colorFilter)
        }

        onFilterChange([...filters])

    }

    const priceFilterProps = {
        name: "Price Filter",
        onChange: setPriceFilter,
        min: 100,
        max: 2000
    }

    const sizeFilterProps = {
        name: "Size",
        items: sizes,
        extractItemName: (item: SizeEntity) => item.size.value,
        extractItemId: (item: SizeEntity) => item.id.value.toString(),
        updateFilter: setSizeFilter,
    }

    const colorFilterProps = {
        name : "Color",
        items: colors,
        extractItemName: (item: ColorEntity) => item.color.value,
        extractItemId: (item: ColorEntity) => item.id.value.toString(),
        updateFilter: setColorFilter,
    }

    return (
        <Paper className={className}>
            <Toolbar/>
            <CategoryNavigation />

            {isInProductPage.current ? <FilterRangeButton {...priceFilterProps} />
                : null}
            {isInProductPage.current ? <ToggleFilterGroup {...sizeFilterProps} />
                : null}
            {isInProductPage.current ? <ToggleFilterGroup {...colorFilterProps} />
                : null}


        </Paper>)
}