function vowel(s) {
  let count=0;
    for(let ch of s){
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') {
            count++;
        }
  }  
  return count;
}

console.log(vowel("Hello"))


const value=(s)=>{
    let count=0;
    for(ch of s){
        if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') {
            count++;
    }
  }
  return count;
}

console.log(value("bye"));


let nums= [1,2,3,4,5,6,7];

// arr.forEach(element => {
//     console.log(element)
// });

let arr=[1,2,3,,4];
arr.forEach((num)=>{
    console.log(num*num);
}
)

let newnum= nums.map((val)=>{
    return val*val*val;
})
console.log(newnum);

let num1=nums.filter((val)=>{
    return val%2==0;
})
console.log(num1);
 arr.reduce