import { Box, Button } from "@mui/material";
import clsx from "clsx";

interface CreatorActionsProps {
    onSave: () => void;
    onCancel: () => void;
    className?: string;

}

function CreatorActions(props: CreatorActionsProps) {
    const className = clsx([
        props.className,
        "flex flex-row justify-end"
    ])
    return (
        <Box className={className}>
            <Button className="mr-2" onClick={props.onCancel} variant="contained">Cancel</Button>
            <Button onClick={props.onSave} variant="contained">Save</Button>
        </Box>
    )
}

interface EditorActionsProps {
    onSave: () => void;
    onCancel: () => void;
    className?: string;
}

function EditorActions(props: EditorActionsProps) {
    const className = clsx([
        props.className,
        "flex flex-row justify-end"
    ])
    return (
        <Box className={className}>

            <Button className="mr-2" onClick={props.onCancel} variant="contained">Cancel</Button>
            <Button onClick={props.onSave} variant="contained">Save</Button>
        </Box>
    )
}

export { CreatorActions, EditorActions }