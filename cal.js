// function phoneticLookup(val) {
//     let result = "";
  
//     // Only change code below this line
//     const lookup = {
//       "alpha" : "Adams",
//       "bravo" :"Boston",
//       "charlie":"Chicago",
//       "delta":"Denver",
//       "echo":"Easy",
//       "foxtrot":"Frank",
//     };
//     result=lookup[val];
  
//     // Only change code above this line
//     return result;
//   }
  
//   phoneticLookup("charlie");



// let user={
//     "name":"John",
//     "surname":"Smith",
// };
// user.name="Pete";
// delete user.name;
// console.log(user);



// let salaries={
//     John:100,
//     Ann:160,
//     Pete:130,
// }
// let sum=0;
// for (let i in salaries){
//     sum+=salaries[i];
// }
// console.log(sum);




// let s="abbaca";
// function str(s){
//     let st=[];
//     for(ch of s){
//         if(st.length>0 && st[st.length-1]==ch){
//             st.pop();
//         }
//         else{
//             st.push(ch);
//         }
//     }
//     return st;
// }
// let str2 = str(s)
// console.log(str2);



// let s="anagram";
// let t="nagaraa";
// function anagram(s,t){
//     return (s.split("").sort().join("")===t.split("").sort().join(""))
// }
// console.log(anagram(s,t));


// let s="3[a]2[bc]"
// function decoding(s) {
//     let stack = []

//   for (const char of s) {
//     if (char !== ']') stack.push(char)
//     else {
//       let letters = ''
//       while (stack[stack.length - 1] !== '[') {
//         letters = stack.pop() + letters 
//       }
//       stack.pop() 
//       let nums = ''
//       while (stack.length && !isNaN(stack[stack.length - 1])) {
//         nums = stack.pop() + nums 
//       }
//       stack.push(letters.repeat(Number(nums)))
//     }

//   }
//   return stack.join('')
// };

// console.log(decoding(s));

// let obj={
//     "a":2,
//     "b":"Nayak",
// };
// function isEmpty( obj){
// if(Object.entries(obj).length===0)
// return true;
// else
// return false;
// }
// console.log(isEmpty(obj));


// let str="Parmeshwar";
// let newString="";

// function reverse(str){
//     for(let i=str.length-1;i>=0;i--){
//         newString+=str[i];
//     }
//     return newString;
// }
// console.log(reverse(str));

// function intersection(arr1, arr2) {
//     let res=[];
//     for(let i=0;i<arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             if(!res.includes(arr1[i])){
//                 res.push(arr1[i]);
//             } 
//         }
//     }
//     return res;
//   }
//   arr1=[2,3,4,5,6];
//   arr2=[6,7,8,9,0];
//   console.log(intersection(arr1,arr2));



//  function  isPalindrome(s) {

//     if(s.length === 0) return true
//     s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     return s === s.split('').reverse().join('')
    
// };
// let s="A man, a plan, a canal: Panama";
// let a="Nayak";
// console.log(isPalindrome(s));
// console.log(isPalindrome(a));


// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );



// let arr=[1,2,3,4,5,6];
// let k=3 //rotatet by two position right
// function rotation(arr){
//     for(let i=0;i<k;i++){
//         arr.unshift( arr.pop());
//     }
//     console.log(arr);
// }
// rotation(arr);



// function twoSum(nums, target) {
//     nums.sort((a, b) => a - b);
//     let i=0;
//     let j=nums.length-1;
//     let number=[];
//     while(i<j){
//         if(target===nums[i]+nums[j]){
//             number.push([nums[i],nums[j]]); 
//             i++;
//             j--;
//         }
//         else if(target<nums[i]+nums[j]){
//             j--;
//         }
//         else{
//             i++;
//         }

//     }
//     return number;
   
// };
// nums=[3,2,4,6,7,1]
// let target=8;
// console.log(twoSum(nums,target));


// function stringCompression(str) {
//     const stringLength = str.length;
//     let compressedString = '';
//     let charCount = 1;

//     for (let i = 0; i < stringLength; i++) {
        
//         if (str[i] === str[i+1]) {
//             charCount ++;
//         }
//         else {
//             compressedString += str[i];
//             compressedString += charCount;
//             charCount = 1;
//         }
//     }
//         return compressedString;
// };
// console.log(stringCompression('aabcccccaaa'));
// console.log(stringCompression('abc'));



let arr=[1,2,3,4,5,6];
arr.forEach(function(v,index){
    console.log(v);
})