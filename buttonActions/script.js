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
            question: "Where is the class you're watching from?",
            options:["Yale", "Harvard", "Cambridge"],
            answer: "Harvard"
        },
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
        restart();
    });

    function load_question() {

        document.querySelector("#questions").innerHTML = questions[question_number].question;
        const options = document.querySelector ('#options');
        options.innerHTML = '';        
    };

        if(question_number >= questions.length) {
            prompt_restart();
            return;
        };

        document.querySelector("#question").innerHTML = questions[question_number].question;
        const options = document.querySelector('#options');
        options.innerHTML = '';
        

        for (const option of questions[question_number].options) {
            options.innerHTML += `<button class="option">${option}</button>`;
        };

        document.querySelectorAll(".option").forEach(option => {
            option.onclick = () => {
                if(option.innerHTML === questions[question_number].answer) {
                    correct++;
                };
                question_number++;
                update_score_display();
                load_question();
            };
        });
        

function update_score_display() {
    document.querySelector("#correct").innerHTML = `${correct} of ${question_number}`;
};

function prompt_restart() {
    document.querySelector('#question').innerHTML = 'Quiz done!';
    const options = document.querySelector('#options');
    options.innerHTML = `<button onclick="restart()">Restart</button>`;
};

function restart() {
    question_number = 0;
    correct = 0;
    update_score_display();
    shuffleArray(questions);
    questions.forEach(question => {
        shuffleArray(question.options);
    });
    load_question();
};

function shuffleArray(array) {
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

// };