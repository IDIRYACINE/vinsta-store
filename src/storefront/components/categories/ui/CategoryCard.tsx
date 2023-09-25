"use client"

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { Repository } from "@vinstacore/index";
import { useRouter } from "next/navigation";
import { setDisplayedCategory } from "@vinstacore/store/customer/slices/productsSlice";
import Logo from "@common/Logo";


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
        <Card >
            <CardActionArea className="relative " onClick={navigateToCategory}>
                <CardMedia className=""
                    sx={{ height: "50vh", width: "100%",backgroundColor:'#808080ba', backgroundBlendMode: 'exclusion' }}
                    image={category.imageUrl}
                    title={category.name}
                />

                <CardContent className="flex flex-col justify-end items-start absolute top-0 left-0 w-full h-full ">

                    <div className="border-2 border-white flex flex-row p-1 items-center">
                    <Logo color="#ffffff"/>

                    <Typography className="ml-1" color="white" gutterBottom variant="h5" component="div">
                        {category.name}
                    </Typography>
                    </div>

                </CardContent>
            </CardActionArea>
        </Card>
    )

}