const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// دا عشان يفتح القيمه من الجنب
if (bar) {
 bar.addEventListener('click' , ()=>{
    nav.classList.add('active'); 
 })  
}
// دا عشان لخرج من القيمه اللي فتحنها من الجنب 
if (close) {
    close.addEventListener('click' , ()=>{
       nav.classList.remove('active'); 
    })  
   }
   