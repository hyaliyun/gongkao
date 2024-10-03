<script setup lang="ts">

</script>
<template>
<section class="glue-page drive__customers glue-mod-text-center" id="js-customers">
  <div class="glue-page">
    <section class="glue-mod-spacer-0-top">
      <div id="glue-carousel-drive" class="glue-carousel glue-carousel--simple js-customers-carousel glue-carousel--peek-out" aria-label="Customer testimonials">
        <div class="glue-carousel__viewport">
          <div class="glue-carousel__list">
            <div class="glue-carousel__item" id="glue-carousel-1" aria-label="Slide 1" tabindex="0" role="tabpanel">
              <div class="glue-tile__header glue-tile__header--icon">
                <img src="./Three/logo_Salesforce.svg" alt="salesforce icon" width="100" height="20">
              </div>
              <div class="content-heading">
                <h3 class="glue-headline glue-headline--headline-4">
                  "I never worry about finding a document. Everything's in Drive, I can access it anywhere, and that's been revolutionary."
                </h3>
              </div>
              <div class="content-link">
                <a aria-label="Read Salesforce Story" href="https://www.543x.com" target="_blank" rel="noopener noreferrer">Read Story</a>
              </div>
            </div>
            <div class="glue-carousel__item" id="glue-carousel-2" aria-label="Slide 2" tabindex="-1" role="tabpanel">
              <div class="glue-tile__header glue-tile__header--icon">
                <img src="./Three/logo-cardinal-group_01_1x.jpg" alt="cardinal group icon" width="100" height="100">
              </div>
              <div class="content-heading">
                <h3 class="glue-headline glue-headline--headline-4">
                  "Most of our team members were already familiar with Drive and found it very intuitive and easy to use, so change management was minimal and we were quickly up and running."
                </h3>
              </div>
              <div class="content-link">
                <a aria-label="Read Cardinal Group Story" href="https://www.z2.pw" target="_blank" rel="noopener noreferrer">Read Story</a>
              </div>
            </div>
            <div class="glue-carousel__item" id="glue-carousel-3" aria-label="Slide 3" tabindex="-1" role="tabpanel">
              <div class="glue-tile__header glue-tile__header--icon">
                <img src="./Three/logo_Ibotta_1x.jpg" alt="ibotta icon" width="100" height="100">
              </div>
              <div class="content-heading">
                <h3 class="glue-headline glue-headline--headline-4">
                  "Real-time collaboration with Google Docs and Drive is a must-have...if we ever tried to move employees off it, it would be a torches and pitchforks situation—complete chaos."
                </h3>
              </div>
              <div class="content-link">
                <a aria-label="Read Ibotta Story" href="https://www.434x.com" target="_blank" rel="noopener noreferrer">Read Story</a>
              </div>
            </div>
            <div class="glue-carousel__item" id="glue-carousel-4" aria-label="Slide 4" tabindex="-1" role="tabpanel">
              <div class="glue-tile__header glue-tile__header--icon">
                <img src="./Three/logo_ATB_Finance_1x_(1).jpg" alt="atb financial icon" width="100" height="100">
              </div>
              <div class="content-heading">
                <h3 class="glue-headline glue-headline--headline-4">
                  "Google is revolutionizing collaboration and individual productivity through AI. Employees can focus more on creating value for our customers and less on mundane tasks."
                </h3>
              </div>
              <div class="content-link">
                <a aria-label="Read ATB Financial Story" href="www.252x.com" target="_blank" rel="noopener noreferrer">Read Story</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

</template>

<style scoped>


.glue-page {
  font-family: 'Google Sans', Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f9fa;
  color: #202124;
}

.drive__customers {
  text-align: center;
}

.section-title {
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 40px;
  color: #1a73e8;
}

.glue-carousel {
  position: relative;
  margin-top: 40px;
}

.glue-carousel__viewport {
  overflow: hidden;
}

.glue-carousel__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  transition: transform 0.4s ease;
}

.glue-carousel__item {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(60,64,67,0.1), 0 1px 3px rgba(60,64,67,0.08);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glue-carousel__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(60,64,67,0.15), 0 4px 6px rgba(60,64,67,0.1);
}

.glue-tile__header--icon img {
  width: 100px;
  height: auto;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.glue-carousel__item:hover .glue-tile__header--icon img {
  transform: scale(1.1);
}

.glue-headline--headline-4 {
  font-size: 20px;
  line-height: 1.6;
  color: #3c4043;
  margin-bottom: 24px;
}

.content-link a {
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
}

.content-link a:hover {
  color: #174ea6;
}

.glue-carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(60,64,67,0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.glue-carousel__button:hover {
  background-color: #f1f3f4;
  box-shadow: 0 4px 8px rgba(60,64,67,0.2);
}

.glue-carousel__button--prev {
  left: -60px;
}

.glue-carousel__button--next {
  right: -60px;
}

.glue-icon {
  width: 24px;
  height: 24px;
  fill: #5f6368;
}

.glue-carousel__navigation {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 32px;
}

.glue-carousel__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #dadce0;
  margin: 0 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.glue-carousel__dot.glue-is-active {
  background-color: #1a73e8;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .glue-carousel__list {
    grid-template-columns: 1fr;
  }
  
  .glue-carousel__button {
    display: none;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .glue-headline--headline-4 {
    font-size: 18px;
  }
}

</style>


