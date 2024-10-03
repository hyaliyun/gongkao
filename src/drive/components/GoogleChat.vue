<script>
</script>

<template>
<div class="con">
    <section class="hero">
      <div class="hero-content">
        <img src="./Three/GoogleChatLogo_C358A6BD.svg" alt="Google Chat logo" width="168" height="36">
        <h11><span class="accent">Messaging and team collaboration</span></h11>
        <p>Real-time or anytime – Chat helps Workspace users connect and collaborate to get things done.</p>
        <div class="button-groups">
          <a href="https://accounts.google.com/ServiceLogin?continue=https://chat.google.com/?referrer=2&ec=wgc-chat-hero-signin" class="buttons primary-buttons">Sign in</a>
          <a href="https://accounts.google.com/ServiceLogin?continue=https://chat.google.com/?referrer=2&ec=wgc-chat-hero-signin" class="buttons secondary-buttons">Go to app</a>
          <div class="dropdown">
            <button class="buttons secondary-buttons">Try Chat for work</button>
			<div class="dropdown-content">
              <a href="https://workspace.google.com/business/">For small business</a>
              <a href="https://www.543x.com/">For enterprise</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <picture>
          <source srcset="https://lh3.googleusercontent.com/xjIOKBqdabq1Oajq8wzDiTpYF_w-zR1OoJiDdPodKmagWjGEoXtKmbr0tTKLU3E5Db1ck1Ks3hccqG0Qh_b7n4SOxPTWrrCCNJ_6w58=e365-pa-nu-rw-w1416" media="(min-width: 1024px)" width="1416" height="1260" type="image/webp">
          <source srcset="https://lh3.googleusercontent.com/kQ40gCgkOeJN23_0E5RkyN4XEQYxH0MbYmsRS5WmtmiZvghNH7HKf_1v4AtRM1TxIHFNQJz1aN5AIvCTZR5Yjs8ELx6txI9svHbvF1I=e365-pa-nu-rw-w1536" media="(min-width: 600px)" width="1536" height="980" type="image/webp">
          <img src="./Three/unnamedchat.webp" alt="Google Chat page that highlights shortcuts, a video call in progress, and an ongoing chat conversation with a link to a Google Doc, available reactions and replies." width="720" height="500">
        </picture>
      </div>
    </section>
  </div>
</template>


<style>
.con {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-content {
  flex: 1;
}

.hero-image {
  flex: 1;
  margin-bottom: 60px;
}

h11 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin: 60px 0;
  line-height: 1.3;
  margin-top: 60px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  margin-top: 30px;
}

.button-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.buttons {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.primary-buttons {
  background-color: var(--primary-color);
  color: #1765cc;
}

.primary-button:hover {
  background-color: #1765cc;
}

.secondary-buttons {
  background-color: #e8f0fe;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.secondary-button:hover {
  background-color: #e8f0fe;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: var(--text-color);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f3f4;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }

  .hero-content, .hero-image {
    flex: none;
    width: 100%;
  }

  .hero-image {
    order: -1; /* 将图片移到内容上方 */
  }

  h1 {
    font-size: 2rem;
  }

  .button-group {
    flex-direction: column;
  }

  .button {
    width: 100%;
    text-align: center;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-content {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 1px solid var(--secondary-color);
  }
}
</style>

