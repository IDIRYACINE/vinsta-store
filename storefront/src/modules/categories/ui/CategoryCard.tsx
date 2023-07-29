import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { setDisplayedCategory, useAppDispatch } from "@storefront/store";
import { Repository } from "@vinstacore";
import { useRouter } from "next/navigation";


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