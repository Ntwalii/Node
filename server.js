// const http=require("http");
// const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method)

//     res.setHeader('Content-Type','text/html')
//     let path='./views/'
//     switch(req.url){
//         case '/':
//             path+='index.html'
//             res.statusCode=200;
//             break;
//         case '/blog':
//             path+='blogs.html'
//             res.statusCode=200;
//             break;
//         case '/blogs':
//             res.statusCode=301;
//             res.setHeader('Location','/blog')
//             res.end();
//             break;
//         default:
//             path+='404.html'
//             res.statusCode=404;
//             break;
//     }

//     fs.readFile(path,(error,data)=>{
//         if(error){
//             console.log(error)
//             res.end()
//         }
//         res.end(data)
//     })
// })

// server.listen(3000,'localhost',()=>{
//     console.log('Listening on server 3000')
// })