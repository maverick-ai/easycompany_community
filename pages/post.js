import { useRef, useState } from "react";
import axios from "axios";
import TagsInput from "../components/InputTag";
export default function createpost() {

    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);

    const title = useRef(); 
    const body = useRef();
    const author = useRef();
    async function sendpost() {
        const post = json.stringify({
            title: title.current.value,
            body: body.current.value,
            author: author.current.value
        });

        const categories = [];

        tags.map((tag) => {
            categories.push({categoryForPost: tag});
        })

        axios.post(PostUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host': '127.0.0.1:8000'
            },
            body: post
        })
        .then((response) => {
            // dispatch({type: FOUND_USER, data: response.data[0]})
            console.log(response.data);
        })
        .catch ((error) => {
            // dispatch({type: ERROR_FINDING_USER})
            console.log(error);
        })

        axios.post(CatUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host': '127.0.0.1:8000'
            },
            body: {categories: categories}
        })
        .then((response) => {
            // dispatch({type: FOUND_USER, data: response.data[0]})
            console.log(response.data);
        })
        .catch ((error) => {
            // dispatch({type: ERROR_FINDING_USER})
            console.log(error);
        })      
    }

   return ( 
    <div>
        <h1>Create Post</h1>
        <form onSubmit={sendpost}>
            <input type="text" ref={title} placeholder="Title" />
            <input type="text" ref={body} placeholder="Body" />
            <input type="text" ref={author} placeholder="Author" />
            <TagsInput tags={tags} input={input} changeInput={setInput} changeTags={setTags} />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}