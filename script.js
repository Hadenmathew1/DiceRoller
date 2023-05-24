document.querySelector("#roll").addEventListener("click", roller)
document.addEventListener("change")
let dieType = null
function roller() {
    dieType = document.querySelector("#dieType").value.substring(1);
    if (isNaN(dieType)) { return }
    let dieAmt = document.querySelector("#dieAmt").value
    if (isNaN(dieAmt)) { return }
    let dieNum = (Math.random() * dieType + 1) * dieAmt
    document.querySelector("#dieNum").textContent = parseInt(dieNum)
}