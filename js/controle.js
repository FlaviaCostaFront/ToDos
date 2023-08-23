let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
const localStoragekey = "ToDos";
let novasTarefas = [];

function addTarefa() {
    //pegar o valor digitado no input
    let valorInput = input.value;
    //se não for vazzio nem nulo nem indefinido

    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick = "marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="boot-confere"></i></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </div>

        <div onclick = "marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick ="deletar(${contador})" class ="delete"> <i class="boot-lixeira"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg> 
        </div>  
    </div>`;

        //adicionar novo item no main
        main.innerHTML += novoItem;

        //para armezanar as informações
        novasTarefas.push(valorInput);
        localStorage.setItem(localStoragekey, JSON.stringify(novasTarefas));

        //zerar os campos
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("boot-confere");

        var icone = document.getElementById("icone_" + id);
        icone.classList.add("item.confere");
    }
}

input.addEventListener("keyup", function (event) {
    //se clicar o enter (13) representa o enter
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }

});

function obterTarefasLocastorage() {
    if (localStorage.getItem("ToDos")) {
        novasTarefas = JSON.parse(localStorage.getItem("ToDos"));
    }
}

obterTarefasLocastorage( )
console.log(novasTarefas)
