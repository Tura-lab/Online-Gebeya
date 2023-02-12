
// get the span to change the text
let result = document.getElementsByClassName("status-message")[0];
let submit_btn = document.getElementsByClassName("submit-btn")[0];

console.log("here", submit_btn, result)


// now check the result and do the logic

function checkresult(response){
    if (response){
        result.innerText = "Created Succesfully redirecting.."
        result.style.color = "black";
        result.style.backgroundColor = "aqua"


        console.log(result, "here again")
        setTimeout(()=>{
        }, 2000)
    }
    else{
        result.innerText = "Email already exists"
        console.log(result, "here")
        result.style.color = "white";
        result.style.backgroundColor = "red"
    }
}

submit_btn.addEventListener("click", ()=>{
    // get the response object here
    let response = false;
    checkresult(response);
});
