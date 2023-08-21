import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box } from "@mui/material";
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
            <BaseContainedButton className="mr-2" onClick={props.onCancel} >Cancel</BaseContainedButton>
            <BaseContainedButton onClick={props.onSave} >Save</BaseContainedButton>
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
            <BaseContainedButton className="mr-2 " onClick={props.onCancel} >Cancel</BaseContainedButton>
            <BaseContainedButton onClick={props.onSave} >Save</BaseContainedButton>
        </Box>
    )
}

export { CreatorActions, EditorActions }