"use client"

import { setDisplayedCategory } from "@adminapp/store";
import { useAppDispatch } from "@adminapp/store/clientHooks";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Repository } from "@vinstacore/index";


interface CategoryCardProps {
    category: Repository.Category
}

export default function CategoryCard(props: CategoryCardProps) {

    const { category } = props
    const dispatch = useAppDispatch()

    function navigateToCategory() {
        dispatch(setDisplayedCategory(category.id))
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