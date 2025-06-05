function Fibonacci(num) {
    if(num<2) return num;
    let a = 0,
        b = 1;
    let arr = []
    arr.push(a, b)
    for (let i = 0; i < num - 2; i++) {
        let sum = a + b;
        a = b;
        b = sum;
        arr.push(sum)
    }
    return arr;
}
console.log(Fibonacci(8))