const products=[
{id:1,name:"The Rose Edit",desc:"A polished everyday look",category:"everyday",type:"everyday",tag:"EVERYDAY",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85"},
{id:2,name:"Moonlight Dress",desc:"An occasion-ready favourite",category:"occasion",type:"dresses",tag:"OCCASION",image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=85"},
{id:3,name:"Soft Form",desc:"Effortless, modern essentials",category:"essentials",type:"essentials",tag:"ESSENTIALS",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85"},
{id:4,name:"The Muse Look",desc:"A little statement, every day",category:"everyday",type:"everyday",tag:"THE EDIT",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85"}];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const grid=$("#productGrid"),filters=$("#shopFilters"),typeChips=$("#typeChips");let activeFilter="all",activeType="all",cart=[];
function renderProducts(){const shown=products.filter(p=>(activeFilter==="all"||p.category===activeFilter)&&(activeType==="all"||p.type===activeType));grid.innerHTML=shown.length?shown.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price-request">Price on request</span><button class="add-button" data-id="${p.id}">Add to bag <span>+</span></button></div></div></article>`).join(""):`<div class="no-products"><strong>More styles are on the way.</strong><span>Try another clothing type to explore available pieces.</span></div>`}
function setFilter(filter){activeFilter=filter;activeType="all";$$(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));$$(".type-chip").forEach(b=>b.classList.toggle("active",b.dataset.type==="all"));renderProducts()}
function setType(type){activeType=type;$$(".type-chip").forEach(b=>b.classList.toggle("active",b.dataset.type===type));renderProducts()}
function showView(view){$$(".view-panel").forEach(p=>p.classList.toggle("active",p.dataset.panel===view));$$(".nav-tab").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===view));if(view==="shop")requestAnimationFrame(()=>{grid.querySelectorAll(".product-card").forEach((card,i)=>{card.style.animationDelay=(i*65)+"ms"})})}
renderProducts();
const openingScreen=$("#openingScreen");
function dismissOpeningScreen(){if(!openingScreen||openingScreen.dataset.dismissed==="true")return;openingScreen.dataset.dismissed="true";openingScreen.classList.add("is-leaving");window.setTimeout(()=>openingScreen.remove(),750)}
// Show a visible loading percentage during the five-second opening screen.
const loadingBar=$("#loadingBarFill"),loadingStatus=$("#loadingStatus"),loadingTrack=$(".opening-progress");
const loadingStarted=Date.now(),loadingDuration=5000;
if(loadingTrack)loadingTrack.setAttribute("aria-valuenow","0");
function updateLoadingProgress(){
  const percent=Math.min(100,Math.floor(((Date.now()-loadingStarted)/loadingDuration)*100));
  if(loadingBar)loadingBar.style.setProperty("width",percent+"%","important");
  if(loadingTrack)loadingTrack.setAttribute("aria-valuenow",String(percent));
  if(loadingStatus)loadingStatus.textContent=percent>=100?"READY · WELCOME TO ROSEMMOON":"LOADING ROSEMMOON · "+percent+"%";
  if(percent<100&&openingScreen&&openingScreen.isConnected)requestAnimationFrame(updateLoadingProgress);
}
requestAnimationFrame(updateLoadingProgress);
// Keep the branded opening screen visible for five seconds.
window.setTimeout(dismissOpeningScreen,5000);
const toast=$("#actionToast");let toastTimer;
function showToast(message){$("#toastMessage").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),1900)}
$$(".nav-tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
$$("[data-open-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.openView)));
$$(".category-card").forEach(card=>card.addEventListener("click",e=>{e.preventDefault();const section=$("#collections");section.classList.add("has-selected-category");section.setAttribute("data-category-selected","true");$$(".category-card").forEach(item=>item.classList.toggle("is-selected",item===card));setFilter(card.dataset.category||"all");$("#typeBrowser").classList.add("is-visible");window.setTimeout(()=>$("#typeBrowser").scrollIntoView({behavior:"smooth",block:"nearest"}),160)}));
filters.addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(b)setFilter(b.dataset.filter)});\ntypeChips.addEventListener("click",e=>{const b=e.target.closest("[data-type]");if(b)setType(b.dataset.type)});
const viewAllButton=$("#viewAllProducts");if(viewAllButton)viewAllButton.addEventListener("click",()=>{const section=$("#collections");section.classList.add("has-selected-category");section.setAttribute("data-category-selected","true");$$(".category-card").forEach(item=>item.classList.remove("is-selected"));setFilter("all");$("#typeBrowser").classList.add("is-visible");window.setTimeout(()=>$("#shop").scrollIntoView({behavior:"smooth",block:"start"}),180)});
const drawer=$("#cartDrawer"),overlay=$("#cartOverlay");
function openCart(){drawer.classList.add("open");overlay.classList.add("open");drawer.setAttribute("aria-hidden","false")}
function closeCart(){drawer.classList.remove("open");overlay.classList.remove("open");drawer.setAttribute("aria-hidden","true")}
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);overlay.addEventListener("click",closeCart);
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.id)),found=cart.find(x=>x.id===p.id);if(found)found.qty++;else cart.push({...p,qty:1});renderCart();showToast(p.name+" added to your bag");openCart()});
function renderCart(){$("#cartCount").textContent=cart.reduce((n,p)=>n+p.qty,0);$("#cartTotal").textContent="Price confirmed with store";$("#cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>Quantity: ${p.qty} · Price on request</small></div><button class="remove-item" data-remove="${p.id}" aria-label="Remove ${p.name}">Remove</button></div>`).join(""):'<p class="empty-cart">Your bag is waiting for something lovely.</p>'}
$("#cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;cart=cart.filter(p=>p.id!==Number(b.dataset.remove));renderCart()});
const modal=$("#checkoutModal"),backdrop=$("#checkoutModalBackdrop");
function openCheckout(){if(!cart.length){$("#orderMethodMessage").textContent="Add an item to your bag first.";return}modal.classList.add("open");backdrop.classList.add("open");modal.setAttribute("aria-hidden","false");backdrop.setAttribute("aria-hidden","false")}
function closeCheckout(){modal.classList.remove("open");backdrop.classList.remove("open");modal.setAttribute("aria-hidden","true");backdrop.setAttribute("aria-hidden","true")}
$("#checkoutButton").addEventListener("click",openCheckout);$("#closeCheckoutModal").addEventListener("click",closeCheckout);backdrop.addEventListener("click",closeCheckout);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCheckout();closeCart()}});
$$(".order-method").forEach(b=>b.addEventListener("click",()=>{$$(".order-method").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");$("#orderMethodMessage").textContent=b.dataset.channel+" selected. Your bag is ready to share with us.";showToast(b.dataset.channel+" selected")}));
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Thank you for your interest in RoseMmoon.";e.target.reset()});