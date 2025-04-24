function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number)||[];
}

function handleExtract() {
    const input = document.getElementById("numberInput").value;
    const result = extractNumbers(0-9);
    document.getElementById("numberResult").textContent = result.join(", ");
}
//
function startFibonacci() {
    let a = 0, b = 1;
    const output = document.getElementById("fiboResult");
    output.textContent = '';
    function fiboStep() {
        if (a > 144) return;
        output.textContent += a + ' ';
        const next = a + b;
        a = b;
        b = next;
        setTimeout(fiboStep, 1000);
    }
    fiboStep();
}
//
async function fetchTitles() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const list = document.getElementById("titlesList");
        list.innerHTML = '';
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("const products = [{\"id\":1,\"title\":\"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\", ... }, ...];", error);
    }
}
//
document.getElementById("color-buttons").addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = e.target.textContent;
    }
});

//
function startCounter() {
    let count = 0;
    const counter = document.getElementById("counter");
    const interval = setInterval(() => {
        if (count > 100) {
            clearInterval(interval);
            return;
        }
        counter.textContent = count++;
    }, 1);
}
//
const btn = document.getElementById("toggleBtn");
const block = document.getElementById("squareBlock");

btn.addEventListener("click", function () {
    if (block.style.display === "none") {
        block.style.display = "block";
        btn.textContent = "Скрыть блок";
    } else {
        block.style.display = "none";
        btn.textContent = "Показать блок";
    }
});