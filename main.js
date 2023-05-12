const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

function light(){
    setTimeout(()=>{
        red.style.backgroundColor="red"
        yellow.style.backgroundColor="white"
        green.style.backgroundColor="white"
    },0)
    setTimeout(()=>{
        yellow.style.backgroundColor="yellow"
        green.style.backgroundColor="white"
        red.style.backgroundColor="white"

    },9100)
    setTimeout(()=>{
        green.style.backgroundColor="green"
        red.style.backgroundColor="white"
        yellow.style.backgroundColor="white"
    },11000)

    setInterval(()=>{
        clearTimeout(red)
        clearTimeout(yellow)
        clearTimeout(green)
        console.log("remove");
    },30001) 
}
light()
setInterval(light, 30000);
