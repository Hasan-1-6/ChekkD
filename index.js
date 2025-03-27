const inputfield = document.getElementById("inputfield")
const listdiv = document.getElementById('listdiv')
let countForId = 0;


function addTask(){
    let tasktext = inputfield.value
    if(tasktext == ''){
        alert('Task cannot be empty!!')
        return
    }
    
    const divcont = document.createElement("div")
    divcont.classList.add("taskdiv")
    divcont.setAttribute('id',countForId)

    const spanelem = document.createElement("span")
    spanelem.innerText = tasktext
    spanelem.classList.add('tasktext')

    const btn1 = document.createElement("button")
    const img1 = document.createElement("img")
    btn1.append(img1)
    img1.src = 'check.png'
    img1.setAttribute('width','24px')
    btn1.classList.add('taskbtn')
    btn1.addEventListener('click', function(){
        this.previousSibling.classList.add('strikethru')
    })

    const btn2 = document.createElement("button")
    const img2 = document.createElement("img")
    btn2.append(img2)
    img2.src = 'delete.png'
    img2.setAttribute('width','24px')
    btn2.classList.add('taskbtn2')
    btn2.addEventListener('click', function(){
        this.parentNode.remove()
    })

    countForId+=1

    divcont.append(spanelem, btn1, btn2)
    listdiv.prepend(divcont) 
    inputfield.value = ''
}
