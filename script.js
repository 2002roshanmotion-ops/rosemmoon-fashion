const products=[
{id:1,name:"The Rose Edit",desc:"A polished everyday look",price:0,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85"},
{id:2,name:"Moonlight Dress",desc:"An occasion-ready favourite",price:0,image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85"},
{id:3,name:"Soft Form",desc:"Effortless, modern essentials",price:0,image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85"},
{id:4,name:"The Muse Look",desc:"A little statement, every day",price:0,image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85"}
];
const grid=document.getElementById("productGrid");
grid.innerHTML=products.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span>Price on request</span><button class="add-button" data-id="${p.id}">Add to bag +</button></div></div></article>`).join("");
let cart=[];
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("cartOverlay");
function openCart(){drawer.classList.add("open");overlay.classList.add("open");drawer.setAttribute("aria-hidden","false")}
function closeCart(){drawer.classList.remove("open");overlay.classList.remove("open");drawer.setAttribute("aria-hidden","true")}
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.id));const found=cart.find(x=>x.id===p.id);if(found)found.qty++;else cart.push({...p,qty:1});renderCart();openCart()});
function renderCart(){document.getElementById("cartCount").textContent=cart.reduce((n,p)=>n+p.qty,0);document.getElementById("cartTotal").textContent="Price confirmed with store";document.getElementById("cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>Quantity: ${p.qty} · Price on request</small></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name}">Remove</button></div>`).join(""):'<p class="empty-cart">Your bag is waiting for something lovely.</p>'}
document.getElementById("cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;cart=cart.filter(p=>p.id!==Number(b.dataset.remove));renderCart()});
const checkoutModal=document.getElementById("checkoutModal"),checkoutBackdrop=document.getElementById("checkoutModalBackdrop");
function openCheckoutModal(){if(!cart.length){document.getElementById("orderMethodMessage").textContent="Add an item to your bag first.";return}checkoutModal.classList.add("open");checkoutBackdrop.classList.add("open");checkoutModal.setAttribute("aria-hidden","false");checkoutBackdrop.setAttribute("aria-hidden","false")}
function closeCheckoutModal(){checkoutModal.classList.remove("open");checkoutBackdrop.classList.remove("open");checkoutModal.setAttribute("aria-hidden","true");checkoutBackdrop.setAttribute("aria-hidden","true")}
document.getElementById("checkoutButton").addEventListener("click",openCheckoutModal);
document.getElementById("closeCheckoutModal").addEventListener("click",closeCheckoutModal);
checkoutBackdrop.addEventListener("click",closeCheckoutModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCheckoutModal()});
checkoutModal.querySelectorAll(".order-method").forEach(button=>button.addEventListener("click",()=>{checkoutModal.querySelectorAll(".order-method").forEach(option=>option.classList.remove("selected"));button.classList.add("selected");document.getElementById("orderMethodMessage").textContent=button.dataset.channel+" selected. Direct ordering will be connected when your account links are ready."}));
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("newsletterMessage").textContent="Thank you! Newsletter sign-up will be connected soon.";e.target.reset()});


/* Switch full-screen views without page scrolling */
document.querySelectorAll(".nav-tab").forEach(tab=>tab.addEventListener("click",()=>{const target=tab.dataset.view;document.querySelectorAll(".view-panel").forEach(panel=>panel.classList.toggle("active",panel.dataset.panel===target));document.querySelectorAll(".nav-tab").forEach(item=>item.classList.toggle("active",item===tab));}));
document.querySelectorAll(".category-card").forEach(card=>card.addEventListener("click",event=>{event.preventDefault();document.querySelectorAll(".view-panel").forEach(panel=>panel.classList.toggle("active",panel.dataset.panel==="shop"));document.querySelectorAll(".nav-tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.view==="shop"));}));
