const http=require('http')
const urlModule=require('url')
const server=http.createServer()


server.on('request', function(req, res){
    //const url=req.url
    const{pathname: url, query} = urlModule.parse(req.url, true)
    if(url==='/getscript')
    {
        var data={
            name:'francis',
            age: 18,
            gender: 'male'

        }
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用
        var scriptStr=  `${query.callback}(${JSON.stringify(data)})`
        //res.end发送给客户端 客户端吧这个字符串当作JS代码去解析执行
        return res.end(scriptStr)
    }else{
        res.end('404')
    }
})


server.listen(3000, function(){
    console.log('server listen at http://127.0.0.1:3000')
})