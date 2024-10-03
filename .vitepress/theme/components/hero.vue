<script setup lang="ts">
document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 200);
      });
    });
</script>
<template>
<section>
    <div class="section-title">
      <h1>公务员指南</h1>
      <p class="description">
        一份开源公务员考试的最佳实践指南，一部解构体制工作生活的说明手册<a href="/guide/introduction.html">❓为什么</a>.
      </p>
    </div>

    <div class="card-container">
      <div class="card">
        <img src="/homepage/file-based-routing.png" alt="项目初心与使命" class="card-image">
        <div class="card-content">
          <h4 class="card-title">不忘初心，牢记使命</h4>
          <p class="card-description">
            网站致力于为广大无产程序员和开发者提供公考指南和体制说明手册，帮助大家少走弯路，相互理解，传播正能量。
          </p>
          <a href="/glossary/" class="card-link">牢记使命</a>
        </div>
      </div>

      <div class="card">
        <img src="/homepage/libraries.png" alt="发展现状与未来规划" class="card-image">
        <div class="card-content">
          <h4 class="card-title">稳中向好，展望未来</h4>
          <p class="card-description">
            网站现阶段发展稳中向好,未来将完善GitHub上既定文章,提升响应速度，推出交流社区、短视频、公众号等，持续为大家提供帮助。
          </p>
          <a href="/drive/team.html" class="card-link">展望未来</a>
        </div>
      </div>

      <div class="card">
        <img src="/homepage/tools.png" alt="问题与解决方案" class="card-image">
        <div class="card-content">
          <h4 class="card-title">直面问题，积极解决</h4>
          <p class="card-description">
            针对更新进度慢等问题，团队将优化内部流程，明确分工，确保内容质量和更新速度。同时鼓励用户反馈和参与，共同推动项目发展。
          </p>
          <a href="/rclone/" class="card-link">积极解决</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
 .section-title {
    text-align: center;
    margin-bottom: 40px;
    padding: 100px 0;
  }
  h1 {
    font-size: 2.5em;
    color: #2c3e50;
  }
  .description {
    font-size: 1.1em;
    color: #34495e;
    max-width: 800px;
    margin: 50px auto 0;
  }
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    width: calc(33.333% - 20px);
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: translateY(-5px);
  }
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .card-content {
    padding: 20px;
  }
  .card-title {
    font-size: 1.2em;
    margin-top: 0;
    color: #2c3e50;
  }
  .card-description {
    font-size: 0.9em;
    color: #7f8c8d;
  }
  a {
    color: #3498db;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .card-link {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    text-align: center;
  }
  .card-link:hover {
    background-color: #2980b9;
    text-decoration: none;
  }
  a {
    color: #3498db;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
</style>


