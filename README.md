# HTTP Status Codes

HTTP status codes indicate the result of an HTTP request. Here are some commonly used status codes and their meanings:

- **1xx Informational**:
  - **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
  - **101 Switching Protocols**: The server is switching protocols according to the Upgrade header sent by the client.

- **2xx Success**:
  - **200 OK**: The request was successful.
  - **201 Created**: The request has been fulfilled, and a new resource has been created.
  - **204 No Content**: The server successfully processed the request but does not need to return any content.

- **3xx Redirection**:
  - **301 Moved Permanently**: The requested resource has been permanently moved to a new location.
  - **302 Found**: The requested resource has been temporarily moved to a different location.
  - **304 Not Modified**: Indicates that the resource has not been modified since the last request.

- **4xx Client Errors**:
  - **400 Bad Request**: The server cannot process the request due to a client error.
  - **401 Unauthorized**: The request requires user authentication.
  - **403 Forbidden**: The server understood the request but refuses to authorize it.
  - **404 Not Found**: The server cannot find the requested resource.

- **5xx Server Errors**:
  - **500 Internal Server Error**: A generic error message indicating that an unexpected condition was encountered.
  - **502 Bad Gateway**: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  - **503 Service Unavailable**: The server is currently unable to handle the request due to a temporary overload or maintenance.

Understanding these status codes can help you diagnose and fix issues when working with web servers and APIs.
