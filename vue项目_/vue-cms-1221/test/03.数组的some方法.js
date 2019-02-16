var arr = [1, 2, 3, 4, 5, 6, 7]

// arr.forEach((item, i) => {
//   if (item === 4) {
//     console.log(i)
//   }
//   console.log('ok')
// })

arr.some((item, i) => {
  if (item === 4) {
    console.log(i)
    // 在 some 循环中，如果想要终止后续的循环，则直接 return true 就行；
    return true;
  }
  console.log('ok')
})