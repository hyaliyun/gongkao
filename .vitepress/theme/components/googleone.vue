<script>
</script>

<template>
<section id="hero">
  <div class="contain">
   <div class="cont">
    <img src="/images/logo.svg" alt="Google" class="logos">
	</div>
    <a href="/about/faq.html" class="cta-button">快速开始</a>
    <div class="icon-grid">
    <div class="icon-item">
      <a href="https://www.252x.com" title="Secure"><img class="icon" src="/Three/amazon-photos.png" alt="docs icon"></a>
      <span class="icon-name">体制备考</span>
    </div>

    <div class="icon-item">
      <a href="https://www.434x.com" title="AI"><img class="icon" src="/Three/owner.png" alt="gmail icon"></a>
      <span class="icon-name">体制生活</span>
    </div>

    <div class="icon-item">
      <a href="https://www.543x.com" title="features"><img class="icon" src="/Three/shop.png" alt="meet icon"></a>
      <span class="icon-name">正文目录</span>
    </div>

    </div>
  </div>
</section>
</template>


<style>
.contain {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  text-align: center;

}

.cont {
    display: flex; /* 启用Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中，如果容器有高度的话 */
    padding: 40px 40px;
}

.logos {
  width: 100px;
  height: auto;
    display: flex; /* 启用Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center;
}

h1 {
  font-size: 36px;
  font-weight: 400;
  margin: 60px 30px;
  line-height: 2;
}

.cta-button {
  display: inline-block;
  background-color: #1a73e8;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1765cc;
}

.features {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.feature {
  flex-basis: 33.33%;
  padding: 0 20px;
  text-align: center;
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.feature-description {
  font-size: 14px;
  color: #5f6368;
}
.drive-integrations-section {
    text-align: center;
    padding: 60px 0;
}
.glue-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.logo-garden-heading {
    margin-bottom: 40px;
}
.centered-content-heading {
    font-size: 32px;
    color: #202124;
    margin-bottom: 20px;
}
.logo-garden-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
.logo-garden-links li {
    margin: 20px;
}
.logo-garden-links img {
    height: 80px; /* 图片高度翻倍 */
    width: auto; /* 保持宽高比 */
    transition: transform 0.3s ease;
}
.logo-garden-links img:hover {
    transform: scale(1.1);
}
@media (max-width: 768px) {
    .centered-content-heading {
        font-size: 24px;
    }
    .logo-garden-links {
        flex-direction: column;
        align-items: center;
    }
    .logo-garden-links li {
        margin: 15px 0;
    }
    .logo-garden-links img {
        height: 60px; /* 手机端图片高度稍微缩小，但仍比原始设计大 */
    }
}

</style>

