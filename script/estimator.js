
document.addEventListener('DOMContentLoaded', function(){
const percentageBtn = document.querySelectorAll('.btn');
let number = [5,10,15,25,50];
const inputEl = document.getElementById('input-el');
const billEl = document.getElementById('bill-el');
const btnReset = document.getElementById('btn-reset');
const saveBtn = document.getElementById('btn-save')
const amountEl = document.getElementById('amount-el')
const cancelBtn = document.getElementById('cancel-btn');
const clearBtn = document.getElementById('clear-btn');
const resetBox = document.getElementById('reset-box');
const ulEl = document.getElementById('ul-el');
const bg = document.getElementById('bg');
const savingsTrans = document.getElementById('savings-trasaction');
const removeIcon = document.querySelector('.remo-div')
let input ;

ulEl.addEventListener('click',deleteCheck);




    percentageBtn.forEach(function (btn){
        btn.addEventListener('click', function (e){
            const styles = e.currentTarget.classList;
            
            if (styles.contains('first-b')){
                e.preventDefault()
                input = billEl.value * (number[0]/100);
                inputEl.value = `$${input}`;
                amountEl.textContent = billEl.value - input;
                
            }else if(styles.contains('second-b')){
                input = billEl.value * (number[1]/100);
                inputEl.value = `$${input}`;
                amountEl.textContent = billEl.value - input;
            }else if(styles.contains('third-b')){
                  input = billEl.value * (number[2]/100);
                inputEl.value = `$${input}`;
                amountEl.textContent = billEl.value - input;
            }else if(styles.contains('forth-b')){
                  input = billEl.value * (number[3]/100);
                inputEl.value = `$${input}`;
                amountEl.textContent = billEl.value - input;
            }else if(styles.contains('fifth-b')){
                  input = billEl.value * (number[4]/100);
                inputEl.value = `$${input}`;
                amountEl.innerText = billEl.value - input;
            }else if(styles.contains('six-b')){
                const random = Math.floor(Math.random() * number.length)
                // console.log(random, numbersR[random])
                   input = billEl.value * (number[random]/100);
                inputEl.value = `$${input}`;
                amountEl.innerText = billEl.value - input;
            }
        })
    })
    // reset button 
    btnReset.addEventListener('click',()=>{
        resetBox.style.display = 'flex';
        bg.style.display = 'block'
       
    })
    // clear button
    clearBtn.addEventListener('click',()=>{
        inputEl.value = '';
        billEl.value = ''
         resetBox.style.display = 'none';
         bg.style.display = 'none';
        amountEl.innerText = 0.00;
    })
    cancelBtn.addEventListener('click',()=>{
         resetBox.style.display = 'none';
         bg.style.display = 'none';
    })


//    save button (it will save it under savings transaction box)
saveBtn.addEventListener('click', (trans));


const showText = document.querySelector('.show-text')

function trans(){
    let liBox = document.createElement('div')
    liBox.classList.add('savelist-box');
    let liEl = document.createElement('li');
    liEl.classList.add('save-list')
    liBox.appendChild(liEl);
    liEl.textContent = amountEl.innerText;
    let trashBtn = document.createElement('button')
    trashBtn.textContent = 'del'
    trashBtn.classList.add('trash-btn');
    liBox.appendChild(trashBtn);
    if (inputEl.value !== '' && amountEl.innerText !== 0.00){
         ulEl.appendChild(liBox)
    alert('saved')
    }else{
        alert('input values')
    }

}


const openTrans = document.getElementById('open-transactions')
openTrans.addEventListener('click',()=>{
   savingsTrans.style.display = 'flex';
    bg.style.display = 'block';
})
removeIcon.addEventListener('click',()=>{
    savingsTrans.style.display = 'none';
    bg.style.display = 'none'
})



// deleteCheck
function deleteCheck(e){
    const item = e.target;
    // delete saved item
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function (){
            todo.remove()
        })
    }
}

// moving
  document.querySelector(".tiles__container").appendChild(document.querySelector(".tiles__wrapper").cloneNode(true));
  document.querySelectorAll(".tiles__wrapper").forEach(box => 
      box.classList.add("tiles__animation")  
  );
});