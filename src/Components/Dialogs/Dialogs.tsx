import React from "react";
import s from './Dialogs.module.css'
import Messages from "../Messages/Messages.tsx";
import DialogItem from "../DialogsItem/DialogItem.tsx";

type DialogsProps = {
    dialogs: any
    messages: any
}

const Dialogs = (props: DialogsProps) => {

    const dialogsElements = props.dialogs.map(d => {return <DialogItem id={d.id} name={d.name}/>})
    const messagesElements = props.messages.map(m => {return <Messages id={m.id} message={m.message}/>})

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>

            <div className={s.posts}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs