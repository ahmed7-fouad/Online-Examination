let mobile_icon=document.querySelector('.mobile_icon');
let burger_bars_icon=document.querySelector('#burger_bars_icon');
let nav_links=document.querySelector('.nav_links');

let changer=0;

burger_bars_icon.addEventListener('click',function(){
if(changer===0){
    nav_links.style.cssText="height:256px;";
     burger_bars_icon.style.cssText='color:white';
    changer=1;
}
else{
    nav_links.style.cssText="height:0";
    burger_bars_icon.style.cssText='color:black';
    changer=0;
}
})
let exit_icon=document.getElementById('exit_icon');
let profile_icon=document.querySelector('.personal_profile');
let profile_details=document.querySelector('.profile_details');

profile_icon.addEventListener('click',function(){
    profile_details.style.cssText='right:0';
})
exit_icon.addEventListener('click',function(){
    profile_details.style.cssText='right:-300px';
})
