const myImage=document.querySelector('img');

myImage.onclick=()=>{
  const mySrc=myImage.getAttribute("src");

  if(mySrc==="images/image-01.jpg"){
    myImage.setAttribute('src',"images/image-02.jpg");
  }else{
    myImage.setAttribute('src',"images/image-01.jpg");
  }
}
