/* Subclass of Error for representing HTTP errors returned from the API.
   Exposes a status (the HTTP response status code) and message (a user-facing message). */
export class HTTPError extends Error {

  constructor(status, message) {
    super(message);
    
    this.status = status;
  }
}

/* Make an API request.
   - method is the HTTP method.
   - path is the URI. It must begin with a /. API_URL will be prepended.
   - body (optional) is the request body as a JS object that can be converted to JSON.

   The API is assumed to return JSON. If the response status is 200, the response body (as a JS object) is returned.
   If the response has any other status, an HTTPError is thrown, with its status set to the response status and its
   message set to value of the "error" property of the response, which we assume is a user-facing error message. */
const apiRequest = async (method, path, body = null) => {  
  let res;

  /* Change fetch request based on input parameters. */
  if (!body) {
    res = await fetch(`${path}`, {
      method,
    });
  } else {
    res = await fetch(`${path}`, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }
  const data = await res.json();

  /* If the above fetch request isn't successful, throw a new HTTPError with the error status and error message. */
  if (res.status !== 200) {
    throw new HTTPError(res.status, data.error);
  }

  /* Otherwise, return the JSON object we receive. */
  return data;
};

export default apiRequest;