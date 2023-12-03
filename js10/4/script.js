const input = document.querySelector('.inp');
const ul = document.querySelector('.ul');
const form =  document.querySelector('.form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = input.value;
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskText = document.createElement('span');
    taskText.textContent = text;
    li.appendChild(checkbox);
    li.appendChild(taskText);
    ul.prepend(li);
    input.value = " ";
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            ul.appendChild(li);
        } else {
            li.style.textDecoration = 'none';
            ul.prepend(li)
        }
    })
const delBtn = document.createElement('button');
delBtn.textContent = 'del';
delBtn.addEventListener('click', () => {
    li.remove();
})
li.appendChild(delBtn);
})


