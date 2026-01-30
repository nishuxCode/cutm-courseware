function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-260px";
    } else {
        sidebar.style.right = "0px";
    }
}