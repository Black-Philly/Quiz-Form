document.getElementById("submit-btn").addEventListener("click", function(){
    let score = 0;
    const answers = {
        q1: "b",
        q2: "a",
        q3: "d",
        q4: "a"
    }
for(let question in answers){
    let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    if(selectedOption && selectedOption.value === answers[question]){
        score++
    }
}    
alert(`Your score is ${score} out of ${Object.keys(answers).length}`);
});