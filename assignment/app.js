const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write(
      `<html> 
        <head> 
            <title> Enter Message </title> 
        </head> 
        <body> 
            <h1> Welcome </h1>
            <form action="/create-user" method="POST">
                <input name="username" type="text" />
                <button type="submit"> Login </button>
            </form>
        </body> 
      </html>`
    )
    return res.end()
  }

  if (url === '/users') {
    res.write(
      `<html> 
        <head> 
            <title> Enter Message </title> 
        </head> 
        <body> 
            <ul> 
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 4</li>
            </ul>
        </body> 
      </html>`
    )
    return res.end()
  }

  if (url === '/create-user') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody.split('=')[1])
    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
})

server.listen(3333)
