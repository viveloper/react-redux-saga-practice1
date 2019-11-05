import Axios from "axios";

async function signin(username, password) {
    try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        for (const user of users) {
            if (user.username === username) {
                if (password === '123456') {                    
                    return {
                        username: user.username,
                        token: 'abcdefg'
                    };
                }
            }
        }
        throw new Error('username or password is wrong.');
    }
    catch (error) {
        throw new Error(error.toString());
    }
}

export default signin;