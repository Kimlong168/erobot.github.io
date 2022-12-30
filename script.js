var sponsorHiddenButton=document.querySelectorAll(".right-side-sponsor-hidden-button");
var sponsorHiddenDropdown=document.querySelectorAll(".right-side-sponsor-hidden-dropdown");
var rightSideTitleIcon=document.querySelector("#rightSideTitleIcon");
var rightSideTitleDropdown=document.querySelector("#rightSideTitleDropdown");
var check=0,check2=0;


sponsorHiddenButton[0].addEventListener('click',()=>{
  if(check==0){
    sponsorHiddenDropdown[0].style.display='block';
    sponsorHiddenDropdown[1].style.display='';
    check=1;
  }else{
    sponsorHiddenDropdown[0].style.display='';
    check=0;
  }
});

sponsorHiddenButton[1].addEventListener('click',()=>{
  if(check2==0){
    sponsorHiddenDropdown[1].style.display='block';
    sponsorHiddenDropdown[0].style.display='';
    check2=1;
  }else{
    sponsorHiddenDropdown[1].style.display='';
    check2=0;
  }
});

// right side title dropdown
let check3=0;
rightSideTitleIcon.addEventListener('click',()=>{
  
  if(check3==0){
    rightSideTitleDropdown.style.display='block';
    check3=1;
  }else{
    rightSideTitleDropdown.style.display='';
    check3=0;
  }
})