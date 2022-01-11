import {OverlayTrigger, Tooltip} from "react-bootstrap";
import React from "react";

function OverlayTriggerWrapper(props){
    return (
            <OverlayTrigger
                key="right"
                placement="right"
                overlay={
                    <Tooltip id="tooltip-right" style={{display: (props.msg === '') ? "none" : "inline" }}>
                        { props.msg }
                    </Tooltip>
                }
            >
                {props.children}
            </OverlayTrigger>
    );
}

export default OverlayTriggerWrapper;
