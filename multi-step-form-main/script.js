const multistepform=document.queryselector("[data-multi-step]")
const formsteps=[...multistepform.multistepform.queryselectorAll("[data-step]")]
let currentstep= formsteps.find(steps => {
returnstep.classlist.contains('active')
})?.dataset.step

if (currentstep > 0) {
    currentstep = 0
    formsteps[currentstep].classlist.add('active')
    showcurrentstep()
}

console.log(currentstep)

multistepform.addEventlistener("click",  e => {
    if(e.target.matches("[data-next]")) {
        currentstep +=1}
else if(e.target.matches("[data-previous]")){
currentstep -=1
        }
showcurrentstep()
    })

function showcurrentstep() {
    formsteps.forEach((step, index) =>{    
          step.classlist.toggle('active', index===currentstep)     
        })
}