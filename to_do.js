window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) =>{
        e.preventDefault(); /*para página não fazer o reload*/ 



        const tasks = input.value;

        if( !tasks ){
            alert("Please fill out the task!");
            /*return;*/
        }else{
            console.log("Success!!")
        }

        /*const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);*/


   })

})
