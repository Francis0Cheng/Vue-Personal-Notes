// 需求：封装一个方法，给一个文件的路径，把文件内容返回。

const fs = require('fs')
const path = require('path')


function getFileByPath(fpath){
    // let promise = new Promise(function(resolve,reject){
    //     fs.readFile(fpath,'utf-8',(err,dataStr)=>{
    //         if(err) return reject(err)
    //         resolve(dataStr)
    //     })
    // })
    // return promise
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}


// 通过.then指定的回调函数，成功的回调必须传。失败的可以省略
// 在上一个.then中，可以返回一个新的promise实例，可以继续使用下一个.then来处理
// getFileByPath('./files/1.txt')
// .then(function(data){
//     console.log("MY-DATA:"+data)
//     return getFileByPath('./files/2.txt')
// },function(err){
//     console.log("MY-ERROR:"+err)
// }).then(function(data){
//     console.log("MY-DATA:"+data)
//     return getFileByPath('./files/3.txt')
// },function(err){
//     console.log("MY-ERROR:"+err)
// }).then(function(data){
//     console.log("MY-DATA:"+data)
// },function(err){
//     console.log("MY-ERROR:"+err)
// })

// getFileByPath('./files/11.txt')
// .then(data=>{
//     console.log("MY-DATA:"+data)
//     return getFileByPath('./files/2.txt')
// },err=>{
//     console.log(err)
//     return getFileByPath('./files/2.txt')
// }).then(data=>{
//     console.log("MY-DATA:"+data)
//     return getFileByPath('./files/3.txt')
// }).then(data=>{
//     console.log("MY-DATA:"+data)
// })
// console.log("okok")


// 中间异常捕获
// 中间有错误，立即停止以后的操作，进入catch捕获异常
getFileByPath('./files/1.txt')
.then(data=>{
    console.log("MY-DATA:"+data)
    return getFileByPath('./files/12.txt')
}).then(data=>{
    console.log("MY-DATA:"+data)
    return getFileByPath('./files/3.txt')
}).then(data=>{
    console.log("MY-DATA:"+data)
}).catch(err=>{
    console.log(err.message)
})
console.log("okok")