document.getElementsByClassName("content-title")[0].style.color = "red";

document.getElementById("main-actions-button").onclick = function scroll () {
    // 1 вариант
    // document.getElementById("products").scrollIntoView({behavior: "smooth"});

    // 2 вариант
    const test = document.getElementById("products");
    test.scrollIntoView({behavior: "smooth"});
    console.log(test)


}

