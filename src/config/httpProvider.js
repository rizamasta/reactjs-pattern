const getData = (uri) => {
    return fetch(process.env.REACT_APP_API + uri)
        .then(res => res.json())
}
const postData = (uri, data) => {
    return fetch(process.env.REACT_APP_API + uri, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
const putData = (uri, data) => {

}
const delData = (uri, param) => {

}
export { getData, postData, putData, delData };