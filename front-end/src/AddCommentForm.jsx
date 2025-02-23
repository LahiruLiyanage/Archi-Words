import { useState } from "react";

export default function AddCommentForm({ onAddComment }) {
    const [nameText, setNameText] = useState(null);
    const [commentText, setCommentText] = useState(null);

    return (
        <div>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type= 'text' value={nameText} onChange={e => setNameText(e.target.value)} />
            </label>
            <label>
                Comment:
                <input type= 'text' value={commentText} onChange={e => setCommentText(e.target.value)} />
            </label>
            <button onClick={() => onAddComment( nameText, commentText )}>Add Comment</button>
        </div>
    )
}