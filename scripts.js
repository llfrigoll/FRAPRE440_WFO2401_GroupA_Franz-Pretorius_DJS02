const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  try{
    const { dividend, divider } = Object.fromEntries(entries);

    //Checks whether the inputs are valid, if not it throws an error
    if(dividend ==="" || divider === "") throw  "Division not performed. Both values are required in inputs. Try again"
    if(divider === "0") throw  "Division not performed. Invalid number provided. Try again"
    if(!(dividend >= 0) || !(divider >= 0)) throw "Something critical went wrong. Please reload the page"

    //Gets the result number as a whole number
    let resultNumber = Math.trunc(dividend / divider)
    result.innerText = resultNumber;

  }catch(err){
    //Displays error message if divider = 0
    if(err === "Division not performed. Invalid number provided. Try again") console.trace("This line got called from")

    //Displays error message if input is non-numerical
    if(err === "Something critical went wrong. Please reload the page"){
      document.body.innerText = err
      console.trace("This line got called from")
    }else{
      //Displays error message if input is blank
      result.innerText = err
    }
  }
  

  

  

  
});