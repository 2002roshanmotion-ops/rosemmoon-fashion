const products=[
{id:1,name:"Petal Midi Dress",desc:"A graceful silhouette for every occasion",category:"dresses",tag:"DRESSES",price:2890,image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85"},
{id:2,name:"The Everyday Dress",desc:"An easy favourite with a feminine touch",category:"dresses",tag:"EVERYDAY",price:2490,image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=85"},
{id:3,name:"Soft Blush Top",desc:"A lovely piece to dress up or down",category:"tops",tag:"NEW STYLE",price:1490,image:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=85"},
{id:4,name:"Classic Chic Top",desc:"Simple, polished and easy to style",category:"tops",tag:"EVERYDAY",price:1290,image:"https://images.unsplash.com/photo-1564257577-1a9b3fda6b5d?auto=format&fit=crop&w=700&q=85"},
{id:5,name:"Tailored Wide-Leg Pants",desc:"A flattering fit with effortless elegance",category:"pants",tag:"THE EDIT",price:2290,image:"https://images.unsplash.com/photo-1506629905607-d9a9d4e9a6f4?auto=format&fit=crop&w=700&q=85"},
{id:6,name:"Everyday Straight Pants",desc:"Your new go-to wardrobe essential",category:"pants",tag:"ESSENTIAL",price:1990,image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85"},
{id:7,name:"Flowing Mini Skirt",desc:"A playful shape with a soft finish",category:"skirts",tag:"FEMININE",price:1590,image:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=85"},
{id:8,name:"Satin Midi Skirt",desc:"An elegant touch for day or evening",category:"skirts",tag:"THE EDIT",price:1890,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85"},
{id:9,name:"The Matching Set",desc:"A coordinated look made beautifully easy",category:"sets",tag:"TWO-PIECE",price:3290,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85"},
{id:10,name:"Relaxed Co-ord Set",desc:"A comfortable set with a polished feel",category:"sets",tag:"EVERYDAY",price:2990,image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85"},
{id:11,name:"The Modern Jacket",desc:"The finishing layer for your favourite looks",category:"jackets",tag:"LAYER UP",price:3590,image:"https://images.unsplash.com/photo-1548624149-f9b0c9a6b5a8?auto=format&fit=crop&w=700&q=85"},
{id:12,name:"Chic Cropped Jacket",desc:"A statement layer for everyday style",category:"jackets",tag:"THE EDIT",price:3290,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85"},
{id:13,name:"Cloud-Soft Sweater",desc:"Cosy comfort with a feminine finish",category:"sweaters",tag:"SOFT & COSY",price:2190,image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=85"},
{id:14,name:"Everyday Knit",desc:"An easy layer for cooler days",category:"sweaters",tag:"ESSENTIAL",price:1990,image:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=85"},
{id:15,name:"Summer Ease Shorts",desc:"A relaxed fit for sunny days",category:"shorts",tag:"WEEKEND",price:1390,image:"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85"},
{id:16,name:"Tailored Everyday Shorts",desc:"A neat, versatile summer staple",category:"shorts",tag:"THE EDIT",price:1590,image:"https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=700&q=85"}
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const grid=$("#productGrid"),categoryGrid=$("#categoryGrid");let activeCategory="dresses",cart=[];
function renderProducts(){const shown=products.filter(p=>p.category===activeCategory);grid.innerHTML=shown.length?shown.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price-request">Rs. ${p.price.toLocaleString("en-IN")}</span><button class="add-button" data-id="${p.id}">Add to bag <span>+</span></button></div></div></article>`).join(""):`<div class="no-products"><strong>More styles are on the way.</strong><span>Check back soon for new arrivals.</span></div>`}
function setCategory(category){activeCategory=category;categoryGrid.querySelectorAll("[data-category]").forEach(b=>{b.classList.toggle("active",b.dataset.category===category);b.classList.toggle("is-selected",b.dataset.category===category)});renderProducts();const heading=$("#selectedCategoryTitle");if(heading)heading.textContent=category.charAt(0).toUpperCase()+category.slice(1);}
function showView(view){$$(".view-panel").forEach(p=>p.classList.toggle("active",p.dataset.panel===view));$$(".nav-tab").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===view));if(view==="collections")requestAnimationFrame(()=>{grid.querySelectorAll(".product-card").forEach((card,i)=>{card.style.animationDelay=(i*65)+"ms"})})}
renderProducts();
const openingScreen=$("#openingScreen");
function dismissOpeningScreen(){if(!openingScreen||openingScreen.dataset.dismissed==="true")return;openingScreen.dataset.dismissed="true";openingScreen.classList.add("is-leaving");window.setTimeout(()=>openingScreen.remove(),750)}
const loadingBar=$("#loadingBarFill"),loadingStatus=$("#loadingStatus"),loadingTrack=$(".opening-progress");
const loadingStarted=Date.now(),loadingDuration=5000;
if(loadingTrack)loadingTrack.setAttribute("aria-valuenow","0");
function updateLoadingProgress(){const percent=Math.min(100,Math.floor(((Date.now()-loadingStarted)/loadingDuration)*100));if(loadingBar)loadingBar.style.setProperty("width",percent+"%","important");if(loadingTrack)loadingTrack.setAttribute("aria-valuenow",String(percent));if(loadingStatus)loadingStatus.textContent=percent>=100?"READY · WELCOME TO ROSEMMOON":"LOADING ROSEMMOON · "+percent+"%";if(percent<100&&openingScreen&&openingScreen.isConnected)requestAnimationFrame(updateLoadingProgress)}
requestAnimationFrame(updateLoadingProgress);window.setTimeout(dismissOpeningScreen,5000);
const toast=$("#actionToast");let toastTimer;
function showToast(message){$("#toastMessage").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900)}
$$(".nav-tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
$$("[data-open-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.openView)));
categoryGrid.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b)setCategory(b.dataset.category)});
const drawer=$("#cartDrawer"),overlay=$("#cartOverlay");
function openCart(){drawer.classList.add("open");overlay.classList.add("open");drawer.setAttribute("aria-hidden","false")}
function closeCart(){drawer.classList.remove("open");overlay.classList.remove("open");drawer.setAttribute("aria-hidden","true")}
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);overlay.addEventListener("click",closeCart);
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.id)),found=cart.find(x=>x.id===p.id);if(found)found.qty++;else cart.push({...p,qty:1});renderCart();showToast(p.name+" added to your bag");openCart()});
function renderCart(){$("#cartCount").textContent=cart.reduce((n,p)=>n+p.qty,0);$("#cartTotal").textContent="Rs. "+cart.reduce((n,p)=>n+p.price*p.qty,0).toLocaleString("en-IN");$("#cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>Rs. ${p.price.toLocaleString("en-IN")} · Quantity: ${p.qty}</small></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name}">Remove</button></div>`).join(""):'<p class="empty-cart">Your bag is waiting for something lovely.</p>'}
$("#cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;cart=cart.filter(p=>p.id!==Number(b.dataset.remove));renderCart()});
const modal=$("#checkoutModal"),backdrop=$("#checkoutModalBackdrop");
function openCheckout(){if(!cart.length){$("#orderMethodMessage").textContent="Add an item to your bag first.";return}modal.classList.add("open");backdrop.classList.add("open");modal.setAttribute("aria-hidden","false");backdrop.setAttribute("aria-hidden","false")}
function closeCheckout(){modal.classList.remove("open");backdrop.classList.remove("open");modal.setAttribute("aria-hidden","true");backdrop.setAttribute("aria-hidden","true")}
$("#checkoutButton").addEventListener("click",openCheckout);$("#closeCheckoutModal").addEventListener("click",closeCheckout);backdrop.addEventListener("click",closeCheckout);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCheckout();closeCart()}});
$$(".order-method").forEach(b=>b.addEventListener("click",()=>{$$(".order-method").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");$("#orderMethodMessage").textContent=b.dataset.channel+" selected. Your bag is ready to share with us.";showToast(b.dataset.channel+" selected")}));
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Thank you for your interest in RoseMmoon.";e.target.reset()});
