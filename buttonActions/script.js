// window.onload = function() {

    // document.querySelector('#green').onclick = function() {
    //     document.querySelector('#hello').style.color = 'green';
    // };
    // document.querySelector('#blue').onclick = function() {
    //     document.querySelector("#hello").style.color = 'blue';
    // };
    // document.querySelector('#red').onclick = function() {
    //     document.querySelector('#hello').style.color = 'red';
    // };



    // document.querySelectorAll('.color-change').forEach(function(button) {
    //     button.onclick = function() {
    //         document.querySelector('#hello').style.color = button.dataset.color;
    //     };
    // });



    const questions = [
        {
            question: "What is Athena's favorite animal?",
            options:["jellyfish", "penguins", "otters"],
            answer:"otters"
        },
        {
            question: "What is 10 + 10?",
            options: ["8", "25", "30", "20"],
            answer: "20"
        }
        
    ];

    let question_number = 0;
    let correct = 0;

    document.addEventListener("DOMContentLoaded", () => {
        load_question();
    });

    function load_question() {
        document.querySelector("#questions").innerHTML = questions[question_number].question;
        const options = document.querySelector ('#options');
        options.innerHTML = '';
        
        for (const option of questions[question_number].options) {
            options.innerHTML += `<button class="option">${option}</button>`;
        }

        document.querySelectorAll('.option').forEach(options => {
            options.onclick = () => {
                alert(options.textContent);
            }
        });
    };

// };