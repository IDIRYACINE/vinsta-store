'use client'

import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import clsx from "clsx";
import { Repository } from "vinstacore/src";

interface BaseContainedButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

function BaseContainedButton(props: BaseContainedButtonProps) {
    const className = clsx([props.className, "bg-purple-500"])

    return (
        <Button className={className} onClick={props.onClick} variant="contained">
            {props.children}
        </Button>
    )
}


interface CategoriesSelectorProps {
    categories: Repository.Category[];
    onChange: (categoryId: string) => void;
}


function CategoriesSelector(props: CategoriesSelectorProps) {
    const { onChange, categories } = props


    function handleChange(event: SelectChangeEvent<string>) {
        onChange(event.target.value)
    }

    return (

        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            onChange={handleChange}
        >
            {categories.map(category => {
                return (
                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>

                )
            })}

        </Select>

    )
}



interface OrderStatusSelectorProps {
    statusList: OrderStatus[];
    onChange: (orderStatusName: string) => void;
}
function OrderStatusSelector(props: OrderStatusSelectorProps) {
    const { onChange, statusList } = props


    function handleChange(event: SelectChangeEvent<string>) {
        onChange(event.target.value)
    }

    return (

        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="OrderStatus"
            onChange={handleChange}
        >
            {statusList.map(status => {
                return (
                    <MenuItem key={status.name} value={status.name}>{status.name}</MenuItem>

                )
            })}

        </Select>

    )
}


export { BaseContainedButton, CategoriesSelector,OrderStatusSelector }