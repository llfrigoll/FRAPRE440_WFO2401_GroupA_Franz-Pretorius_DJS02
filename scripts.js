const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  try{
    const { dividend, divider } = Object.fromEntries(entries);

    if(dividend ==="" || divider === "") throw  "Division not performed. Both values are required in inputs. Try again"
    if(divider === "0") throw  "Division not performed. Invalid number provided. Try again"

    let resultNumber = Math.trunc(dividend / divider)
    result.innerText = resultNumber;
  }catch(err){
    result.innerText = err
    if(err === "Division not performed. Invalid number provided. Try again") console.trace("This line got called from")
  }
  

  

  

  
});