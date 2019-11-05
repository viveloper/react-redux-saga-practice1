import Axios from "axios";

async function fetchPosts() {
    try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;        
        return posts;
    }
    catch (error) {
        throw new Error(error.toString());
    }
}

export default fetchPosts;