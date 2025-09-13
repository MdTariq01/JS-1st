# 📘 Notes on `fetch()`

---

## 1. What is `fetch()`?
- `fetch()` is a **built-in JavaScript function** used to make HTTP requests (like GET, POST, PUT, DELETE) from the browser or Node.js.  
- It returns a **Promise**, which resolves to a `Response` object.  
- Modern alternative to `XMLHttpRequest`.

---

## 2. Syntax
```js
fetch(url, options)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });


  Parameters:

url → the resource endpoint (string).

options (optional) → an object with configuration:

method: HTTP method (GET, POST, PUT, etc.).

headers: HTTP headers (e.g., Content-Type).

body: Data to send (for POST/PUT).
```

## 3. Features

Returns a Promise.

Uses Promises + async/await.

By default:

Method = GET.

fetch only rejects on network failure (not on HTTP error codes like 404 or 500).
→ Need to manually check response.ok.

## 4. Basic Example (GET Request)
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())  // convert to JSON
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Flow:

1. fetch(url) returns a Promise with a Response object.

2. response.json() → another Promise that parses the response body.

3. Final .then(data) → you get the actual data.

## 5. POST Example (sending data)

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'This is a test',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

```

## 6. Handling Errors

```js 
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

response.ok → true if status is between 200–299.

Use .catch for network errors.
```

## 7. Using async/await (cleaner way)

```js
  async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getData();
```

## 8. Comparison with `XMLHttpRequest`

| Feature        | `fetch()`               | `XMLHttpRequest` |
|----------------|-------------------------|------------------|
| Syntax         | Cleaner (Promises)      | Callback-based   |
| Default mode   | Asynchronous            | Sync/Async       |
| Error Handling | Needs `ok` check        | Handles status   |
| Streaming      | Supports `ReadableStream` | Limited        |

---

## 9. Key Points to Remember
- `fetch` always returns a Promise.  
- Use `response.json()`, `response.text()`, or `response.blob()` to read data.  
- Handle errors with `.catch()` or `try/catch`.  
- Need `response.ok` check for HTTP errors.  
- Works best with `async/await`.  
