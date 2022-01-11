export default function getQueryString(req) {
  const queryIndex = req.originalUrl.indexOf('?');
  const queryString = (queryIndex >= 0) ?
      req.originalUrl.slice(queryIndex + 1) :
      '';

  console.log(queryString);

  console.log(decodeURIComponent(queryString));

  return decodeURIComponent(queryString);
}
