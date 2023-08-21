"use client"

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import {  useAppDispatch } from "@vinstacore/store/clientHooks";
import { Repository } from "@vinstacore/index";
import { useRouter } from "next/navigation";
import { setDisplayedCategory } from "@vinstacore/store/customer/slices/productsSlice";


interface CategoryCardProps {
    category: Repository.Category
}

export function CategoryCard(props: CategoryCardProps) {

    const { category } = props
    const router = useRouter()
    const dispatch = useAppDispatch()

    function navigateToCategory() {
        dispatch(setDisplayedCategory(category.id))
        router.replace(`/category`)
    }


    return (
        <Card>
            <CardActionArea onClick={navigateToCategory}>
                <CardMedia
                    sx={{ height: "50vh", width: "100%" }}
                    image={category.imageUrl}
                    title={category.name}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {category.description}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )

}