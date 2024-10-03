<script setup lang="ts">
</script>
<template>
<section class="features-section" id="js-features">
  <div class="features-wrapper">
    <div class="features-content">
      <h2 class="features-content-heading">程序员到公务员的桥梁</h2>
      <p class="features-text">旨在为程序员提供一条从编码到公务员的转型之路。通过分享上岸经历、备考策略和体制内生活，帮助程序员了解公务员考试的方方面面，以及进入体制后的真实生活状态。项目成员均来自程序员背景，以亲身经历为基础，为备考者提供实用指南。</p>
    </div>
    <div class="features-image">
      <picture>

        <img src="/homepage/1.png" class="features-desktop-image" alt="Drive Safe Content">
      </picture>
      <picture>

        <img src="/homepage/1.png" class="features-mobile-image" alt="Drive Safe Content">
      </picture>
    </div>
  </div>

  <div class="features-wrapper">
    <div class="features-image">
      <picture>

        <img src="/homepage/2.png" class="features-desktop-image" alt="Drive Supercharge">
      </picture>
      <picture>

        <img src="/homepage/2.png" class="features-mobile-image" alt="Drive Supercharge">
      </picture>
    </div>
    <div class="features-content">
      <h2 class="features-content-heading">备考资源全攻略</h2>
      <p class="features-text">备考公务员考试,资源是关键。网站整理了丰富的备考资源,包括历年真题、模拟试题、备考书籍、在线课程等，帮助考生全面备考。同时，推荐实用的备考网站和应用，让考生随时随地都能高效学习。</p>
    </div>
  </div>

  <div class="features-wrapper">
    <div class="features-content">
      <h2 class="features-content-heading">体制内生活真相大揭秘</h2>
      <p class="features-text">体制内生活到底如何?网站通过访谈体制内人士,揭秘公务员的真实工作状态、薪资待遇、晋升路径等。帮助备考者更全面地了解体制内生活，为未来的职业规划提供参考.</p>
    </div>
    <div class="features-image">
      <picture>

        <img src="/homepage/3.png" class="features-desktop-image" alt="Drive Tools Integration">
      </picture>
      <picture>

        <img src="/homepage/3.png" class="features-mobile-image" alt="Drive Tools Integration">
      </picture>
    </div>
  </div>

  <div class="features-wrapper">
    <div class="features-image">
      <picture>

        <img src="/homepage/4.png" class="features-desktop-image" alt="Drive search">
      </picture>
      <picture>

        <img src="/homepage/4.png" class="features-mobile-image" alt="Drive search">
      </picture>
    </div>
    <div class="features-content">
      <h2 class="features-content-heading">社区互动，共筑上岸之路</h2>
      <p class="features-text">网站不仅提供备考资源和体制内生活信息,还建立了公考社区,供考生交流心得、提问解惑。在这里,你可以找到志同道合的伙伴,共同学习进步,分享上岸的喜悦。加入网站,让我们一起筑梦上岸之路。</p>
    </div>
  </div>
</section>
</template>

<style scoped>
.features-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.features-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px;
}

.features-content {
  flex: 1;
  padding-right: 40px;
}

.features-image {
  flex: 1;
}

.features-content-heading {
  font-size: 28px;
  margin-bottom: 20px;
}

.features-text {
  font-size: 16px;
  line-height: 1.5;
}

.features-mobile-image {
  max-width: 100%;
  height: auto;
}

.features-mobile-image {
  display: none;
}

@media (max-width: 768px) {
  .features-wrapper {
    flex-direction: column;
  }

  .features-content {
    padding-right: 0;
    margin-bottom: 20px;
  }

  .features-desktop-image {
    display: none;
  }

  .features-mobile-image {
    display: block;
  }
}
</style>


