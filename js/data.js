const CATEGORIES = [
  { icon: "📱", name: "手机通讯", sub: ["智能手机", "手机配件", "运营商"] },
  { icon: "💻", name: "电脑办公", sub: ["笔记本", "台式机", "显示器"] },
  { icon: "📺", name: "智能设备", sub: ["智能手表", "智能音箱", "VR设备"] },
  { icon: "🏠", name: "家用电器", sub: ["电视", "冰箱", "洗衣机"] },
  { icon: "👕", name: "男装女装", sub: ["男装", "女装", "童装"] },
  { icon: "👟", name: "鞋靴箱包", sub: ["运动鞋", "休闲鞋", "箱包"] },
  { icon: "🍎", name: "食品生鲜", sub: ["水果", "蔬菜", "肉禽"] },
  { icon: "💄", name: "美妆护肤", sub: ["面部护理", "彩妆", "香水"] },
  { icon: "📚", name: "图书文具", sub: ["教材教辅", "文具", "办公用品"] },
  { icon: "🎮", name: "游戏电竞", sub: ["游戏主机", "游戏配件", "游戏软件"] },
  { icon: "⚽", name: "运动户外", sub: ["运动装备", "户外装备", "健身器材"] },
  { icon: "🧸", name: "母婴玩具", sub: ["奶粉辅食", "童装玩具", "洗护用品"] },
  { icon: "💊", name: "健康医药", sub: ["保健品", "医疗器械", "营养补充"] },
  { icon: "🚗", name: "汽车用品", sub: ["车载电子", "汽车装饰", "保养用品"] },
  { icon: "🔧", name: "五金工具", sub: ["电动工具", "手动工具", "测量工具"] },
];

const PRODUCTS = [
  { id: 1, name: "Apple iPhone 15 Pro Max 256GB 原色钛金属", price: 9999, original: 10999, img: "📱", comment: "15.8万+", tag: "自营", category: "手机通讯", specs: ["256GB", "512GB", "1TB"], colors: ["原色钛金属", "蓝色钛金属", "白色钛金属", "黑色钛金属"] },
  { id: 2, name: "华为 Mate 60 Pro 12GB+512GB 雅丹黑", price: 6999, original: 7999, img: "📱", comment: "12.3万+", tag: "自营", category: "手机通讯", specs: ["256GB", "512GB"], colors: ["雅丹黑", "白沙银", "南糯紫", "雅川青"] },
  { id: 3, name: "小米14 Ultra 16GB+512GB 龙晶黑", price: 5999, original: 6499, img: "📱", comment: "8.6万+", tag: "新品", category: "手机通讯", specs: ["256GB", "512GB", "1TB"], colors: ["龙晶黑", "龙晶白", "钛金属"] },
  { id: 4, name: "MacBook Pro 14英寸 M3 Pro芯片 18GB+512GB", price: 14999, original: 16499, img: "💻", comment: "5.2万+", tag: "自营", category: "电脑办公", specs: ["512GB", "1TB"], colors: ["深空黑", "银色"] },
  { id: 5, name: "联想 ThinkPad X1 Carbon 2024 i7/16G/512G", price: 9999, original: 11999, img: "💻", comment: "3.1万+", tag: "爆款", category: "电脑办公", specs: ["16GB+512G", "32GB+1T"], colors: ["黑色"] },
  { id: 6, name: "戴尔 27英寸 4K 专业设计显示器 U2723QE", price: 3699, original: 4299, img: "🖥️", comment: "2.8万+", tag: "好评", category: "电脑办公", specs: ["27英寸", "32英寸"], colors: ["银色"] },
  { id: 7, name: "索尼 WH-1000XM5 降噪头戴式耳机 黑色", price: 2399, original: 2999, img: "🎧", comment: "9.4万+", tag: "爆款", category: "智能设备", specs: ["黑色", "银色", "午夜蓝"], colors: ["黑色", "银色", "午夜蓝"] },
  { id: 8, name: "Apple Watch Ultra 2 钛金属表壳 49mm", price: 5999, original: 6499, img: "⌚", comment: "4.5万+", tag: "自营", category: "智能设备", specs: ["GPS", "GPS+蜂窝"], colors: ["钛金属原色"] },
  { id: 9, name: "海信 75英寸 U8K Mini LED 4K 144Hz 电视", price: 8999, original: 12999, img: "📺", comment: "1.8万+", tag: "降价", category: "家用电器", specs: ["65英寸", "75英寸", "85英寸"], colors: ["黑色"] },
  { id: 10, name: "美的 501升 双开门 冰箱 BCD-501WTPZM(E)", price: 3299, original: 4599, img: "🧊", comment: "6.2万+", tag: "自营", category: "家用电器", specs: ["480升", "501升", "606升"], colors: ["白色", "银色"] },
  { id: 11, name: "Nike Air Max 270 React 气垫运动鞋 黑白", price: 799, original: 1299, img: "👟", comment: "22.1万+", tag: "好评", category: "鞋靴箱包", specs: ["39", "40", "41", "42", "43", "44"], colors: ["黑白", "纯白", "灰蓝"] },
  { id: 12, name: "优衣库 男装 圆领T恤 纯棉基础款 多色可选", price: 59, original: 79, img: "👕", comment: "58.3万+", tag: "热卖", category: "男装女装", specs: ["S", "M", "L", "XL", "XXL"], colors: ["白色", "黑色", "灰色", "藏青", "军绿"] },
  { id: 13, name: "兰蔻 小黑瓶精华肌底液 50ml 第二代", price: 760, original: 1080, img: "💄", comment: "18.7万+", tag: "爆款", category: "美妆护肤", specs: ["30ml", "50ml", "75ml", "115ml"], colors: ["标准版"] },
  { id: 14, name: "SK-II 神仙水 护肤精华露 230ml", price: 1150, original: 1540, img: "✨", comment: "14.2万+", tag: "自营", category: "美妆护肤", specs: ["75ml", "160ml", "230ml", "330ml"], colors: ["标准版"] },
  { id: 15, name: "任天堂 Switch OLED 白色款 塞尔达限定", price: 2099, original: 2499, img: "🎮", comment: "31.5万+", tag: "爆款", category: "游戏电竞", specs: ["标准版", "oled版"], colors: ["白色", "经典红蓝"] },
  { id: 16, name: "戴森 V15 Detect 无绳吸尘器 激光探测版", price: 4490, original: 5490, img: "🔧", comment: "7.8万+", tag: "自营", category: "家用电器", specs: ["V12", "V15", "V15 Detect"], colors: ["金色", "蓝色"] },
  { id: 17, name: "小米手环8 Pro 1.74英寸 AMOLED 大屏", price: 249, original: 299, img: "⌚", comment: "42.6万+", tag: "热卖", category: "智能设备", specs: ["标准版", "NFC版"], colors: ["黑色", "银色", "金色"] },
  { id: 18, name: "iPad Air M2 11英寸 256GB Wi-Fi 星光色", price: 5499, original: 5999, img: "📱", comment: "6.9万+", tag: "新品", category: "电脑办公", specs: ["128GB", "256GB", "512GB"], colors: ["星光色", "紫色", "蓝色", "深空灰"] },
  { id: 19, name: "海尔 洗烘一体机 10公斤 直驱变频 EG100HB129S", price: 2799, original: 3999, img: "🧺", comment: "11.3万+", tag: "降价", category: "家用电器", specs: ["8公斤", "10公斤", "12公斤"], colors: ["白色"] },
  { id: 20, name: "SKG 颈椎按摩器 颈椎仪 K5 Pro 脉冲热敷", price: 499, original: 899, img: "💆", comment: "28.4万+", tag: "爆款", category: "健康医药", specs: ["K5", "K5 Pro", "K6"], colors: ["白色", "灰色"] },
];

const BANNERS = [
  { bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", text: "春季焕新季 数码好物抢不停" },
  { bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", text: "美妆盛典 大牌低至3折起" },
  { bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", text: "家电狂欢节 爆款限时秒杀" },
  { bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", text: "运动户外 陪你探索新世界" },
  { bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", text: "图书开学季 满200减100" },
];

function getCart() {
  try { return JSON.parse(localStorage.getItem("mm_cart")) || []; } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem("mm_cart", JSON.stringify(cart));
}

function addToCart(productId, qty) {
  const cart = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: qty });
  }
  saveCart(cart);
  updateCartBadge();
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".badge");
  const count = getCartCount();
  badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? "inline" : "none"; });
}

function formatPrice(p) {
  return p.toFixed(2);
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

