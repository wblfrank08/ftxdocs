// 自定义JavaScript脚本
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Custom JavaScript loaded');
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log('Custom JavaScript loaded');
    const navItems = document.querySelectorAll('.md-nav__link');
    navItems.forEach((item, index) => {
        const parent = item.closest('.md-nav__item');
        const parentIndex = Array.from(parent.parentElement.children).indexOf(parent) + 1;
        item.textContent = `${parentIndex}. ${item.textContent}`;
    });
});
