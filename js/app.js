

function openMenu()
{
    document.getElementById('openMenu').style.left='0px';
    document.getElementById('open').style.display='none';
    document.getElementById('close').style.display='block';


}
function closeMenu()
{
    document.getElementById('openMenu').style.left='-280px';
    document.getElementById('open').style.display='block';
    document.getElementById('close').style.display='none';


}

// ------------Tab-links--------------


function openSkill(){
    document.getElementById('skill').style.display='block';
    document.getElementById('exp').style.display='none';
    document.getElementById("reme").classList.remove("active-link");
    event.currentTarget.classList.add("active-link");


}
function openExp(){
    document.getElementById('exp').style.display='block';
    document.getElementById('skill').style.display='none';
    document.getElementById("rems").classList.remove("active-link");
    event.currentTarget.classList.add("active-link");
    
  

}