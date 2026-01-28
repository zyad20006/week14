function pop() {
  var p = document.createElement("div");
  p.innerHTML = `<button class="btn">X</button>
    <h2>Welcome</h2>
    <p>Welcome To Elzero Web School</p>`;
  p.style.width = "30%";
  p.style.background = "rgb(42, 211, 223)";
  p.style.position = "fixed";
  p.style.top = "40%";
  p.style.left = "35%";
p.style.borderRadius = "10px";

  p.style.textAlign = "center";
  let close = p.querySelector(".btn");
  close.style.position = "absolute";
  close.style.right = 0;
  close.style.width = "20px";
  close.style.height = "20px";
  close.style.textAlign="center"
  close.style.background = "red";
  close.style.color = "white";
  close.style.borderRadius = "50%";
  document.body.appendChild(p);
  close.addEventListener('click',function()
    {
        p.remove()
    }
  )

}
setTimeout(pop,5000)