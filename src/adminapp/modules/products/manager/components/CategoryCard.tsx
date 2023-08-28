"use client"

import { setDisplayedCategory } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Repository } from "@vinstacore/index";
import Logo from "@common/Logo";


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
            <CardActionArea className="relative" onClick={navigateToCategory}>
                <CardMedia
                    sx={{ height: "50vh", width: "100%" }}
                    image={category.imageUrl}
                    title={category.name}
                />


                <CardContent className="flex flex-col justify-end items-start absolute top-0 left-0 w-full h-full backdrop-brightness-50">

                    <div className="border-2 border-white flex flex-row p-1 items-center">
                        <Logo color="#ffffff" />

                        <Typography className="ml-1" color="white" gutterBottom variant="h5" component="div">
                            {category.name}
                        </Typography>
                    </div>

                </CardContent>
            </CardActionArea>
        </Card>
    )

}