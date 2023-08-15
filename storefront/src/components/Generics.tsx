import { Box, Card, CardActionArea, CardMedia, Container, Button, Typography } from "@mui/material"
import { useState, ReactNode } from "react"
import { Repository } from "@vinstastore/vinstacore"

interface DisplayImageProps {
    image: Repository.Image,
    handleClick: (image: Repository.Image) => void,
    className : string
}

function DisplayImage(props: DisplayImageProps) {
    const { image, className } = props

    function handleClick() {
        props.handleClick(image)
    }

    return (
        <Card>
            <CardActionArea onClick={handleClick} sx={{ padding: "0.5rem" }}>
                <CardMedia image={image.url} className={className} />
            </CardActionArea>
        </Card>
    )
}

interface DisplayImageRosterProps {
    images: Repository.Image[]
}
export function DisplayImageRoster(props: DisplayImageRosterProps) {

    const { images } = props

    const [selectedImage, selectImage] = useState(images[0])

    const featuredSize = "w-96 h-96"

    const miniSize = "w-10 h-10"

    const featuredProps = {
        image: selectedImage,
        className: featuredSize,
        handleClick: selectImage
    }

    const previewProps = {
        className: miniSize,
        handleClick: selectImage
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: "row" }}>

            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                {images.map(image => {
                    return <DisplayImage image={image} {...previewProps} key={image.id} />
                })}
            </Box>

            <DisplayImage {...featuredProps} />


        </Box>
    )

}

interface AppBodyProps {
    children: ReactNode
}
export function AppBody(props: AppBodyProps) {
    const appBarHeight = '5rem'

    const containerStyle = {
        paddingTop: appBarHeight
    }


    return (
        <Container sx={containerStyle}>
            {
                props.children
            }
        </Container>

    )
}


interface ActionsRowProps {
    onCancel: () => void,
    onConfirm: () => void
}

export function ActionsRow(props: ActionsRowProps) {
    const { onCancel, onConfirm } = props

    const boxStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }

    return (
        <Container sx={boxStyle}>
            <Button onClick={onCancel} >Cancel</Button>
            <Button onClick={onConfirm} >Confirm</Button>

        </Container>
    )
}
