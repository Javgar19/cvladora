document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pista1").addEventListener("input", checkInput1);
    document.getElementById("pista2").addEventListener("input", checkInput2);
    document.getElementById("pista3").addEventListener("input", checkInput3);
    document.getElementById("pista4").addEventListener("input", checkInput4);

    function checkInput1(event) {
        const inputValue = event.target.value.toLowerCase();
        const containsViolin = inputValue.includes("violin");

        if (containsViolin) {
            document.getElementById("answer1").textContent = "answer1";
        } else {
            document.getElementById("answer1").textContent = "";
        }
    }

    function checkInput2(event) {
        const inputValue = event.target.value.toLowerCase();
        const containsViolin = inputValue.includes("madera");

        if (containsViolin) {
            document.getElementById("answer2").textContent = "answer2";
        } else {
            document.getElementById("answer2").textContent = "";
        }
    }

    function checkInput3(event) {
        const inputValue = event.target.value.toLowerCase();
        const containsViolin = inputValue.includes("cielo");

        if (containsViolin) {
            document.getElementById("answer3").textContent = "answer3";
        } else {
            document.getElementById("answer3").textContent = "";
        }
    }

    function checkInput4(event) {
        const inputValue = event.target.value.toLowerCase();
        const containsViolin = inputValue.includes("sombra");

        if (containsViolin) {
            document.getElementById("answer4").textContent = "answer4";
        } else {
            document.getElementById("answer4").textContent = "";
        }
    }
});