const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  try{
    const { dividend, divider } = Object.fromEntries(entries);
    
    if(dividend ==="" || divider === "") throw "Division not performed. Both values are required in inputs. Try again"

    let resultNumber = Math.trunc(dividend / divider)
    result.innerText = resultNumber;
  }catch(err){
    console.error(err)
    result.innerText = err
  }
  

  

  

  
});