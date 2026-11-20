const products=[
{id:1,name:"Petal Midi Dress",desc:"A graceful silhouette for every occasion",category:"dresses",tag:"DRESSES",price:2890,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:2,name:"The Everyday Dress",desc:"An easy favourite with a feminine touch",category:"dresses",tag:"EVERYDAY",price:2490,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:3,name:"Soft Blush Top",desc:"A lovely piece to dress up or down",category:"tops",tag:"NEW STYLE",price:1490,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/88b1033a-4218-4e13-9ce6-c00350ece868.png"},
{id:4,name:"Classic Chic Top",desc:"Simple, polished and easy to style",category:"tops",tag:"EVERYDAY",price:1290,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/88b1033a-4218-4e13-9ce6-c00350ece868.png"},
{id:5,name:"Tailored Wide-Leg Pants",desc:"A flattering fit with effortless elegance",category:"pants",tag:"THE EDIT",price:2290,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/e4466dcb-2268-4f7c-8e9c-d7c1366d177c.png"},
{id:6,name:"Everyday Straight Pants",desc:"Your new go-to wardrobe essential",category:"pants",tag:"ESSENTIAL",price:1990,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/e4466dcb-2268-4f7c-8e9c-d7c1366d177c.png"},
{id:7,name:"Flowing Mini Skirt",desc:"A playful shape with a soft finish",category:"skirts",tag:"FEMININE",price:1590,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:8,name:"Satin Midi Skirt",desc:"An elegant touch for day or evening",category:"skirts",tag:"THE EDIT",price:1890,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:9,name:"The Matching Set",desc:"A coordinated look made beautifully easy",category:"sets",tag:"TWO-PIECE",price:3290,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:10,name:"Relaxed Co-ord Set",desc:"A comfortable set with a polished feel",category:"sets",tag:"EVERYDAY",price:2990,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:11,name:"The Modern Jacket",desc:"The finishing layer for your favourite looks",category:"jackets",tag:"LAYER UP",price:3590,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:12,name:"Chic Cropped Jacket",desc:"A statement layer for everyday style",category:"jackets",tag:"THE EDIT",price:3290,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:13,name:"Cloud-Soft Sweater",desc:"Cosy comfort with a feminine finish",category:"sweaters",tag:"SOFT & COSY",price:2190,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:14,name:"Everyday Knit",desc:"An easy layer for cooler days",category:"sweaters",tag:"ESSENTIAL",price:1990,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:15,name:"Summer Ease Shorts",desc:"A relaxed fit for sunny days",category:"shorts",tag:"WEEKEND",price:1390,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"},
{id:16,name:"Tailored Everyday Shorts",desc:"A neat, versatile summer staple",category:"shorts",tag:"THE EDIT",price:1590,image:"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"}
];
const DEFAULT_PRODUCT_IMAGES=new Map(products.map(p=>[p.id,p.image]));
// Apply product edits saved by the RoseMoon admin on this browser.
try{
 const saved=JSON.parse(localStorage.getItem("rosemmoonFashionProductsV1"));
 if(Array.isArray(saved)) saved.forEach(item=>{const current=products.find(p=>p.id===item.id);if(current)Object.assign(current,item)});
}catch(error){console.warn("RoseMoon saved products could not be loaded",error)}
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const grid=$("#productGrid"),categoryGrid=$("#categoryGrid");let activeCategory="dresses",cart=[];
function normalizeCategory(value){const key=String(value??"").trim().toLowerCase().replace(/[^a-z]/g,"");const aliases={dress:"dresses",top:"tops",pant:"pants",skirt:"skirts",set:"sets",jacket:"jackets",sweater:"sweaters",short:"shorts"};return aliases[key]||key}
function renderProducts(){const shown=products.filter(p=>normalizeCategory(p.category)===activeCategory);grid.innerHTML=shown.length?shown.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price-request">Rs. ${p.price.toLocaleString("en-IN")}</span><button class="add-button" data-id="${p.id}">Add to bag <span>+</span></button></div></div></article>`).join(""):`<div class="no-products"><strong>More styles are on the way.</strong><span>Check back soon for new arrivals.</span></div>`}
function setCategory(category){const selected=normalizeCategory(category);const buttons=categoryGrid?Array.from(categoryGrid.querySelectorAll("button[data-category]")):[];if(!buttons.some(b=>normalizeCategory(b.dataset.category)===selected))return false;activeCategory=selected;buttons.forEach(b=>{const isSelected=normalizeCategory(b.dataset.category)===selected;b.classList.toggle("active",isSelected);b.classList.toggle("is-selected",isSelected);b.setAttribute("aria-pressed",String(isSelected))});renderProducts();const heading=$("#selectedCategoryTitle");if(heading)heading.textContent=selected.charAt(0).toUpperCase()+selected.slice(1);return true;}
function showView(view){$$(".view-panel").forEach(p=>p.classList.toggle("active",p.dataset.panel===view));$$(".nav-tab").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===view));if(view==="collections"){document.body.classList.add("crystal-player-visible");const player=document.getElementById("crystalPlayer");if(player)player.style.setProperty("display","grid","important");playRoseMoonMusic();requestAnimationFrame(()=>{grid.querySelectorAll(".product-card").forEach((card,i)=>{card.style.animationDelay=(i*65)+"ms"})})}}
renderProducts();
// Load browser-only product edits and any uploaded images saved in IndexedDB.
(async()=>{try{const request=indexedDB.open("RoseMoonFashionLocal",1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains("images"))request.result.createObjectStore("images")};const db=await new Promise((resolve,reject)=>{request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)});const saved=JSON.parse(localStorage.getItem("rosemmoonFashionProductsV1")||"[]");if(Array.isArray(saved))saved.forEach(item=>{const p=products.find(x=>x.id===item.id);if(p)Object.assign(p,item)});for(const p of products){if(typeof p.image==="string"&&p.image.startsWith("idb://")){try{const tx=db.transaction("images","readonly"),req=tx.objectStore("images").get(Number(p.image.slice(6)));const blob=await new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});p.image=blob?URL.createObjectURL(blob):(DEFAULT_PRODUCT_IMAGES.get(p.id)||"")}catch(imageError){p.image=DEFAULT_PRODUCT_IMAGES.get(p.id)||""}}}renderProducts();db.close()}catch(err){console.warn("RoseMoon local image storage could not be loaded",err);products.forEach(p=>{if(typeof p.image==="string"&&p.image.startsWith("idb://"))p.image=DEFAULT_PRODUCT_IMAGES.get(p.id)||""});renderProducts()}})();
const CATEGORY_DEFAULTS={"dresses":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png","tops":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/88b1033a-4218-4e13-9ce6-c00350ece868.png","pants":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/e4466dcb-2268-4f7c-8e9c-d7c1366d177c.png","skirts":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png","sets":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png","jackets":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png","sweaters":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png","shorts":"https://d2ol7oe51mr4n9.cloudfront.net/user_3JYbYCHyy3naSeG6RhPtSZPxh49/52a35cd0-f30f-40e5-9f27-68d12fd0c090.png"};const CATEGORY_POSITION_KEY="rosemmoonFashionCategoryPositionsV1";function applyCategoryPositions(){let positions={};try{positions=JSON.parse(localStorage.getItem(CATEGORY_POSITION_KEY)||"{}")}catch(e){}document.querySelectorAll("[data-category-photo]").forEach(img=>{const pos=positions[img.dataset.categoryPhoto]||{x:50,y:50,zoom:100};img.style.objectPosition=(pos.x??50)+"% "+(pos.y??50)+"%";img.style.transform="scale("+((pos.zoom??100)/100)+")";});}(async()=>{try{const request=indexedDB.open("RoseMoonFashionLocal",1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains("images"))request.result.createObjectStore("images")};const db=await new Promise((resolve,reject)=>{request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)});for(const cat of Object.keys(CATEGORY_DEFAULTS)){const req=db.transaction("images","readonly").objectStore("images").get("category-"+cat);const blob=await new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});if(blob){const img=document.querySelector('[data-category-photo="'+cat+'"]');if(img)img.src=URL.createObjectURL(blob)}}db.close();applyCategoryPositions()}catch(err){console.warn("RoseMoon category images could not be loaded",err);applyCategoryPositions()}})();// Apply the Home page image saved from Admin on this same browser.
try{const pos=JSON.parse(localStorage.getItem("rosemmoonFashionHomePositionV1")||'{"x":50,"y":30,"zoom":100}'),img=document.querySelector(".hero-image>img");if(img){img.style.objectPosition=(pos.x??50)+"% "+(pos.y??30)+"%";img.style.transform="scale("+((pos.zoom??100)/100)+")"}}catch(e){console.warn("RoseMoon home image position could not be applied",e)}
(async()=>{try{if(localStorage.getItem("rosemmoonFashionHomeImageV1")!=="idb://home")return;const request=indexedDB.open("RoseMoonFashionLocal",1);request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains("images"))request.result.createObjectStore("images")};const db=await new Promise((resolve,reject)=>{request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)});const req=db.transaction("images","readonly").objectStore("images").get("home");const blob=await new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});if(blob){const heroImage=document.querySelector(".hero-image>img");if(heroImage)heroImage.src=URL.createObjectURL(blob)}db.close()}catch(err){console.warn("RoseMoon home image could not be loaded",err)}})();
const openingScreen=$("#openingScreen");
function dismissOpeningScreen(){if(!openingScreen||openingScreen.dataset.dismissed==="true")return;openingScreen.dataset.dismissed="true";openingScreen.classList.add("is-leaving");window.setTimeout(()=>openingScreen.remove(),1000)}
const loadingBar=$("#loadingBarFill"),loadingStatus=$("#loadingStatus"),loadingTrack=$(".opening-progress");
const loadingStarted=Date.now(),loadingDuration=5000;
if(loadingTrack)loadingTrack.setAttribute("aria-valuenow","0");
function updateLoadingProgress(){const percent=Math.min(100,Math.floor(((Date.now()-loadingStarted)/loadingDuration)*100));if(loadingBar)loadingBar.style.setProperty("width",percent+"%","important");if(loadingTrack)loadingTrack.setAttribute("aria-valuenow",String(percent));if(loadingStatus)loadingStatus.textContent=percent>=100?"READY · WELCOME TO ROSEMMOON":"LOADING ROSEMMOON · "+percent+"%";if(percent<100&&openingScreen&&openingScreen.isConnected)requestAnimationFrame(updateLoadingProgress)}
requestAnimationFrame(updateLoadingProgress);window.setTimeout(dismissOpeningScreen,5000);
const toast=$("#actionToast");let toastTimer;
function showToast(message){$("#toastMessage").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900)}
$$(".nav-tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));

const roseMoonAudio=document.getElementById("roseMoonBackgroundMusic");
const ROSEMOON_MUSIC_KEY="rosemmoonFashionMusicLinksV1";
const ROSEMOON_DEFAULT_TRACKS=[
 "KATSEYE (캣츠아이) Gabriela (Audio) - Music Popers.mp3",
 "aespa 에스파 'Black Mamba' MV - SMTOWN.mp3",
 "aespa 에스파 'Next Level' MV - SMTOWN.mp3",
 "LILI’s FILM [The Movie] - Lilifilm Official.mp3",
 "Super Shy.mp3"
].map(name=>encodeURI("https://raw.githubusercontent.com/2002roshanmotion-ops/rosemmoon-fashion/main/music/"+name));
let roseMoonTracks=[],roseMoonTrackIndex=0;
try{const saved=localStorage.getItem(ROSEMOON_MUSIC_KEY);if(saved!==null){const stored=JSON.parse(saved);if(Array.isArray(stored))roseMoonTracks=stored.filter(url=>typeof url==="string"&&url.startsWith("https://"));}else{roseMoonTracks=ROSEMOON_DEFAULT_TRACKS;}}catch(e){roseMoonTracks=ROSEMOON_DEFAULT_TRACKS;}
// Prepare the first music track while the 5-second opening screen is visible.
// Browsers may block audible autoplay until the visitor taps the page.
if(roseMoonAudio&&roseMoonTracks.length){roseMoonAudio.preload="auto";roseMoonAudio.src=roseMoonTracks[0];roseMoonAudio.load();}
function playRoseMoonMusic(){if(!roseMoonAudio||!roseMoonTracks.length)return;const next=roseMoonTracks[roseMoonTrackIndex%roseMoonTracks.length];if(roseMoonAudio.src!==next)roseMoonAudio.src=next;roseMoonAudio.volume=.55;roseMoonAudio.play().catch(()=>{});}

if(roseMoonAudio)roseMoonAudio.addEventListener("ended",()=>{if(document.getElementById("crystalPlayer"))return;if(!roseMoonTracks.length)return;roseMoonTrackIndex=(roseMoonTrackIndex+1)%roseMoonTracks.length;playRoseMoonMusic();});
/* Crystal player controls */
(function(){
 const player=document.getElementById("crystalPlayer");
 if(!player||!roseMoonAudio)return;
 const byId=id=>document.getElementById(id);
 const playButton=byId("crystalPlay"),seek=byId("crystalSeek"),volume=byId("crystalVolume");
 const title=byId("crystalTrackName"),status=byId("crystalTrackStatus");
 const current=byId("crystalCurrentTime"),duration=byId("crystalDuration");
 const formatTime=value=>{if(!Number.isFinite(value)||value<0)return "0:00";const m=Math.floor(value/60),s=Math.floor(value%60);return m+":"+String(s).padStart(2,"0")};
 const trackTitle=url=>{try{const file=decodeURIComponent(new URL(url).pathname.split("/").pop()).replace(/\.mp3$/i,"");return file.replace(/\s+-\s+[^-]+$/,"").replace(/\s+/g," ").trim()}catch(e){return "RoseMoon Playlist"}};
 function updateTrack(){title.textContent=roseMoonTracks.length?trackTitle(roseMoonTracks[roseMoonTrackIndex%roseMoonTracks.length]):"No music available";status.textContent=roseMoonAudio.paused?"ROSEMOON PLAYLIST":"NOW PLAYING";player.classList.toggle("is-playing",!roseMoonAudio.paused)}
 function updateProgress(){const total=roseMoonAudio.duration||0;current.textContent=formatTime(roseMoonAudio.currentTime);duration.textContent=formatTime(total);if(!seek.matches(":active"))seek.value=total?Math.round(roseMoonAudio.currentTime/total*1000):0}
 function loadTrack(index,autoplay){if(!roseMoonTracks.length){status.textContent="NO TRACKS FOUND";return}roseMoonTrackIndex=(index+roseMoonTracks.length)%roseMoonTracks.length;roseMoonAudio.src=roseMoonTracks[roseMoonTrackIndex];roseMoonAudio.load();updateTrack();if(autoplay)roseMoonAudio.play().then(updateTrack).catch(()=>{status.textContent="TAP PLAY TO LISTEN"})}
 playButton.addEventListener("click",()=>{if(!roseMoonTracks.length){status.textContent="NO TRACKS FOUND";return}if(roseMoonAudio.paused){if(!roseMoonAudio.src)loadTrack(roseMoonTrackIndex,false);roseMoonAudio.play().then(updateTrack).catch(()=>{status.textContent="TAP PLAY TO LISTEN"})}else{roseMoonAudio.pause();updateTrack()}});
 byId("crystalPrev").addEventListener("click",()=>loadTrack(roseMoonTrackIndex-1,true));
 byId("crystalNext").addEventListener("click",()=>loadTrack(roseMoonTrackIndex+1,true));
 volume.addEventListener("input",()=>{roseMoonAudio.volume=Number(volume.value)});
 seek.addEventListener("input",()=>{if(roseMoonAudio.duration)roseMoonAudio.currentTime=Number(seek.value)/1000*roseMoonAudio.duration});
 byId("crystalCollapse").addEventListener("click",()=>{const minimized=player.classList.toggle("is-minimized");byId("crystalCollapse").textContent=minimized?"+":"−";byId("crystalCollapse").setAttribute("aria-label",minimized?"Expand music player":"Minimize music player")});
 roseMoonAudio.addEventListener("play",updateTrack);roseMoonAudio.addEventListener("pause",updateTrack);
 roseMoonAudio.addEventListener("loadedmetadata",updateProgress);roseMoonAudio.addEventListener("timeupdate",updateProgress);
 roseMoonAudio.addEventListener("ended",()=>{if(roseMoonTracks.length){roseMoonTrackIndex=(roseMoonTrackIndex+1)%roseMoonTracks.length;loadTrack(roseMoonTrackIndex,true)}});
 roseMoonAudio.addEventListener("error",()=>{status.textContent="TRACK UNAVAILABLE";});
 if(roseMoonTracks.length){if(!roseMoonAudio.src)roseMoonAudio.src=roseMoonTracks[0];updateTrack()}else updateTrack();
 volume.value=String(roseMoonAudio.volume||.55);
 updateProgress();
})();
$$("[data-open-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.openView)));

if(categoryGrid){categoryGrid.querySelectorAll("button[data-category]").forEach(button=>button.setAttribute("aria-pressed",String(normalizeCategory(button.dataset.category)===activeCategory)));const activateCategory=event=>{const button=event.target&&event.target.closest?event.target.closest("#categoryGrid button[data-category]"):null;if(!button||!categoryGrid.contains(button))return;if(event.type==="click")event.preventDefault();setCategory(button.dataset.category);};categoryGrid.addEventListener("click",activateCategory,true);categoryGrid.addEventListener("pointerup",event=>{if(event.pointerType==="touch"||event.pointerType==="pen")activateCategory(event)},true);}
const drawer=$("#cartDrawer"),overlay=$("#cartOverlay");
function openCart(){drawer.classList.add("open");overlay.classList.add("open");drawer.setAttribute("aria-hidden","false")}
function closeCart(){drawer.classList.remove("open");overlay.classList.remove("open");drawer.setAttribute("aria-hidden","true")}
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);overlay.addEventListener("click",closeCart);
grid.addEventListener("click",e=>{if(e.target.closest(".product-image img"))return;const b=e.target.closest("[data-id]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.id)),found=cart.find(x=>x.id===p.id);if(found)found.qty++;else cart.push({...p,qty:1});renderCart();showToast(p.name+" added to your bag");openCart()});
function renderCart(){$("#cartCount").textContent=cart.reduce((n,p)=>n+p.qty,0);$("#cartTotal").textContent="Rs. "+cart.reduce((n,p)=>n+p.price*p.qty,0).toLocaleString("en-IN");$("#cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div class="cart-item-details"><strong>${p.name}</strong><small>Rs. ${p.price.toLocaleString("en-IN")} each</small><div class="quantity-control" aria-label="Quantity controls for ${p.name}"><button type="button" data-qty="-1" data-id="${p.id}" aria-label="Decrease ${p.name} quantity">−</button><span>${p.qty}</span><button type="button" data-qty="1" data-id="${p.id}" aria-label="Increase ${p.name} quantity">+</button></div></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name}">Remove</button></div>`).join(""):'<p class="empty-cart">Your bag is waiting for something lovely.</p>'}
$("#cartItems").addEventListener("click",e=>{const qtyButton=e.target.closest("[data-qty]");if(qtyButton){const item=cart.find(p=>p.id===Number(qtyButton.dataset.id));if(item){item.qty+=Number(qtyButton.dataset.qty);if(item.qty<=0)cart=cart.filter(p=>p.id!==item.id);renderCart()}return}const removeButton=e.target.closest("[data-remove]");if(!removeButton)return;cart=cart.filter(p=>p.id!==Number(removeButton.dataset.remove));renderCart()});
const modal=$("#checkoutModal"),backdrop=$("#checkoutModalBackdrop");
function openCheckout(){if(!cart.length){$("#orderMethodMessage").textContent="Add an item to your bag first.";return}modal.classList.add("open");backdrop.classList.add("open");modal.setAttribute("aria-hidden","false");backdrop.setAttribute("aria-hidden","false")}
function closeCheckout(){modal.classList.remove("open");backdrop.classList.remove("open");modal.setAttribute("aria-hidden","true");backdrop.setAttribute("aria-hidden","true")}
$("#checkoutButton").addEventListener("click",openCheckout);$("#closeCheckoutModal").addEventListener("click",closeCheckout);backdrop.addEventListener("click",closeCheckout);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCheckout();closeCart();closeImagePreview()}});
const orderForm=$("#roseMoonOrderForm"),orderReady=$("#rmOrderReady"),orderMessage=$("#rmOrderMessage");
orderForm.addEventListener("submit",e=>{
 e.preventDefault();
 if(!cart.length){$("#orderMethodMessage").textContent="Your bag is empty. Add an item before preparing an order.";return}
 const data=new FormData(orderForm),items=cart.map(p=>"- "+p.name+" × "+p.qty+" — Rs. "+(p.price*p.qty).toLocaleString("en-IN")).join("\\n");
 const total=cart.reduce((sum,p)=>sum+p.price*p.qty,0);
 const message=["Hello RoseMoon! I'd like to place an order.","","Customer: "+data.get("customerName"),"Phone: "+data.get("customerPhone"),"Delivery address: "+data.get("deliveryAddress"),"","My items:",items,"","Total: Rs. "+total.toLocaleString("en-IN"),data.get("orderNote")?"Order note: "+data.get("orderNote"):"","Please confirm availability and delivery. Thank you!"].filter(Boolean).join("\\n");
 orderMessage.value=message;orderReady.hidden=false;$("#orderMethodMessage").textContent="Order details prepared. Copy the message and send it to @smoon991 on TikTok.";
});
$("#rmCopyOrder").addEventListener("click",async()=>{
 orderMessage.focus();orderMessage.select();orderMessage.setSelectionRange(0,orderMessage.value.length);
 try{await navigator.clipboard.writeText(orderMessage.value);showToast("Order message copied")}catch(err){try{document.execCommand("copy");showToast("Order message copied")}catch(e){showToast("Select and copy your order message")}}
});
const lightbox=$("#rmImageLightbox"),previewImage=$("#rmPreviewImage"),previewCaption=$("#rmPreviewCaption");
function closeImagePreview(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.classList.remove("rm-preview-open");previewImage.removeAttribute("src")}
grid.addEventListener("click",e=>{const img=e.target.closest(".product-image img");if(!img)return;e.preventDefault();previewImage.src=img.currentSrc||img.src;previewImage.alt=img.alt||"RoseMoon fashion product";previewCaption.textContent=img.alt||"RoseMoon Fashion";lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.classList.add("rm-preview-open")});
$("#rmCloseImagePreview").addEventListener("click",closeImagePreview);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeImagePreview()});
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Thank you for your interest in RoseMoon.";e.target.reset()});


/* Gentle scroll reveals and staggered entrance motion */
(function(){
  const revealTargets=document.querySelectorAll(".section-heading,.category-sidebar,.category-products-heading,.product-card,.story-image,.story-copy,.newsletter,footer");
  revealTargets.forEach((el,index)=>{el.classList.add("reveal-on-scroll");if(el.classList.contains("product-card"))el.style.transitionDelay=(index%4)*70+"ms"});
  if(!("IntersectionObserver" in window)){revealTargets.forEach(el=>el.classList.add("is-visible"));return}
  document.documentElement.classList.add("reveal-ready");
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}});
  },{threshold:.12,rootMargin:"0px 0px -35px 0px"});
  revealTargets.forEach(el=>revealObserver.observe(el));
})();


/* Interactive RoseMoon motion: floating petals, category crossfades and fly-to-bag */
(function(){
  const reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero=document.querySelector(".hero");
  if(hero&&!reduceMotion&&!hero.querySelector(".hero-petals")){
    const petals=document.createElement("div");petals.className="hero-petals";petals.setAttribute("aria-hidden","true");
    for(let i=0;i<7;i++){
      const petal=document.createElement("i");petal.className="hero-petal";
      petal.style.setProperty("--left",(7+i*13)+"%");
      petal.style.setProperty("--size",(9+(i%3)*5)+"px");
      petal.style.setProperty("--duration",(13+(i%4)*3)+"s");
      petal.style.setProperty("--delay",(-i*2.7)+"s");
      petal.style.setProperty("--sway",((i%2?1:-1)*(25+(i%3)*13))+"px");
      petals.appendChild(petal);
    }
    hero.appendChild(petals);
  }
  const heading=document.querySelector(".hero h1");
  if(heading&&!heading.dataset.wordsWrapped){
    heading.dataset.wordsWrapped="true";
    heading.innerHTML=heading.innerHTML.replace("Let your beauty","<span class='word-reveal'><span>Let your beauty</span></span>").replace("<em>speak.</em>","<span class='word-reveal'><span><em>speak.</em></span></span>");
  }
  const grid=document.querySelector("#productGrid");
  const categoryMenu=document.querySelector("#categoryGrid");
  if(categoryMenu&&grid){
    categoryMenu.addEventListener("click",event=>{
      if(!event.target.closest("[data-category]"))return;
      if(!reduceMotion){grid.classList.remove("category-changing");void grid.offsetWidth;grid.classList.add("category-changing");}
    });
  }
  function flyToBag(button){
    if(reduceMotion)return;
    const card=button.closest(".product-card"),image=card&&card.querySelector(".product-image img"),bag=document.querySelector("#openCart");
    if(!image||!bag||!image.getBoundingClientRect||!bag.getBoundingClientRect)return;
    const from=image.getBoundingClientRect(),to=bag.getBoundingClientRect();
    const flyer=document.createElement("img");flyer.className="fly-to-bag";flyer.src=image.currentSrc||image.src;flyer.alt="";
    Object.assign(flyer.style,{left:from.left+"px",top:from.top+"px",width:from.width+"px",height:from.height+"px"});
    document.body.appendChild(flyer);
    const dx=to.left+to.width/2-(from.left+from.width/2),dy=to.top+to.height/2-(from.top+from.height/2);
    if(flyer.animate){
      const animation=flyer.animate([{transform:"translate(0,0) scale(1)",opacity:1,borderRadius:"12px"},{transform:"translate("+dx*.55+"px,"+(dy*.45-55)+"px) scale(.55)",opacity:.85,offset:.62},{transform:"translate("+dx+"px,"+dy+"px) scale(.08)",opacity:0,borderRadius:"50%"}],{duration:720,easing:"cubic-bezier(.2,.75,.25,1)"});
      animation.onfinish=()=>flyer.remove();
    }else flyer.remove();
  }
  document.addEventListener("click",event=>{
    const add=event.target.closest(".add-button[data-id]");
    if(!add)return;
    flyToBag(add);
    const bag=document.querySelector("#openCart");
    if(bag&&!reduceMotion){bag.classList.remove("is-bouncing");void bag.offsetWidth;bag.classList.add("is-bouncing");}
  });
  if(grid&&"MutationObserver" in window){
    const observer=new MutationObserver(()=>{
      grid.querySelectorAll(".product-card").forEach((card,index)=>{
        if(card.dataset.motionReady)return;
        card.dataset.motionReady="true";
        if(!reduceMotion){card.style.animation="riseIn .55s "+(index*85)+"ms both";}
      });
    });
    observer.observe(grid,{childList:true});
  }
})();

/* RoseMoon motion layer — explicit user-requested animation */
(function(){
 if(document.querySelector(".rm-glitter-layer"))return;
 const layer=document.createElement("div");layer.className="rm-glitter-layer";layer.setAttribute("aria-hidden","true");
 const symbols=["✦","✧","⋆","✧","✦","✧"];
 for(let i=0;i<18;i++){
  const star=document.createElement("i");star.className="rm-glitter";star.textContent=symbols[i%symbols.length];
  star.style.left=((i*37+11)%96)+"%";star.style.top=((i*53+7)%92)+"%";
  star.style.fontSize=(13+(i%5)*5)+"px";
  star.style.setProperty("--delay",(-((i*.61)%6))+"s");
  star.style.setProperty("--blink",(2.2+(i%4)*.55)+"s");
  star.style.setProperty("--drift",(7+(i%5)*2)+"s");
  star.style.setProperty("--travel",((i%2?1:-1)*(18+(i%4)*9))+"px");
  layer.appendChild(star);
 }
 document.body.appendChild(layer);
})();
