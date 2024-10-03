<script>
</script>

<template>
<section id="hero">
<div class="containers">
    <h1>Thousands of teams are already using </h1>
	<h1><span class="accent">Drive</span> to revolutionize the way they work</h1>
    <div class="logo-garden">
        <img src="./Three/Broadcom.svg" alt="broadcom" width="150" height="40">
        <img src="./Three/logo_Freedom.svg" alt="freedom" width="150" height="40">
        <img src="./Three/logo_Sanmina.svg" alt="sanmina" width="150" height="40">
        <img src="./Three/logo_Whirlpool.svg" alt="whirlpool" width="150" height="40">
    </div>
</div>
</section>
</template>


<style>
.containers {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
	font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}
h1 {
    font-size: 3.5rem;
    color: #202124;
    margin-bottom: 30px;
}
.logo-garden {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;
}
.logo-garden img {
    max-width: 150px;
    height: auto;
    transition: transform 0.3s ease;
}
.logo-garden img:hover {
    transform: scale(1.1);
}
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    .logo-garden {
        gap: 20px;
    }
    .logo-garden img {
        max-width: 100px;
    }
}
</style>

