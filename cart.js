// مصفوفة لتخزين المنتجات المضافة إلى السلة
const cartItems = [];

// دالة لإضافة منتج إلى السلة
function addToCart(productName) {
    // إضافة المنتج إلى مصفوفة السلة
    cartItems.push(productName);

    // تحديث عرض عربة التسوق
    updateCartDisplay();
}

// دالة لتحديث عرض عربة التسوق
function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");

    // مسح عناصر العربة الحالية
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    // إضافة العناصر الجديدة إلى عربة التسوق
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });
}
