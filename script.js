
/*Slider*/
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".categoriesSwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
});

  const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");

toggle.onclick = () => {
  menu.classList.toggle("active");
};

/*-----------------------------------------------------*/

/*Search*/

document.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("searchInput");
    let resultsBox = document.getElementById("searchResults");

    let products = [
      /*Cpu*/
        { name: "Ryzen 5 3600 Tray", link: "Products/Cpu/Ryzen 5 3600/index.html" },
         { name: "Ryzen 5 2600 Tray", link: "Products/Cpu/Ryzen 5 2600/index.html" },
         { name: "Ryzen 5 3400G Tray", link: "Products/Cpu/Ryzen 5 3400G/index.html" },
         { name: "Ryzen 5 5500 Tray", link: "Products/Cpu/Ryzen 5 5500/index.html" },
         { name: "Ryzen 5 5600X Tray", link: "Products/Cpu/Ryzen 5 5600X/index.html" },
         { name: "Ryzen 7 5700X Tray", link: "Products/Cpu/Ryzen 7 5700X/index.html" },
         { name: "Core Ultra 5 225F", link: "Products/Cpu/Core Ultra 5 225F/index.html" },
         { name: "Core I5-14400F Tray", link: "Products/Cpu/Core I5-14400F/index.html" },
         { name: "Core I5-12400F Tray", link: "Products/Cpu/Core I5-12400F/index.html" },
         /*Motherboard*/
         { name: "Asus Prime A520M-R", link: "Products/Motherboards/Asus Prime A520 M-R/index.html" },
         { name: "Asus Prime A520M-K", link: "Products/Motherboards/Asus Prime A520M-k/index.html" },
         { name: "Arktek H610-eg", link: "Products/Motherboards/Arktek H610-eg/index.html" },
         { name: "Msi A520M-A Pro", link: "Products/Motherboards/Msi A520M-A Pro/index.html" },
         { name: "Asus Prime A620M-A", link: "Products/Motherboards/Asus Prime A620M-A/index.html" },
         { name: "Gigabyte B650M-H", link: "Products/Motherboards/Gigabyte B650M-H/index.html" },
         { name: "Msi PRO A620M-E", link: "Products/Motherboards/Msi  PRO A620M-E/index.html" },
         { name: "Msi B650M-P Pro", link: "Products/Motherboards/Msi B650M-P Pro/index.html" },
         { name: "Asus Prime B450M-K", link: "Products/Motherboards/Asus Prime B450M-K II/index.html" },
         { name: "Asus Prime B450M-A II", link: "Products/Motherboards/Asus Prime B450M-A II/index.html" },
         { name: "Gigabyte B450M-Gaming", link: "Products/Motherboards/Gigabyte B450M-Gaming/index.html" },
         { name: "Gigabyte H810M H", link: "Products/Motherboards/Gigabyte H810M H/index.html" },
         { name: "Msi B450M-A Pro Max II", link: "Products/Motherboards/Msi B450M-A Pro Max II/index.html" },
         { name: "Msi B450M-Pro Vdh", link: "Products/Motherboards/Msi B450M-Pro Vdh/index.html" },
         /*Storage*/
         { name: "Crucaul M.2 1T", link: "Products/Storage/Crucail M.2 1T/index.html" },
         { name: "Crucail SSD 1T", link: "Products/Storage/Crucail m.2 1t/index.html" },
         { name: "Crucail SSD 512GB", link: "Products/Storage/Crucail ssd 512/index.html" },
         { name: "Dahua SSD 256GB", link: "Products/Storage/Dahua ssd 256/index.html" },
         { name: "Hikvision M.2 256GB", link: "Products/Storage/Hikvision m.2 256/index.html" },
         { name: "Lexar SSD 1T", link: "Products/Storage/Lexar ssd 1t/index.html" },
         { name: "Msi M.2 1T", link: "Products/Storage/Msi M.2 1T/index.html" },
         { name: "Samsung Evo 1T", link: "Products/Storage/Samsung Evo 1T/index.html" },
         /*Memory*/
         { name: "Crucail RAM 8GB 2600MHZ", link: "Products/Memory/Crucail Ram 8GB 2666/index.html" },
         { name: "Crucail RAM 8GB 3200MHZ", link: "Products/Memory/Crucail Ram 8GB 3200/index.html" },
         { name: "Crucail RAM 16GB 2600MHZ", link: "Products/Memory/Crucail Ram 16GB 2666/index.html" },
         { name: "KINGSTONE FURY RAM 16GB 3200MHZ", link: "Products/Memory/K.S 16GB/index.html" },
         { name: "KINGSTONE FURY RAM 8GB 3200MHZ", link: "Products/Memory/K.S 8GB/index.html" },
         { name: "KINGSTONE FURY RAM 16GB RGP 3200MHZ", link: "Products/Memory/K.S 16GB RGP/index.html" },
         { name: "KINGSTONE FURY RAM 8GB RGP 3200MHZ", link: "Products/Memory/K.S 8GB RGP/index.html" },
         { name: "Crucail RAM 16GB 3200MHZ", link: "Products/Memory/Crucail Ram 16GB 3200/index.html" },
         { name: "G-SKILL 16GB RGP", link: "Products/Memory/G-SKILL 16GB RGP/index.html" },
         { name: "XPG 16GB RGP 6000MHZ", link: "Products/Memory/XPG 16GB RGP 6000/index.html" },
        /*Vga*/
        { name: "Asus Rog Gtx 1080 Ti", link: "Products/Vga/gtx 1080 ti/index.html" },
         { name: "Zotac Gtx 1660 Super", link: "Products/Vga/gtx 1660 s/index.html" },
         { name: "Asus Rtx 2060 6GB", link: "Products/Vga/rtx 2060/index.html" },
         { name: "Msi Rtx 2060 Super", link: "Products/Vga/rtx 2060 s/index.html" },
         { name: "Zotac Rtx 2070 8GB", link: "Products/Vga/rtx 2070/index.html" },
         { name: "Asus Rtx 2070 Super", link: "Products/Vga/rtx 2070 s/index.html" },
         { name: "Zotac Rtx 2080 8GB", link: "Products/Vga/rtx 2080/index.html" },
         { name: "Palit Rtx 3060 12GB", link: "Products/Vga/rtx 3060 12g/index.html" },
         { name: "Evga Rtx 3060 Ti", link: "Products/Vga/rtx 3060 ti/index.html" },
         { name: "Igame Rtx 3070 8GB", link: "Products/Vga/rtx 3070/index.html" },
         { name: "Asus Tuf Rtx 3080 10GB", link: "Products/Vga/rtx 3080/index.html" },
         { name: "Palit Rtx 3080 Ti", link: "Products/Vga/rtx 3080 ti/index.html" },
         { name: "Zotac Rtx 3090 24GB", link: "Products/Vga/rtx 3090/index.html" },
         { name: "Gigabyte Rtx 5060 8GB", link: "Products/Vga/rtx 5060/index.html" },
         { name: "Sapphire Rx 5600 XT", link: "Products/Vga/rx 5600 xt/index.html" },
         { name: "Msi Rx 5700 Xt", link: "Products/Vga/rx 5700 xt/index.html" },
         { name: "XFX Rx 6700 XT", link: "Products/Vga/rx 6700 xt/index.html" },
    ];
        

    searchInput.addEventListener("keyup", function () {
        let value = searchInput.value.toLowerCase();
        resultsBox.innerHTML = "";

        if (value === "") {
            resultsBox.style.display = "none";
            return;
        }

        let filtered = products.filter(p =>
            p.name.toLowerCase().includes(value)
        );

        if (filtered.length === 0) {
            resultsBox.style.display = "none";
            return;
        }

        filtered.forEach(product => {
            let div = document.createElement("div");
            div.textContent = product.name;
            div.classList.add("result-item");

            div.onclick = function () {
                window.location.href = product.link;
            };

            resultsBox.appendChild(div);
        });

        resultsBox.style.display = "block";
    });

    // 👇 إخفاء لما تدوس برا
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".container")) {
            resultsBox.style.display = "none";
        }
    });

});

/*-----------------------------------------------------*/

/*Product*/

let mainImg = document.querySelector(".main-img");
let thumbs = document.querySelectorAll(".thumbs img");

thumbs.forEach(img => {
    img.onclick = function () {
        mainImg.src = this.src;
    };
});

