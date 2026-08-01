console.log('todo list');
let inputBox = document.getElementById('inputbox');
let add = document.querySelector('.add');
let ul = document.querySelector('.ul');
let err = document.querySelector('.err');

let tasks = [];

// shumen-
add.addEventListener('click', function(){
    // console.log('clicked');
    let inptVal = inputBox.value;
    // console.log(inptVal);
    inputBox.value = '';
    if(inptVal === ''){
        alert(`enter task`);
        return;
    }
    const li = document.createElement('li');
    console.log(li);
    li.innerHTML = `
    <p>${inptVal}</p>
    <div class="btns">
    <button class="edit">edit</button>
    <div class="delete">&times;</div>
    </div>
    `;
    ul.appendChild(li);

let btns = li.querySelector('.btns');
let editBtn = li.querySelector('.edit');
let dltBtn = li.querySelector('.delete');

li.style.display = 'flex';
li.style.gap = '15px';
btns.style.display = 'flex';
btns.style.gap = '10px';

editBtn.style.padding = '2px 16px'
editBtn.style.backgroundColor = 'transparent';
editBtn.style.color = 'white';
editBtn.style.border = 'none';
editBtn.style.borderRadius = '12px';
editBtn.style.cursor = 'pointer';

dltBtn.style.padding = '2px 16px';
dltBtn.style.backgroundColor = 'transparent';
dltBtn.style.color = 'red';
dltBtn.style.border = 'none';
dltBtn.style.borderRadius = '12px';
dltBtn.style.fontSize = '44px';
dltBtn.style.cursor = 'pointer';

let txt = li.querySelector('p');
editBtn.addEventListener('click', ()=>{
    console.log('edit clicked');
    let updatedTodo = prompt('edit', txt.textContent);
    txt.textContent = updatedTodo;
    console.log(txt.textContent);
});
dltBtn.addEventListener('click', ()=>{
    console.log('delete clicked');
    li.style.display = 'none';
});


});


// siam-

/*add.addEventListener('click', function () {
    // console.log(inputBox.value.length);
    if (inputBox.value.length === 0) {
        err.innerHTML = `enter tasks`;
        return;
    }
    else {
        err.innerHTML = ``;
    }
    ul.innerHTML = ``;
    tasks.push(inputBox.value);
    tasks.map(function (task, indx) {
        let li = document.createElement('li');
        li.innerHTML = `
                <p>${task}</p>
                <div class="btns">
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                    </div>
                    `;
        ul.appendChild(li);
        inputBox.value = '';
    let editBtn = li.querySelector('.edit');
    let deleteBtn = li.querySelector('.delete');

    editBtn.addEventListener('click', ()=>{
        console.log('edit clicked');
    });

    deleteBtn.addEventListener('click', ()=>{
        console.log('delete clicked');
        li.remove();
    })

    });
});
*/

// tamanna-
// let todoInput = document.querySelector("#todoInput");
// let submitBtn = document.querySelector("#submitBtn");
// let inputList = document.querySelector("#inputList");
/*let todoInput = document.querySelector("#inputbox");
let submitBtn = document.querySelector(".add");
let inputList = document.querySelector(".ul");

submitBtn.addEventListener("click", () => {
    let text = todoInput.value;
    
    if (text === ""){
        alert("Please Enter a task");
        return;
    }
    todoInput.value = '';
    
    let li = document.createElement("li");
    // li.innerHTML = text;
    li.innerHTML = `<p>${text}</p>`;

    li.style.display = 'flex';
    li.style.gap = '20px';

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

    let txt = li.querySelector('p');
    editBtn.addEventListener("click" ,()=>{
        console.log('edit clicked');
        let updatedTodo = prompt('edit task', txt.textContent);
        console.log(txt.textContent);
        if(updatedTodo !== ''){
            txt.textContent = updatedTodo;
        }
    });

    let deleteBtn = document.createElement("Button");
    deleteBtn.innerText = "Delete"
    li.appendChild(deleteBtn)

    deleteBtn.addEventListener("click" ,()=>{
        li.remove()
    });

    inputList.appendChild(li);
});*/