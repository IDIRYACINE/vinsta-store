import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { setDisplayedProduct, useAppDispatch } from "@storefront/store";
import { Repository } from "@vinstacore";
import { useRouter } from "next/navigation";


interface ProductCardProps {
    product: Repository.Product
}

export function ProductCard(props: ProductCardProps) {

    const { product } = props
    const router = useRouter()
    const dispatch = useAppDispatch()

    function navigateToProduct() {
        dispatch(setDisplayedProduct(product))
        router.push(`/product`)
    }


    return (
        <Card>
            <CardActionArea onClick={navigateToProduct}>
                <CardMedia
                    sx={{ height: 140, width: 140 }}
                    image={product.imageUrls[0].url}
                    title={product.name}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )

}