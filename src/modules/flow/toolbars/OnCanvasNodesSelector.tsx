import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {endNodeShapeStyle} from "../nodes/EndNode";
import {activityShapeStyle} from "../nodes/ActivityNode";
import {decisionShapeStyle} from "../nodes/DecisionNode";

export interface OnCanvasNodesToolbarProps {
    open: boolean;
    position: {x: number, y: number}
    onClose: (value: string | null) => void;
}

export default function OnCanvasNodesToolbar(props: OnCanvasNodesToolbarProps) {
    const { onClose, open, position } = props;
    // Change width and height when adding new elements to toolbar
    const width = 160
    const height = 312

    const handleClose = () => {
        onClose(null)
    }

    const handleNodeSelected = (nodeType: string) => {
        onClose(nodeType);
    };

    return (
        <Dialog PaperProps={{
            sx: {
                position: "fixed",
                m: 0,
                left: Math.min(position.x, window.innerWidth - width - 16),
                top: Math.min(position.y, window.innerHeight - height - 16)
            }
        }} onClose={handleClose} open={open}>
            <DialogTitle>Select Node</DialogTitle>
            <div style={{
                paddingBottom: 16,
                background: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                End
                <div style={{ ...endNodeShapeStyle,  marginBottom: 10 }} onClick={() => {
                    handleNodeSelected("endNode")
                }}/>
                Activity
                <div style={{ ...activityShapeStyle, marginBottom: 10 }} onClick={() => {
                    handleNodeSelected("activityNode")
                }}/>
                Decision
                <div style={{ ...decisionShapeStyle, marginBottom: 10, marginTop: 5 }} onClick={() => {
                    handleNodeSelected("decisionNode")
                }}>
                </div>
            </div>
        </Dialog>
    );
}