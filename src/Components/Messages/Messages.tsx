import React from "react";
import s from './Messages.module.css'

type MessagesProps = {
    message: string
}

const Messages = (props: MessagesProps) => {
    return (
        <div>
            <div className={s.messages}>
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}

export default Messages