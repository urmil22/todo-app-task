import axios from "axios"

const getTodoData = async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos",
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

const postTodoData = async ({ title, setPushCounter }) => {
    try {
        const res = await axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/todos",
            data: {
                "userId": 100001,
                "id": Math.random() * 1000,
                "title": title,
                "completed": false
            }
        })
        setPushCounter(prev => prev - 1)
        return res.data;
    }
    catch (error) {
        console.log(error)
    }
}

const patchTodoData = async ({ id, title }) => {
    try {
        const res = await axios({
            method: "PATCH",
            url: `https://jsonplaceholder.typicode.com/todos/${id}`,
            data: {
                "userId": 100001,
                "id": 899,
                "title": title,
                "completed": false
            }
        })
        return res.data;
    }
    catch (error) {
        console.log(error)
    }
}

export { getTodoData, postTodoData, patchTodoData }