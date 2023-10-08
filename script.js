// const btn= document.querySelector(".btn");
// // const form = document.querySelector(".pass")
// let h2 = false;
// btn.addEventListener("click",(e)=>{

// e.preventDefault();
// if(h2){
//     h2.remove();
// }
// let loweCase = 'abcdefghijklmnopqrstuvwxyz';
// let uperCase =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let specialChar = '!@#$%^&*'
// const ans = loweCase[Math.floor(Math.random()*26)].concat(loweCase[Math.floor(Math.random()*26)]).concat(loweCase[Math.floor(Math.random()*26)]);
// const ans2 = uperCase[Math.floor(Math.random()*26)].concat(uperCase[Math.floor(Math.random()*26)]);
// const ans3 = specialChar[Math.floor(Math.random()*8)];

// let newAns = [  ans.concat(ans2).concat(ans3),
//                 ans.concat(ans3).concat(ans2),
//                 ans2.concat(ans).concat(ans3),
//                 ans2.concat(ans3).concat(ans),
//                 ans3.concat(ans).concat(ans2),
//                 ans3.concat(ans2).concat(ans)];

//  h2 = document.createElement("h2");
// let innerhtml = newAns[Math.floor(Math.random()*6)];

// h2.innerHTML = innerhtml ;

// console.log(h2.innerHTML)
// btn.after(h2);

// })

// using loop taking password length from user

const btn = document.querySelector(".btn");
// const form = document.querySelector(".pass")

let h2 = false;
const num = document.querySelector(".num");

btn.addEventListener("click", (e) => {
    const div = document.querySelector(".pass");
    const i = document.querySelector("img");
    h2 = document.createElement("h2");

  e.preventDefault();
  if (h2) {
    console.log(h2);
    h2.remove();
  }
  class Password {
    constructor() {
      this.pass = "";
    }
    generatePass(len) {
      let loweCase = "abcdefghijklmnopqrstuvwxyz";
      let uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let numbers = "0123456789";
      let specialChar = "!@#$%^&*";
      if (len <= 3) {
        console.log("Length of password is too small enter number more than 3");
        alert("Length of password is too small enter number more than 3");
      } else {
        let i = 0;
        while (i < len) {
          this.pass += loweCase[Math.floor(Math.random() * loweCase.length)];
          this.pass += uperCase[Math.floor(Math.random() * uperCase.length)];
          this.pass += numbers[Math.floor(Math.random() * numbers.length)];
          this.pass +=
            specialChar[Math.floor(Math.random() * specialChar.length)];
          i += 4;
        }
        this.pass = this.pass.slice(0, len);
        return this.pass;
      }
    }
  }

  const pass = new Password();
 
  let innerhtml = pass.generatePass(num.value);

  h2.classList.add("h2"); //adding style
  h2.innerHTML = innerhtml;

  div.append(h2);
  h2.after(i);
  num.value = "";

  i.style.display = "block";

  // for copy
  i.addEventListener("click", () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(innerhtml);
    alert("copied the text :" + innerhtml);
  });
});
