const toDoBtn = $('.btn-todo');
const addToDoBtn = $('.btn-add-todo');
const todoCardContainer = $('.todo-cards-container');
const addTodoCard = $('.add-todo-card');

addTodoCard.style.display = 'none';

toDoBtn.addEventListener("click", function() {
    addTodoCard.style.display = "block";
});

addToDoBtn.addEventListener("click", function(){
    const userInput = $('#user-todo').val();

    let toDoAddedCard = document.createElement('div');
    toDoAddedCard.setAttribute('class', "card todo-card");
    toDoAddedCard.innerHTML = `
        <div class="card-body ">
            <div class="form-group form-check checkbox">
                <label class="form-check-label mr-4" for="exampleCheck1">${userInput}</label>
                <input type="checkbox" class="form-check-input " id="exampleCheck1">
            </div>
        </div>
    `;
    todoCardContainer.appendChild(toDoAddedCard);
});