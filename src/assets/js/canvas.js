document.body.addEventListener("mouseenter", () => {
    const cursor = document.querySelector("#cursor");
    if (cursor)
    {
        cursor.style.opacity = "1";
    }
});

document.body.addEventListener("mouseleave", () => {
    const cursor = document.querySelector("#cursor");
    if (cursor)
    {
        cursor.style.opacity = "0";
    }
});
