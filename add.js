let first = document.querySelector('.first_input')
let second = document.querySelector('.second_input')
let out = document.querySelector('.out_input')
let btn = document.querySelector('.btn_input')
let block = document.querySelector('.block_input')











// ======================================================================




btn.addEventListener('click',function(e){

  let ua = first.value
  let eng = second.value
  
  if (ua!== "" && ua!== null && eng!== "" && eng!== null){
    
    
    let obj = {
      firstWord: ua,
      secondWord: eng,
    }
    
    
    msgList.push(obj)
    
    localStorage.setItem('msgList',JSON.stringify(msgList))
    
    createNewMsg(obj)
    
    
    first.value = ""
    second.value = ""
    
    location.reload();
    
  }else if(ua == ""){
    first.style.border = "2px solid red"
    out.textContent = `Заповніть поле вводу!`
  } else if (eng == ""){
    second.style.border = "2px solid red"
    out.textContent = `Заповніть поле вводу!`
  }
})


let data = localStorage.getItem('msgList')
let msgList = []

if (data!== "" && data!== null){
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
}

function createNewMsg(obj){

      let test = document.createElement('div')
      test.innerHTML = `<div class="first">${obj.firstWord[0].toUpperCase() + obj.firstWord.slice(1)} </div> <div class="second" ></div> <button class="btn">Підказка</button> <input type= "text" class="input_input" /> <button class="clear">X</button> `
      test.setAttribute('word', obj.secondWord[0].toUpperCase() + obj.secondWord.slice(1))
      test.classList.add('block')
      
      document.body.firstElementChild.append(test)



    let arrInp = Array.from(document.body.firstElementChild.children)
    arrInp.forEach(el=>{
      el.addEventListener('input',function(e){
        let target = e.target
        
        if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase()){
          el.lastElementChild.previousElementSibling.style.cssText = `  
          border: 2px solid green;
          box-shadow: 2px 2px 14px rgba(3, 174, 3, 0.776);
          color: green;
          outline: none;`
        }else   if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase().substring(0,1)){
          el.lastElementChild.previousElementSibling.style.cssText = `  
          border: 2px solid orange;
          box-shadow:2px 2px 14px  rgba(255, 191, 0, 0.888);
          color: orange;
          outline: none;`
        }else if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase().substring(0,2)){
          el.lastElementChild.previousElementSibling.style.cssText = `  
          border: 2px solid yellow;
          box-shadow:2px 2px 14px  rgba(255, 191, 0, 0.888);
          color: rgb(132, 132, 6);;
          outline: none;`
      }else if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase().substring(0,3)){
        el.lastElementChild.previousElementSibling.style.cssText = `  
        border: 2px solid yellow;
        box-shadow:2px 2px 14px  rgba(255, 191, 0, 0.888);
        color: rgb(132, 132, 6);;
        outline: none;`
      }else  if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase().substring(0,4)){
        el.lastElementChild.previousElementSibling.style.cssText = `  
        border: 2px solid yellow;
        box-shadow:2px 2px 14px  rgba(255, 191, 0, 0.888);
        color: rgb(132, 132, 6);;
        outline: none;`
      }else if(target.value.trim().toLowerCase() == el.getAttribute('word').trim().toLowerCase().substring(0,5)){
      el.lastElementChild.previousElementSibling.style.cssText = `  
      border: 2px solid yellow;
      box-shadow:2px 2px 14px  rgba(255, 191, 0, 0.888);
      color: rgb(132, 132, 6);;
      outline: none;`
    }else{
      el.lastElementChild.previousElementSibling.style.cssText = `  
      border: 2px solid red;
      box-shadow: 2px 2px 4px rgba(255, 2, 2, 0.776);
      color: red;
      outline: none;
      `
    }
  })
})

}











let arrInp2 = Array.from(document.body.firstElementChild.children)

arrInp2.forEach(el=>{
  el.firstElementChild.classList.add('first_div')
  el.lastElementChild.classList.add('first_inp')
})

let root = document.querySelector('#root')
let arrToggle = root.querySelectorAll('.first_div')


arrInp2.forEach(el=>{
  let first = el.firstElementChild
  let second = el.firstElementChild.nextElementSibling
  second.innerText = second.parentElement.getAttribute('word')
  
  
  el.querySelector('.btn').addEventListener('click',function(e){
    first.classList.toggle('first_first')
    second.classList.toggle('second_second')
    console.log(this);
    this.classList.toggle('btn_change')
  })
})




let clear = document.querySelectorAll('.clear')
clear.forEach((el,index)=>{
    el.addEventListener('click',function(e){
        let arr = JSON.parse(localStorage.getItem('msgList'))
        arr.splice(index,1)
        localStorage.setItem('msgList',JSON.stringify(arr))
        location.reload();
    })
})
let a = 4
console.log(a);