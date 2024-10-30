document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const newItemInput = document.getElementById('new-item');

    newItemInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && newItemInput.value.trim() !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = newItemInput.value;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');

            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

     
            newItemInput.value = '';

            span.addEventListener('click', markAsComplete);
           
            deleteBtn.addEventListener('click', function () {
                todoList.removeChild(li);
            });
        }
    });

    function markAsComplete(event) {
        event.target.classList.toggle('completed');
    }

    document.querySelectorAll('#todo-list li span').forEach(function (span) {
        span.addEventListener('click', markAsComplete);
    });

    document.querySelectorAll('.delete-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            const li = button.parentElement;
            todoList.removeChild(li);
        });
    });
});
