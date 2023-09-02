'use client'

import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus";
import { Button, MenuItem, InputLabel, FormControl, Select, SelectChangeEvent } from "@mui/material";
import clsx from "clsx";
import { ColorEntity, Repository, SizeEntity } from "@vinstacore/index";
import { useState } from "react";

interface BaseContainedButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

function BaseContainedButton(props: BaseContainedButtonProps) {
    const className = clsx([props.className])

    return (
        <Button className={className} onClick={props.onClick} variant="contained">
            {props.children}
        </Button>
    )
}


interface CategoriesSelectorProps {
    categories: Repository.Category[];
    onChange: (categoryId: string) => void;
    className?: string
}


function CategoriesSelector(props: CategoriesSelectorProps) {
    const { onChange, categories, className } = props


    function handleChange(event: SelectChangeEvent<string>) {
        onChange(event.target.value)
    }

    const labelId = "category-select-label"
    return (
        <FormControl className={className}>
            <InputLabel id={labelId}>Category</InputLabel>
            <Select
                labelId={labelId}
                id="category-select"
                label="Category"
                onChange={handleChange}
            >
                {categories.map(category => {
                    return (
                        <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>

                    )
                })}

            </Select>
        </FormControl>

    )
}


interface ColorSelectorProps {
    colors: ColorEntity[];
    onChange: (colorId: string) => void;
    className?: string
    value?: number |string

}

function ColorsSelector(props: ColorSelectorProps) {
    const { onChange, colors, className } = props
    const labelId = "color-select-label"

    const [value,setValue] = useState<ColorEntity>(findColorEntity(props.value??""))

    function handleChange(event: SelectChangeEvent<string>) {
        const colorEntity = findColorEntity(event.target.value)
        onChange(event.target.value)
        setValue(colorEntity)
    }

    function findColorEntity(colorId: string|number) : ColorEntity  {
        return colors.find(color => color.id.equalsRaw(colorId))!
    }

    return (
        <FormControl className={className}>
            <InputLabel id={labelId}>Color</InputLabel>
            <Select
                labelId={labelId}
                id="color-select"
                label="Color"
                onChange={handleChange}
                value={value?.id.value.toString()}

            >
                {colors.map(color => {
                    return (
                        <MenuItem key={color.id.value} value={color.id.value}>{color.color.value}</MenuItem>

                    )
                })}

            </Select>
        </FormControl>

    )
}


interface SizeSelectorProps {
    sizes: SizeEntity[];
    onChange: (sizeId: string) => void;
    className?: string,
    value?: number |string
}


function SizesSelector(props: SizeSelectorProps) {
    const { onChange, sizes, className } = props

    const [value,setValue] = useState<SizeEntity>(findSizeEntity(props.value??""))

    const labelId = "sizes-select-label"

    function findSizeEntity(sizeId: string|number) : SizeEntity  {
        return sizes.find(size => size.id.equalsRaw(sizeId))!
    }

    function handleChange(event: SelectChangeEvent<string>) {
        const sizeEntity = findSizeEntity(event.target.value)

        onChange(event.target.value)
        setValue(sizeEntity)
    }

    return (
        <FormControl className={className}>
            <InputLabel id={labelId}>Size</InputLabel>
            <Select
                labelId={labelId}
                id="sizes-simple-select"
                label="Size"
                value={value?.id.value.toString()}
                onChange={handleChange}
            >
                {sizes.map(size => {
                    return (
                        <MenuItem key={size.id.value} value={size.id.value}>{size.size.value}</MenuItem>

                    )
                })}

            </Select>
        </FormControl>

    )
}



interface OrderStatusSelectorProps {
    statusList: OrderStatus[];
    value : string;
    onChange: (orderStatusName: string) => void;
}
function OrderStatusSelector(props: OrderStatusSelectorProps) {
    const { onChange, statusList,value } = props

    function handleChange(event: SelectChangeEvent<string>) {
        onChange(event.target.value)
    }

    return (

        <Select
            labelId="status-select-label"
            id="order-status-select"
            label="OrderStatus"
            onChange={handleChange}
            value={value}
        >
            {statusList.map(status => {
                return (
                    <MenuItem key={status.name} value={status.name}>{status.name}</MenuItem>

                )
            })}

        </Select>

    )
}


export { BaseContainedButton, CategoriesSelector, SizesSelector, ColorsSelector, OrderStatusSelector }