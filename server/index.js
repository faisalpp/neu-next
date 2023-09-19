const express = require('express');
const cors = require('cors');
const router = require('../server/routes')
const errorHandler = require('../server/middleware/errorHandler')
const dbconnect = require('../server/databse')
const cookieParser = require('cookie-parser')
const next = require('next');
const server = express();

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000","https://neuoutletapp-03ffb1b9719f.herokuapp.com"],
};


server.use(cookieParser())
// Increase payload size limit for JSON requests
server.use(express.json({ limit: '10mb' }));

// Increase payload size limit for URL-encoded requests
server.use(express.urlencoded({ limit: '10mb', extended: true }));
server.use(express.json());

server.use(cors(corsOptions))




const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  //  server.use('/api',routes)
   server.use(router);
  // Serve the Next.js app
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  // Define your API endpoints here, if needed  
  server.use(errorHandler);
  
  dbconnect().then(()=>{
    server.listen(process.env.PORT,()=>{
        console.log(`Server Started on port: ${process.env.PORT}`)
    });
  })
});

