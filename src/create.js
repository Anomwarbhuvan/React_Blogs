import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anom');
    const [isPending, setIspending] = useState(false);

    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIspending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("new blog added");
                setIspending(false);
                // history.go(-1);
                history.push('/');
            });


    }

    return (
        <div className="create">
            <h2>Add a New Spam</h2>
            <form onSubmit={handleSubmit}>
                <label>Spam title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Spam Body : </label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} ></textarea>

                <label>Spam Author : </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Anom">Anom</option>
                    <option value="Aditya">Aditya</option>
                </select>
                {!isPending && <button>Add Spam</button>}
                {isPending && <button disabled>Adding  Spam......</button>}

            </form>


        </div>);
}

export default Create;