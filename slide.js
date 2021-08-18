const img = [
  { url: "1.jpg" },
  { url: "2.jpg" },
  { url: "3.jpg" },
  { url: "4.jpg" },
  { url: "5.jpg" },
  { url: "6.jpg" },
  { url: "7.jpg" },
  { url: "8.jpg" },
  { url: "9.jpg" },
];
let html = "";
img.forEach((e) => {
  html += ` <div class="col-md-4">
  <div class="card mb-4 shadow-sm">
  <img src="./images/${e.url}" alt="" />
    <div class="card-body">
      <p class="card-text">album xàm l bọn tao</p>
      <div
        class="d-flex justify-content-between align-items-center"
      ></div>
    </div>
  </div>
</div>`;
  document.querySelector("#show").innerHTML = html;
});
