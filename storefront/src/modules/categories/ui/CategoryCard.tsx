import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Repository } from "@vinstacore";


interface CategoryCardProps {
    category: Repository.Category
}

export function CategoryCard(props: CategoryCardProps) {

    const { category } = props


    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140 }}
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