const __get = (uri) => {
    return fetch(process.env.REACT_APP_API + uri)
        .then(res => res.json())
}
const __post = (uri, data) => {
    return fetch(process.env.REACT_APP_API + uri, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
const __put = (uri, data) => {

}
const __delete = (uri) => {
    return fetch(process.env.REACT_APP_API + uri, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    });
}
export { __get, __post, __put, __delete };