import React from 'react';

const Message = (props) => {
    let color;
    if (props.status === "error") { color = "danger" } else if (props.status === "info") { color = "info" } else if (props.status === "success") { color = "success" }
    return (
        <div className={`text-${color} text-center `}>
            <b>{props.message}</b>
        </div>
    )
}
export default Message;