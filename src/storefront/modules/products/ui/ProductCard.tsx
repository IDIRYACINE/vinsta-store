import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { setDisplayedProduct } from "@vinstacore/store/customer/slices/productsSlice";
import { Repository } from "@vinstacore/index";
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
            <CardActionArea className="relative" onClick={navigateToProduct}>
                <CardMedia
                    sx={{ height: "40vh", width: "100%" }}
                    image={product.imageUrls[0].url}
                    title={product.name}
                />

                <CardContent className="flex flex-col justify-end items-start absolute top-0 left-0 w-full h-full backdrop-brightness-50">

                    <div className="border-2 border-white flex flex-row p-1">
                        <Typography color="white" gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>

                        <Typography color="white" variant="body2" >
                            {product.price} DA
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}