const newTodos = async (event) => {
    event.preventDefault();

    const title = $('#todo-title').val().trim();
    const description = $('#todo-description').val().trim();

    if (title && description) {
        const response = await fetch('/api/todo', {
            method: 'POST',
            body: JSON.stringify({title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
          } else {
            console.log('ERROR')
          }
    }

}

const deleteToDo = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id); 

      const response = await fetch(`/api/todo/delete/${id}`, {
          method: 'DELETE',
      });

      if (response.ok) {
          document.location.reload();
      } else {
          console.log('Failed to delete blog post'); 
      }
  }
}; 


$('#addTodo').on('click', newTodos);
$('#deleteTodo').on('click', deleteToDo);
