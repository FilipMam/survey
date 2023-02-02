const gridEl = document.querySelector(".grid");

console.log(resultsInMonths);

avgTimePerWeek.forEach((result, i) => {
    const itemEl = document.createElement("div");
    itemEl.innerText = result;
    itemEl.classList.add("item");
    itemEl.style.animationDelay = `${1 + i * 0.05}s`;
    gridEl.appendChild(itemEl);
});

// avgTimePerWeek.forEach((result, i) => {
//     const itemEl = document.createElement("div");
//     itemEl.innerText = result;
//     itemEl.classList.add("item");
//     if (result === 20) {
//         itemEl.classList.add("color");
//     }
//     // itemEl.style.animationDelay = `${1 + i * 0.05}s`;
//     gridEl.appendChild(itemEl);
// });

// age.forEach((result, i) => {
//     const itemEl = document.createElement("div");
//     itemEl.innerText = result;
//     itemEl.classList.add("item");
//     if (result > 29 && result < 40) {
//         itemEl.classList.add("color");
//     }
//     setTimeout(() => {
//         result > 40 && itemEl.classList.add("color2");
//     }, 6000);
//     gridEl.appendChild(itemEl);
// });
