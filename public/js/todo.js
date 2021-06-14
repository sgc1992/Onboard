const toDoBtn = document.querySelector('.btn-todo');
const addToDoBtn = document.querySelector('.btn-add-todo');
const todoCardContainer = document.querySelector('.todo-cards-container');
const addTodoCard = document.querySelector('.add-todo-card');

addTodoCard.style.display = 'none';

// function that unhides todo form after clicked
toDoBtn.addEventListener("click", function() {
    addTodoCard.style.display = "block";
});

// function that gets user input and displays on checkboxable cards
addToDoBtn.addEventListener("click", function(){
    const userInput = document.querySelector('#user-todo').value;

    // gets the value
    // display value within a card
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