
// get the span to change the text
let result = document.getElementsByClassName("status-message")[0];
let login_btn = document.getElementsByClassName("login-button")[0];

// console.log("here", submit_btn, result)


// now check the result and do the logic

function checkresult(response){
    if (response){
        result.innerText = "Success! redirecting to products.."
        result.style.color = "black";
        result.style.backgroundColor = "aqua"


        console.log(result, "here again")
        setTimeout(()=>{
        }, 2000)
    }
    else{
        result.innerText = "Invalid Credential"
        console.log(result, "here")
        result.style.color = "white";
        result.style.backgroundColor = "red"
    }
}

login_btn.addEventListener("click", ()=>{
    // get the response object here
    let response = true;
    checkresult(response);
});
