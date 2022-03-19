let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//botao desativado
input.addEventListener('keyup' , () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active')
    }
})
//adicionar novo item pra lista
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else{
        alert('Por Favor Digite algo!')
    }
})

//funçao para deletar items da lista

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
    }
})

//marcaçao para os items completados
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')
    ) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})