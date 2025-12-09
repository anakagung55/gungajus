<script>
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

const gridMode = document.querySelector(".posts-grid");
const listMode = document.querySelector(".posts-list");

gridBtn.addEventListener("click", () => {
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    gridMode.style.display = "grid";
    listMode.style.display = "none";
});

listBtn.addEventListener("click", () => {
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    gridMode.style.display = "none";
    listMode.style.display = "block";
});
</script>
