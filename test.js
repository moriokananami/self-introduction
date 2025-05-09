const form = document.getElementById("js-form");

function addListItem(text) {
    const importanceValue = document.getElementById("importance").value;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;


    if (importanceValue === "high") {
        span.style.color = "red";
    } else if (importanceValue === "medium") {
        span.style.color = "orange";
    } else {
        span.style.color = "black";
    }

    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.fontSize = "12px";
    deleteBtn.style.padding = "2px 5px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", function (event) {
        event.preventDefault();
        span.classList.add("glitch");
        setTimeout(() => {
            addList.removeChild(li);
        }, 500);
    });

    li.appendChild(deleteBtn);
    addList.appendChild(li);
}



const todoInput = document.getElementById("todoInput");
const addList = document.getElementById("addlist");
const addBtn = document.getElementById("addbtn");
const message = document.getElementById("message");


function handleAdd() {
    const text = todoInput.value.trim();

    if (text === "") {
        showError("kara");
        return;
    }

    if (/[!?_+\*'"`#$%&\-\\^@;:,\.\/=~|\[\]\(\){}<>]/.test(text)) {
        showError("kigou");
        return;
    }


    addListItem(text);
    todoInput.value = "";
}

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    handleAdd();
});

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleAdd();
    }
});


function showError(reason) {
    const error = document.createElement("div");
    if (reason === "kara") {
        error.textContent = "空欄じゃダメだよ。";
    } else if (reason === "kigou") {
        error.textContent = "記号は使っちゃダメ。";
    }

    error.style.position = "fixed";
    error.style.top = "30%";
    error.style.left = "50%";
    error.style.transform = "translateX(-50%)";
    error.style.padding = "20px";
    error.style.backgroundColor = "black";
    error.style.color = "red";
    error.style.fontSize = "24px";
    error.style.border = "2px solid darkred";
    error.style.zIndex = 9999;
    error.style.textShadow = "0 0 10px red";
    document.body.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 1000);
}


setInterval(() => {
    const spans = document.querySelectorAll("span");
    const i = Math.floor(Math.random() * spans.length);
    spans[i].style.color = "darkred";
    spans[i].style.textShadow = "0 0 10px red";
}, 1000);



function flickerText() {
    const el = document.getElementById("message");
    const original = el.textContent;

    setInterval(() => {
        const currentText = el.textContent;
        if (currentText === original) {
            el.textContent = "たすけて";
            setTimeout(() => {
                el.textContent = original;
            }, 200);
        }
    }, 12000);
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    addList.innerHTML = "";
    todoInput.value = "";
    message.textContent = "キミノ🈤トドイタよ";
    message.style.display = "block";


    flickerText();

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        alert("みてるよ...");
    }
});

setTimeout(() => {
    document.body.classList.add("fade");
}, 15000);

document.getElementById("homeBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "flex";

    document.getElementById("yesBtn").addEventListener("click", function () {
        window.location.href = "test.html";
    });

    document.getElementById("noBtn").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
    });
});

document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const keyword = this.value.trim().toLowerCase();

        if (keyword === "") {
            showSearchError();
            return;
        }

        const items = document.querySelectorAll("#addlist li");

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(keyword)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
});
function showSearchError() {
    const error = document.createElement("div");
    error.textContent = "検索ワードを入れてね。";
    error.style.position = "fixed";
    error.style.top = "30%";
    error.style.left = "50%";
    error.style.transform = "translateX(-50%)";
    error.style.padding = "20px";
    error.style.backgroundColor = "black";
    error.style.color = "yellow";
    error.style.fontSize = "24px";
    error.style.border = "2px solid orange";
    error.style.zIndex = 9999;
    error.style.textShadow = "0 0 10px yellow";
    document.body.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 1000);
}
