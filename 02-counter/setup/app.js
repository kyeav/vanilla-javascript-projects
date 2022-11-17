// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  console.log(btn);

  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    } 

    if (count < 0) {
        value.style.color = "red"
    } else if (count > 0) {
        value.style.color = "green"
    } else {
        value.style.color = "black"
    }
    
    value.textContent = count;
  });
});
