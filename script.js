document.querySelector("#roll").addEventListener("click", roller)
document.querySelector("#dieAmt").addEventListener("input", multiplier)

function roller() {
    let total = 0
    let dieType = document.querySelector("#dieType").value.substring(1);
    if (isNaN(dieType)) { return }
    let dieAmt = document.querySelector("#dieAmt").value
    if (isNaN(dieAmt)) { return }
    for(let i = 0; i < dieAmt; ++i) {
        let dieNum = parseInt(Math.random() * dieType + 1)
        total += dieNum
        document.querySelector("#dieNum" + i).textContent = dieNum
    }
    document.querySelector("#rollTotal").textContent = total
    
}
function multiplier(e) { 
    let dieContainer = document.querySelector("#dieContainer")
    dieContainer.innerHTML = null
    for(let i = 0; i < e.target.value; ++i) { 
        dieContainer.appendChild(dieView(i))
    }

}
function dieView(idNum) {
    let div = document.createElement("div")
    div.classList.add("die")
    let span = document.createElement("span")
    span.id = "dieNum" + idNum
    div.appendChild(span)
    span.textContent = "1"
    return div
}