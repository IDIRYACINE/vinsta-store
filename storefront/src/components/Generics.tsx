import { Box, Card, CardActionArea, CardMedia, Container, Button, Typography } from "@mui/material"
import { useState, ReactNode } from "react"
import { Repository } from "@vinstacore"

interface DisplayImageProps {
    image: Repository.Image,
    handleClick: (image: Repository.Image) => void,
    size: { height: string | number, width: string | number }
}

function DisplayImage(props: DisplayImageProps) {
    const { image, size } = props

    function handleClick() {
        props.handleClick(image)
    }

    return (
        <Card>
            <CardActionArea onClick={handleClick} sx={{ padding: "0.5rem" }}>
                <CardMedia image={image.url} sx={size} />
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

    const featuredSize = {
        height: "60vh",
        width: "40vw"
    }

    const miniSize = {
        height: "10vh",
        width: "10vw"
    }

    const featuredProps = {
        image: selectedImage,
        size: featuredSize,
        handleClick: selectImage
    }

    const previewProps = {
        size: miniSize,
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
