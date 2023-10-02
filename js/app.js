let imageList=[
'photos/image1.jpeg',
'photos/image6.jpeg',
'photos/image3.webp',
'photos/image4.jpeg',
'photos/image5.jpg',
]


let slideindex=0
let image=document.querySelector('.slider img')
image.src=imageList[slideindex]
let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.onclick=()=>{
autoPlay()
}
prev.onclick=()=>{
    slideindex--
    if(slideindex==-1){
    slideindex=imageList.length-1
    }
    image.src=imageList[slideindex]
}
function autoPlay(){
    slideindex++
    if(slideindex>imageList.length-1){
    slideindex=0
    }
    image.src=imageList[slideindex]
}



let dots = document.querySelector("#dots")
let dotsinner = ''
imageList.forEach((index) =>{
    index=slideindex
    slideindex++
    dotsinner+= `<div class="dot" id='${index}'> </div> `
})
dots.innerHTML= dotsinner
let dotss = document.querySelectorAll('.dot');

dotss.forEach((dot) => {
  dot.onclick = () => {
    let id=dot.getAttribute('id')
    image.src=imageList[id]
    console.log(id);
  };
});
  
