<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import NewsLetter from './NewsLetter.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import VueMasteryModal from './VueMasteryModal.vue'

import google from './google.vue'

onMounted(load)
</script>


<template>
<section>
  <h11>中国古代建筑及园林</h11>
  <div class="image-container">
  <div class="image-wrapper">
    <img src="/assets/images/中国古代建筑及园林.png" alt="中国古代建筑及园林" width="800" height="600">
  </div>
</div>

<div id="imageModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImage">
</div>
</section>
  <section ><div id="viewer">
		<div class="sectionContainer">
		  <h1>代币展示</h1>
		  <p>人们使用 Solana 构建的代币列表</p>
		  <a class="formButton" href="https://github.com/hyaliyun/GoogleDrive/discussions/2" target="_blank">
			🙏 请添加您的代币
		  </a>
		</div>

		<div class="container">
		  <div class="showcase">
			<div class="app-card">
			  <div class="app-icon">
				<img src="./Three/facebook.png" alt="DOGE icon" width="70" height="70">
			  </div>
			  <div class="app-info">
				<div class="app-name">BTC</div>
				<div class="link-container">
					<a href="https://btc.543x.com/">Website</a>
					<span class="separator">•</span>
					<a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				</div>
				<a href="https://bitcoin.org/" class="learn-more">Learn more</a>
			  </div>
			</div>

			<div class="app-card">
				<div class="app-icon">
				  <img src="./Three/adsmanager.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">solana</div>
				  <div class="link-container">
					  <a href="http://sol.543x.com//">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://sol.543x.com//" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/metaquest.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">USDC</div>
				  <div class="link-container">
					  <a href="http://usdc.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/AizCbr94n73ykw7iefDbXc61AjQiQEULnTJs6m5Hdc6y">Swap</a>
				  </div>
				  <a href="http://usdc.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/messengerdesktop.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BUSD</div>
				  <div class="link-container">
					  <a href="http://busd.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="http://busd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/eth.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">Eth</div>
				  <div class="link-container">
					  <a href="https://eth.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="https://eth.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/officemobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">FDUSD</div>
				  <div class="link-container">
					  <a href="https://fdusd.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/outlookmobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">PANDA</div>
				  <div class="link-container">
					  <a href="http://panda.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6xvVWCy9KtkA7DnVtVUJqmMorrYxUS3VUcUYAzM59gXe">Swap</a>
				  </div>
				  <a href="http://panda.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>

			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/teamsmobile.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SATOSHI</div>
				  <div class="link-container">
					  <a href="http://satoshi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5TMTjmESoG6Hqbwrv9AeweoFyCet8Min2G48oQbhbTp6">Swap</a>
				  </div>
				  <a href="http://satoshi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/xboxgamepass.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">TON</div>
				  <div class="link-container">
					  <a href="http://ton.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://ton.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/skype.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">USDT</div>
				  <div class="link-container">
					  <a href="https://usdt.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/BSo8Z58sYiAnmTkEX5XFQLPxGERD3pgDKdVQtHneSbkJ">Swap</a>
				  </div>
				  <a href="https://usdt.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-shopping.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SHIB</div>
				  <div class="link-container">
					  <a href="http://shib.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://shib.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/jon-bloomer.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">NO</div>
				  <div class="link-container">
					  <a href="http://no.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/Bz1kKXV74cznsVJSu4cPcdrD2ZbCv6raez9Bq5Edmtgw">Swap</a>
				  </div>
				  <a href="http://no.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-photos.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">CLOWN</div>
				  <div class="link-container">
					  <a href="http://clown.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5m7P7Ye2wHatH6TmFbzyNoaYvdPcnDTfzuZZPU9drbxW">Swap</a>
				  </div>
				  <a href="http://clown.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-kindle.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BNB</div>
				  <div class="link-container">
					  <a href="https://bnb.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/7CdHDxxdEFEM8MEHaEPNfzL18D8w35AkArWrd9SH7bC2">Swap</a>
				  </div>
				  <a href="https://bnb.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/amazon-appstore.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SATS</div>
				  <div class="link-container">
					  <a href="http://sats.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://sats.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shopify.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">tiger</div>
				  <div class="link-container">
					  <a href="http://dog.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://dog.543x.com//" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shop.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">JUMP</div>
				  <div class="link-container">
					  <a href="http://jump.543x.com">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9JqQPaU6azN6yRjrRg3MSka4tLeMEKpZ2pe5D3CLnoc">Swap</a>
				  </div>
				  <a href="http://jump.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/shopify-inbox.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">A</div>
				  <div class="link-container">
					  <a href="https://a.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/8NzwPPEQJFkjRqeBd1jpy3efnvYmgyCk18bqujqiqa4k">Swap</a>
				  </div>
				  <a href="https://a.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/pos.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">MIQI</div>
				  <div class="link-container">
					  <a href="https://miqi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/7gZYm4VQd4hTNgA9Eapdq37XLcuGjHYAq6CQ6NM2SXUu">Swap</a>
				  </div>
				  <a href="https://miqi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/x.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">X</div>
				  <div class="link-container">
					  <a href="https://x.543x.com//">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/2onAYHGyxUV4JuYeUQbFwbKmKUXyTA9v5aKiGx2TesR7">Swap</a>
				  </div>
				  <a href="https://x.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/spaces.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SHEEP</div>
				  <div class="link-container">
					  <a href="https://sheep.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GYJkxTb1WLQELBFCXgLxPACuKA1Abd3bJFPKrEPsG5m9">Swap</a>
				  </div>
				  <a href="https://sheep.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/dine.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">PEACE</div>
				  <div class="link-container">
					  <a href="https://peace.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://peace.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/fit.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">XRP</div>
				  <div class="link-container">
					  <a href="https://xrp.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://xrp.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/owner.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">pig</div>
				  <div class="link-container">
					  <a href="http://pig.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://pig.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/cow.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">cow</div>
				  <div class="link-container">
					  <a href="https://cow.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GHNBzjJe12m37Jj9JV4Jz6cunA34oCbXcgudCocPMJ4H">Swap</a>
				  </div>
				  <a href="https://cow.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/puma.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">DOGE</div>
				  <div class="link-container">
					  <a href="http://doge.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/vVTYpKUvcZHr5EJJKRefamq7u8W8eDjz7gqERAvga3R">Swap</a>
				  </div>
				  <a href="http://doge.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/dave.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">horse</div>
				  <div class="link-container">
					  <a href="http://cat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/discord.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">DONALD</div>
				  <div class="link-container">
					  <a href="https://donald.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://donald.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/tesla.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SNAKE</div>
				  <div class="link-container">
					  <a href="https://snake.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://snake.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/pinterest.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">RABBIT</div>
				  <div class="link-container">
					  <a href="https://rabbit.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/FbrPuX8tinmx2yxwxmYGZfZQbkS8FL9gG1dzQiWMamER">Swap</a>
				  </div>
				  <a href="https://rabbit.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/mercari.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">YY</div>
				  <div class="link-container">
					  <a href="http://yy.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://yy.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/playstation.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">GF</div>
				  <div class="link-container">
					  <a href="http://gf.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/5zz1MnzBxhozPoGDGysdu4CeeMEVeJ1cay8gpgw6Motb">Swap</a>
				  </div>
				  <a href="http://gf.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/openvpn.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">YAYA</div>
				  <div class="link-container">
					  <a href="https://yaya.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/Di9aeHFYeczWysnQsbNpxFgqTzJYyU9pKCovSdrhFXHQ">Swap</a>
				  </div>
				  <a href="https://yaya.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/tableau.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">ORD</div>
				  <div class="link-container">
					  <a href="http://ord.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="http://ord.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/wordpress.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">CAT</div>
				  <div class="link-container">
					  <a href="http://cat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9oRdiNMEPegLEmczr55zhTygRymQn44D7Ry5Cduj4VXv">Swap</a>
				  </div>
				  <a href="http://cat.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/flipkart.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">QQ</div>
				  <div class="link-container">
					  <a href="http://qq.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/83fGy9Fgm83CA44DU8NmhLfF2Bjq8v6dqsLcQN6NRDwm">Swap</a>
				  </div>
				  <a href="http://qq.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/bloomberg.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">MIMI</div>
				  <div class="link-container">
					  <a href="https://mimi.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://mimi.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/walmart.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">RAT</div>
				  <div class="link-container">
					  <a href="https://rat.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/AEgbTbDjXX6PYgQ6DdxCmF185hSwECueVyyFg2HsXNdo">Swap</a>
				  </div>
				  <a href="https://rat.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/baidu.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">monkey</div>
				  <div class="link-container">
					  <a href="https://monkey.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6JZ53cKczUmwAqz8F59TZ7ur84AjAgLFWqWNauhsdhFY">Swap</a>
				  </div>
				  <a href="https://monkey.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/callofduty_companion.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">SEAL</div>
				  <div class="link-container">
					  <a href="https://seal.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/Chicken.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">Chicken</div>
				  <div class="link-container">
					  <a href="https://ord.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="https://ord.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/words2.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">dragon</div>
				  <div class="link-container">
					  <a href="https://dragon.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/95TETWfUrkUnM6sCSizsQTDJ2tHXBXRZA6mEnjGfpgCb">Swap</a>
				  </div>
				  <a href="https://dragon.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/foreca.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">TRON</div>
				  <div class="link-container">
					  <a href="https://seal.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/nerdwallet.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">ADA</div>
				  <div class="link-container">
					  <a href="http://ada.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://ada.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/lendmn.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">OTTER</div>
				  <div class="link-container">
					  <a href="https://otter.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/9XeEoYSMyG5tWpNKMBKivsbbjfjrPj2rFBQUEut3vDVu">Swap</a>
				  </div>
				  <a href="https://otter.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/artsy.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">pepe</div>
				  <div class="link-container">
					  <a href="https://pepe.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/eZ4L3WKdaCHWbocvuA5QhMvR3AwdmhpNfPW9ynHJGx6">Swap</a>
				  </div>
				  <a href="https://pepe.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/1831.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">BCH</div>
				  <div class="link-container">
					  <a href="https://www.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
			  <div class="app-card">
				<div class="app-icon">
				  <img src="./Three/4195.png" alt="DOGE icon" width="70" height="70">
				</div>
				<div class="app-info">
				  <div class="app-name">FTX</div>
				  <div class="link-container">
					  <a href="https://www.543x.com/">Website</a>
					  <span class="separator">•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" class="learn-more">Learn more</a>
				</div>
			  </div>
		  </div>
		</div>
    </div>
</section>
  <google />
  <!-- <NewsLetter /> -->
</template>

<style scoped>

.link-container {
	display: flex;
	align-items: center;
	justify-content: center;
  }

  .separator {
	margin: 0 20px;
  }

  a {
	text-decoration: none;
  }
* {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}


a {
	text-decoration: none;
}

h1 {
	font-size: 18px;
	line-height: 24px;
	font-weight: 500;
}

h2 {
	padding: 0;
	margin: 16px 0;
	font-size: calc(var(--font-size) - 1px);
	line-height: var(--line-height);
	font-weight: 500;

}

h3 {
	margin: 0;
	font-weight: 500;
	font-size: calc(var(--font-size) - 1px);
	line-height: var(--line-height);
	color: var(--secondary-text-color);
}


header {
	padding: 20px 0;
	background-color: #f5f5f5;
	border-bottom: 1px solid #e0e0e0;
  }

  h1 {
	font-family: Arial, sans-serif;
	font-size: 2.5rem;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
  }

  .logo {
	font-weight: bold;
	margin-right: 10px;
  }

  .version-link {
	font-size: 1rem;
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 15px;
	background-color: #e6f2ff;
	transition: background-color 0.3s ease;
  }

  .version-link:hover {
	background-color: #cce5ff;
  }

  .container {
	max-width: 1200px;
	margin: 0 auto;
	background-color: white;
	padding: 30px;
	box-shadow: 0 0 20px rgba(0,0,0,0.05);
	border-radius: 12px;
  }

  .showcase {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 25px;
  }

  .app-card {
	background-color: white;
	border: 1px solid #e0e0e0;
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.3s ease;
	box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }

  .app-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }

  .app-icon {
	width: 100%;
	height: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
  }

  .app-icon img {
	max-width: 70px;
	max-height: 70px;
	transition: transform 0.3s ease;
  }

  .app-card:hover .app-icon img {
	transform: scale(1.1);
  }

  .app-info {
	padding: 15px;
	text-align: center;
  }

  .app-name {
	font-weight: 600;
	margin-bottom: 8px;
	font-size: 16px;
  }

  .app-links {
	font-size: 14px;
	color: #6c757d;
  }

  .app-links a {
	color: #3498db;
	font-weight: 500;
  }

  .learn-more {
	color: #6c757d;
	font-size: 13px;
	font-weight: 500;
	display: inline-block;
	margin-top: 10px;
	padding: 5px 10px;
	border: 1px solid #e0e0e0;
	border-radius: 20px;
	transition: all 0.3s ease;
  }

  .learn-more:hover {
	background-color: #3498db;
	color: white;
	border-color: #3498db;
  }


.sectionContainer {
    text-align: center;
    max-width: 600px; /* Optional: Adjust based on content and design needs */
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: Add a subtle shadow for visual appeal */
  }

  h11 {
    margin-bottom: 20px;
    padding: 100px 0;
    font-family: Arial, sans-serif;
	font-size: 2.5rem;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
  }

  p {
    margin-bottom: 20px;
  }

  .formButton {
    display: inline-block;
    text-decoration: none;
    color: #000; /* Default black text color */
    background-color: transparent; /* No background color */
    border: 2px solid #000; /* Default black border */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s; /* Optional: Smooth transition effects */
  }

  .formButton:hover {
    background-color: #f0f0f0; /* Light gray hover background */
    border-color: #f0f0f0; /* Matching hover border color */
  }


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
