// logical and (&&) true if both sides. otherwise false
// logical or (||) true if at least one side is true. otherwise false

let temp = -17;
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}