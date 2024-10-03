<script>
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];
const images = document.querySelectorAll('.image-wrapper img');

images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
</script>

<template>
<section>
  <h1>点击图片放大</h1>
  <div class="image-container">
  <div class="image-wrapper">
    <img src="/assets/images/化学.png" alt="化学" width="800" height="600">
  </div>
</div>

<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>
</section>
</template>


<style>
h1 {
    color: #333;
    text-align: center;
}
.image-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
  .image-wrapper {
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .image-wrapper:hover {
    transform: scale(1.05);
  }
  .image-wrapper img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
  }
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 900px;
    max-height: 80%;
    object-fit: contain;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    .image-wrapper {
      width: 100%;
    }
    .modal-content {
      width: 100%;
    }
  }
</style>

