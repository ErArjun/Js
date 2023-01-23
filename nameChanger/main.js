const nameData=document.querySelector("p");
nameData.addEventListener('click',updateName);

function updateName(){
const name=prompt('Enter new player name!');
if(name==null||name==''){
  return;
}else{
nameData.textContent=`Player 1:${name}`;
}
}
