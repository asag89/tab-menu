
const hideAllTab = () => {
    document.querySelectorAll(".content").forEach((item) => {
        item.style.display = "none"
    })
}

const showTab = (itemId) => {
    hideAllTab();
    document.getElementById(itemId).style.display = "block";
}
