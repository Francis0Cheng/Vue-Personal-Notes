// 需求：封装一个方法，给一个文件的路径，把文件内容返回。

const fs = require('fs')
const path = require('path')

// 普通的文件读取方式

/*
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
})
*/


/*
我们可以规定callback中两个参数，第一个失败结果，第二个成功结果
同时我们规定，如果成功后返回的结果应该位于callback的第二个位置， 此时第一个 位置没有出错，所以防止一个null；如果失败了，则第一个位置放置Error，第二个防止一个undefined 
*/


/*
function getFilesByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return callback(err)
        // return dataStr   return会因为这个函数是异步的原因不能返回值
        callback(dataStr)
    })
}

let res = getFilesByPath(path.join(__dirname,'./files/1.txt'),(dataStr)=>{
    console.log(dataStr)
})
*/

/*
Promise
Promise是一个构造函数，可以使用new Promise() 得到一个Promise 的实例
在promise 上，有两个函数，分别 叫做 resolve（成功之后的回调函数） 和 reject（失败之后的回调函数）
在Promise构造函数的 Prototype 属性上，有一个 .then() 方法，也就是说，只要是Promise 够咱函数创建的实例，都可以访问到 .then() 方法
Promise表示一个异步操作，每当我们 new 一个 Promise 的实例，这个实例，就表示一个具体的异步操作
这个异步操作的结果只能有两种状态，状态1：成功；状态2：失败
*/