export default function getQueryString(req){
    let queryIndex = req.originalUrl.indexOf('?');
    let queryString = (queryIndex >= 0) ? req.originalUrl.slice(queryIndex + 1) : '';

    console.log(queryString);

    console.log(decodeURIComponent(queryString));

    return decodeURIComponent(queryString);
}
