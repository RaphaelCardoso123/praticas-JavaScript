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
            question: "What is 10 + 10?",
            options: ["8", "25", "30", "20"],
            answer: "20"
        },
        {
            question: "What is Athena's favorite animal?",
            options:["jellyfish", "penguins", "otters"],
            answer:"otters"
        }
    ];

    document.addEventListener("DOMContentLoaded", () => {
        load_question();
    });

    function load_question() {
        document.querySelectorAll("#questions").innerHTML.questions[questions_number].question;
    }

// };