export default function AddCommentForm({ onAddComment }) {
    return (
        <div>
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type={'text'} />
            </label>
            <label>
                Comment:
                <input type={'text'} />
            </label>
        </div>
    )
}