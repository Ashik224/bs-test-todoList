import { TASK_URL } from "../constants/urls/tasks.url"

export const getTasks = async () => {
    const response = await fetch(TASK_URL);
    const data = await response.json();
    return data;
}

export const postTask = async (data) => {
    const response = await fetch(TASK_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type' : 'application/json'}
    })
    const value = await response.json();
    return value;
}

export const updateTask = async (value, id) => {
    const response = await fetch(`${TASK_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(value),
        headers: {'Content-type' : 'application/json'}
    })
    const data = await response.json()
    return data;
}

export const deleteTask = async (id) => {
    const response = await fetch(`${TASK_URL}/${id}`, {
        method: 'DELETE',
        headers: {'Content-type' : 'application/json'}
    })
    const value = await response.json();
    return value;
}