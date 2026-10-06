console.log("Live ..........")

function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
    console.log(sidebar, "side bar has been shown")
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
     console.log(sidebar, "side bar has been hidden")
}