function fun () {
  const condition = true
  const val = '变量：此处应该消除'
  if (condition) {
    console.log('if true 条件判断')
    return
    console.log('return：此处应该消除')
  } else {
    console.log('else ：此处应该消除')
  }
}

fun()
