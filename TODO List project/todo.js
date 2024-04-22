
let TodoList = [
    {
        item: 'hello',
        duedate: '22/04/2024'
    },
    {
        item: 'good morning',
        duedate: '22/03/2024'
    }];
displayEvent();

function addTask() {
    let inputElement = document.querySelector('#todo-input');
    let inputdate = document.querySelector('#todo-date');

    let todoitem = inputElement.value;
    let dateItem = inputdate.value;

    TodoList.push({ item: todoitem, duedate: dateItem });

    inputElement.value = ''; //create li element  
    inputdate.value = '';

    displayEvent();
}

function displayEvent() {
    let displayelement = document.querySelector('.todo-container')
    let newhtml = '';
    for (let i = 0; i < TodoList.length; i++) {
        // let todoitem =TodoList[i].item;
        // let duedate =TodoList[i].duedate;
        let { item, duedate } = TodoList[i];
        newhtml += `
        <span>${item}</span>
        <span>${duedate}</span>

        <button class='btn-delete' onclick ="TodoList.splice( ${i} ,1);
         displayEvent();">Delete</button>
        `;
        // displayelement.innerText =
        //  displayelement.innerText + "\n" + TodoList[i];
    }
    displayelement.innerHTML = newhtml;
}
