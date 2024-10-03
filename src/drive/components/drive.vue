<script>
</script>

<template>
<section class="drive-integrations-section">
    <div class="glue-page">
        <div class="logo-garden-heading">
            <h2 class="centered-content-heading">Drive integrates with the tools your team is already using</h2>
        </div>
        <div class="logo-garden">
            <ul class="logo-garden-links">
                <li>
                    <a href="https://b.543x.com" target="_blank" rel="noopener noreferrer" aria-label="Adobe integration">
                        <img src="./Three/logo-Adobe.svg" alt="adobe" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://d.543x.com" target="_blank" rel="noopener noreferrer" aria-label="Atlassian integration">
                        <img src="./Three/logo-Slack.svg" alt="slack" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://a.z2.pw" target="_blank" rel="noopener noreferrer" aria-label="Autodesk integration">
                        <img src="./Three/logo-Atlassian.svg" alt="atlassian" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://a.252x.com" target="_blank" rel="noopener noreferrer" aria-label="DocuSign integration">
                        <img src="./Three/logo-Autodesk.svg" alt="autodesk" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://b.252x.com" target="_blank" rel="noopener noreferrer" aria-label="Salesforce integration">
                        <img src="./Three/logo-Docusign.svg" alt="docusign" width="200" height="100">
                    </a>
                </li>
                <li>
                    <a href="https://c.252x.com" target="_blank" rel="noopener noreferrer" aria-label="Slack integration">
                        <img src="./Three/logo-Salesforce.svg" alt="salesforce" width="200" height="100">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>


<style>
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

