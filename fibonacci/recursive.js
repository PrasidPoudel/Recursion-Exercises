function fibo(num) {
    if(num<2) return num;
      return fibo(num-1)+fibo(num-2)
  }
  function fib(n) {
      let arr=[]
      for(let i=0;i<n;i++) {
          arr.push(fibo(i))
      }
      return arr;
  }
  console.log(fib(10))