window.onload = function() {
    // document.querySelector('#green').onclick = function() {
    //     document.querySelector('#hello').style.color = 'green';
    // };
    // document.querySelector('#blue').onclick = function() {
    //     document.querySelector("#hello").style.color = 'blue';
    // };
    // document.querySelector('#red').onclick = function() {
    //     document.querySelector('#hello').style.color = 'red';
    // };

    document.querySelectorAll('.color-change').forEach(function(button) {
        button.onclick = function() {
            document.querySelector('#hello').style.color = button.dataset.color;
        };
    });

};