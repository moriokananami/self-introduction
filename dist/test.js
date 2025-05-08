"use strict";
const form = document.getElementById("js-form");
function addListItem(text) {
    const importanceInput = document.getElementById("importance");
    const importanceValue = importanceInput.value;
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    if (importanceValue === "high") {
        span.style.color = "red";
    }
    else if (importanceValue === "medium") {
        span.style.color = "orange";
    }
    else {
        span.style.color = "black";
    }
    li.appendChild(span);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.fontSize = "12px";
    deleteBtn.style.padding = "2px 5px";
    deleteBtn.style.cursor = "pointer";
    const addList = document.getElementById("add-list");
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
const addList = document.getElementById("addlist");
const message = document.getElementById("message");
function handleAdd() {
    const todoInput = document.getElementById("todo-input");
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
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
if (addBtn instanceof HTMLButtonElement &&
    todoInput instanceof HTMLInputElement) {
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
}
function showError(reason) {
    const error = document.createElement("div");
    if (reason === "kara") {
        error.textContent = "空欄じゃダメだよ。";
    }
    else if (reason === "kigou") {
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
    if (error) {
        error.style.zIndex = "9999"; // zIndex は string です！
    }
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
    if (el instanceof HTMLElement && el.textContent) {
        const original = el.textContent;
        setInterval(() => {
            if (el.textContent === original) {
                el.textContent = "たすけて";
                setTimeout(() => {
                    el.textContent = original;
                }, 200);
            }
        }, 12000);
    }
}
if (form && todoInput && addList && message) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        addList.innerHTML = "";
        const todoInput = document.getElementById("todo-input");
        todoInput.value = "";
        message.textContent = "キミノ🈤トドイタよ";
        message.style.display = "block";
    });
}
flickerText();
if (message instanceof HTMLElement) {
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}
else {
    console.error("Element with id 'message' not found.");
}
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        alert("みてるよ...");
    }
});
setTimeout(() => {
    document.body.classList.add("fade");
}, 15000);
// homeBtnのクリックイベント
const homeBtn = document.getElementById("homeBtn");
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
if (homeBtn && popup && yesBtn && noBtn) {
    homeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
        yesBtn.addEventListener("click", function () {
            window.location.href = "test.html";
        });
        noBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });
    });
}
// searchInputのkeydownイベント
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const keyword = searchInput.value.trim().toLowerCase();
            if (keyword === "") {
                showSearchError();
                return;
            }
            const addList = document.querySelectorAll("#addlist li");
            if (addList.length > 0) {
                addList.forEach(item => {
                    const element = item; // 型アサーションで HTMLElement として扱う
                    const text = element.textContent?.toLowerCase() || "";
                    // 検索結果に基づいて表示を切り替え
                    if (text.includes(keyword)) {
                        element.style.display = "flex"; // style プロパティにアクセス
                    }
                    else {
                        element.style.display = "none";
                    }
                });
            }
            else {
                console.error("No items found in #addlist.");
            }
        }
    });
}
// showSearchError関数をaddEventListenerの外に移動
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
    error.style.zIndex = "9999"; // zIndex は string です！
    error.style.textShadow = "0 0 10px yellow";
    document.body.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 1000);
}
