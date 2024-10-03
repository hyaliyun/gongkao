<script>
</script>

<template>
<section id="hero">
  <div class="contain">
   <div class="cont">
    <img src="./Three/meet.svg" alt="Google" class="logos">
	</div>
    <h1>How can we help you?</h1>
    <div class="logo-garden-h2">
 <section>
    <h2><span class="accent">Learn about the new Google Meet app</span></h2>
    <p>Google Duo and Google Meet have combined into a new Meet app for video calling and meetings. The Google Duo app and icon are now Google Meet. Learn how to download the new Meet app. Available features and encryption methods in the Meet app are different between Meetings, Meet calls, and Meet Legacy Calls (previously known as Duo). Learn about call and meeting encryption in Meet. When you communicate in Google Meet, you can use either Meetings: Create or join.</p>
    <a href="learn-more" class="read-more">Read more</a>
  </section>
  <section>
    <h2><span class="accent">Download the new Google Meet app</span></h2>
    <p>Google Duo and Google Meet have been combined into a new Meet app for video calling and meetings. Learn about changes to Google Duo. You can access your meetings in the new Meet app. You can uninstall Meet (original) after you migrate to the new Meet app. The original Meet app has been renamed to Meet (original). The Duo app name and icon are now Google Meet.</p>
    <a href="download-info" class="read-more">Read more</a>
  </section>
  <section>
    <h2><span class="accent">Set up & manage legacy calling in Google Meet</span></h2>
    <p>To use Meet legacy calling, previously Duo, you need to add an account. You can also add a phone number. Business and EDU users: Your admin controls legacy calling functionality. Learn how admins manage access to services. EDU users under age 18 don’t have access to the legacy calling functionality. Business and EDU users are also eligible for 1:1 cloud-encrypted calls that include the latest enterprise-compliant Meet features. Onboard as a new user with a personal</p>
    <a href="download-info" class="read-more">Read more</a>
  </section>
  <section>
    <h2><span class="accent">Make video or voice calls with Google Meet</span></h2>
    <p>Important: This article is about legacy calling in Google Meet (previously known as Duo.) You can use legacy calling to make: 1:1 video calls Group calls Voice calls Learn more about Meet calling and meeting offerings. For Enterprise & EDU: Learn how to make Meet calls. For meetings: Learn how to start or schedule a Google Meet video meeting. Tips: You need a mobile data plan or a Wi-Fi connection. Calls made through mobile data plans don't use mobile minutes. Charges</p>
    <a href="download-info" class="read-more">Read more</a>
  </section>
  <section>
    <h2><span class="accent">Join a meeting</span></h2>
    <p>Important: Learn how to join a meeting in the new Google Meet app. You can join a video meeting from Google Meet, Google Calendar, Gmail etc. You can also dial-in to a meeting from a phone or a meeting room or you can use Google Meet without a Google account. Learn which meetings you can join Personal account users As a personal account user, you can join: All meetings you're invited to by personal account users, Workspace Individual Subscribers, and Google One</p>
    <a href="download-info" class="read-more">Read more</a>
  </section>
    </div>
  </div>
  <div class="contain">
   <div class="cont">
    <img src="./Three/googleone.png" alt="Google" class="logo">
	</div>
    <h1>Secure storage and AI from Google</h1>
    <a href="https://one.google.com/about/plans" class="cta-button">Sign up for Google One</a>
    <div class="icon-grid">
    <div class="icon-item">
      <a href="https://www.252x.com" title="Secure"><img class="icon" src="./Three/amazon-photos.png" alt="docs icon"></a>
      <span class="icon-name">Secure</span>
    </div>

    <div class="icon-item">
      <a href="https://www.434x.com" title="AI"><img class="icon" src="./Three/owner.png" alt="gmail icon"></a>
      <span class="icon-name">AI</span>
    </div>

    <div class="icon-item">
      <a href="https://www.543x.com" title="features"><img class="icon" src="./Three/shop.png" alt="meet icon"></a>
      <span class="icon-name">features</span>
    </div>

    </div>
  </div>
</section>
</template>


<style>
html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contain {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;

}
.cont {
    display: flex; /* 启用Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中，如果容器有高度的话 */
}

.logos {
  width: 200px;
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
.logo-garden-h2 {
    margin-bottom: 40px;
	font-size: 24px;
}
.centered-content-heading {
    font-size: 32px;
    color: #202124;
    margin-bottom: 20px;
}
h2 {
  font-size: 24px;
  margin: 30px 30px;
  line-height: 1.5;
}
  p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .read-more {
    color: #1a73e8;
    text-decoration: none;
    font-weight: bold;
  }
  .read-more:after {
    content: " →";
  }
  .divider {
    border-bottom: 1px solid #dadce0;
    margin: 20px 0;
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

