<script setup lang="ts">
</script>
<template>
<section class="drive-hero-section hero glue-mod-spacer-7-top glue-mod-spacer-6-bottom" id="js-overview">
  <div class="glue-page">
    <div class="glue-grid hero-wrapper">
      <div class="glue-grid__col glue-grid__col--span-12 glue-grid__col--span-6-lg glue-grid__col--span-5-xl glue-grid__col--align-middle">
        <div class="hero-content">
          <h1 class="glue-headline glue-headline--headline-2 hero-heading">
            Easy and secure access to your content
          </h1>
          <div class="glue-mod-spacer-3-top">
            <p class="hero-description glue-mod-font-weight-regular">
              Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
            </p>
          </div>
          <div class="hero-cta glue-mod-spacer-3-top" id="hero-cta-wrapper">
            <a href="https://workspace.google.com/intl/en/features?utm_source=driveforwork&utm_medium=et&utm_content=trydriveforyourteam&utm_campaign=hero" class="glue-button glue-button--high-emphasis hero-btn" target="_blank" rel="noopener noreferrer" data-category="cta" data-action="try drive for work" data-label="hero">Try Drive for Work</a>
            <a href="https://accounts.google.com/ServiceLogin?service=wise&passive=true&continue=http%3A%2F%2Fdrive.google.com%2F%3Futm_source%3Den&utm_medium=button&utm_campaign=web&utm_content=gotodrive&usp=gtd&ltmpl=drive&ec=asw-drive-hero-goto" class="glue-button glue-button--medium-emphasis" target="_blank" rel="noopener noreferrer" data-category="cta" data-action="go to drive" data-label="hero">Go to Drive</a>
          </div>
        </div>
      </div>
      <div class="hero-image glue-grid__col glue-grid__col--span-12 glue-grid__col--span-6-lg glue-grid__col--span-7-xl glue-grid__col--align-middle">
        <picture class="hero-content-image">
          <source srcset="https://lh3.googleusercontent.com/6MmVl3TEiBeEJCFIIfzO5DIgengYGPCdhEe8M6lXA6_Eh_xsKHDL_K4CLC31dETfiCue1hFOEf30IkIqlbOStvTfYbY_G85oEtJHQqjgz6OSXco8Aw=w0-l80-sg-rj-c0xffffff, https://lh3.googleusercontent.com/6MmVl3TEiBeEJCFIIfzO5DIgengYGPCdhEe8M6lXA6_Eh_xsKHDL_K4CLC31dETfiCue1hFOEf30IkIqlbOStvTfYbY_G85oEtJHQqjgz6OSXco8Aw=w0-l80-sg-rj-c0xffffff 2x">
          <img src="./Three/unnamed.jpg" class="hero-desktop-image" alt="Illustration of Google Drive interface showing folders and files" width="700" height="467">
        </picture>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.glue-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  font-family: 'Google Sans', Arial, sans-serif;
  color: #202124;
    --glue-blue: #1a73e8;
  --glue-gray: #5f6368;
}

.glue-grid {
  display: flex;
  flex-wrap: wrap;
}

.glue-grid__col {
  width: 100%;
}

.hero-wrapper {
  align-items: center;
}

.hero-content {
  padding: 48px 0;
}

.glue-headline {
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
  font-weight: 400;
}

.hero-description {
  font-size: 18px;
  line-height: 1.5;
  color: var(--glue-gray);
}

.glue-button {
  margin-right: 30px;
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.glue-button--high-emphasis {
  background-color: var(--glue-blue);
  color: white;
}

.glue-button--medium-emphasis {
  background-color: transparent;
  color: var(--glue-blue);
  border: 1px solid var(--glue-blue);
}

.glue-button--low-emphasis {
  background-color: transparent;
  color: var(--glue-blue);
  padding: 0;
}

.hero-dropdown {
  position: relative;
  display: inline-block;
}

.hero-dropdown-list {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
  padding: 8px 0;
}

.hero-dropdown-list a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.hero-dropdown-list a:hover {
  background-color: #f1f3f4;
}

.hero-content-image img {
  max-width: 100%;
  height: auto;
}

@media (min-width: 1024px) {
  .glue-grid__col--span-6-lg {
    width: 50%;
  }
}

@media (min-width: 1280px) {
  .glue-grid__col--span-5-xl {
    width: 41.66%;
  }
  .glue-grid__col--span-7-xl {
    width: 58.33%;
  }
}
</style>


