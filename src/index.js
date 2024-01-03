import "./styles.css";
import heroPic from "./food.png";
import aboutPic from "./food2.png";

function main() {
    const rootElem = document.getElementById("root");
    rootElem.append(navBar(), display["about"]());
}

const display = {
    home() {
        const home = document.createElement("section");
        const homeContainer = document.createElement("div");
        const leftContainer = document.createElement("div");
        const rightContainer = document.createElement("div");

        // Left container
        const small = document.createElement("small");
        small.textContent = "Restaurant";
        small.classList.add("hero__small");

        const header = document.createElement("h1");
        header.textContent = "We Serve Delicious Food";
        header.classList.add("hero__header");

        const para = document.createElement("p");
        para.textContent = "Keeping it easy with simple but delicious recipes from make-ahead lunches and mid-week meals to fuss-free sides";
        para.classList.add("hero__para");

        const cta = document.createElement("button");
        cta.textContent = "Get started";
        cta.classList.add("hero__cta");

        leftContainer.append(small, header, para, cta);
        leftContainer.classList.add("hero__left");

        // Right container
        rightContainer.innerHTML = `<svg id="visual" viewBox="0 0 900 450" width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(899.7544314682737 26.46249110795273)"><path d="M365.5 210.9C243.8 421.8 -243.1 421.6 -364.9 210.7C-486.7 -0.2 -243.4 -422 0.1 -421.9C243.6 -421.9 487.1 0 365.5 210.9" fill="#FFBF00"></path></g></svg>`;
        rightContainer.classList.add("hero__right");

        homeContainer.append(leftContainer, rightContainer);
        homeContainer.classList.add("hero__container");

        // Food background
        const foodBg = document.createElement("img");
        foodBg.src = heroPic;
        foodBg.classList.add("hero__img");

        home.append(homeContainer, foodBg);
        home.classList.add("hero");
        return home;
    },

    menu() {
        console.log("menu");
    },
    about() {
        const about = document.createElement("section");
        const leftContainer = document.createElement("div");
        const rightContainer = document.createElement("div");

        // Left Container
        const svgContainer = document.createElement("div");
        svgContainer.innerHTML = `<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(426.8790573081478 332.63818847159183)"><path d="M133 -141.5C174.5 -91.5 211.7 -45.7 220.9 9.2C230.1 64.1 211.2 128.2 169.7 161.2C128.2 194.2 64.1 196.1 1.3 194.8C-61.5 193.5 -123 189 -148 156C-173 123 -161.5 61.5 -165.6 -4.1C-169.8 -69.8 -189.5 -139.5 -164.5 -189.5C-139.5 -239.5 -69.8 -269.8 -12 -257.7C45.7 -245.7 91.5 -191.5 133 -141.5" fill="#FFBF00"></path></g></svg>`;
        svgContainer.classList.add("about__svg")

        const aboutImg = document.createElement("img");
        aboutImg.src = aboutPic;
        aboutImg.classList.add("about__img")

        leftContainer.append(svgContainer, aboutImg);
        leftContainer.classList.add("about__left")

        // Right Container
        const about1 = document.createElement("h2");
        about1.textContent = "About";
        about1.classList.add("about__header1")

        const about2 = document.createElement("h2");
        about2.textContent = "Us";
        about2.classList.add("about__header2")
        
        const aboutPara = document.createElement("p");
        aboutPara.textContent = `Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.`;
        aboutPara.classList.add("about__para");

        const aboutBtn = document.createElement("button");
        aboutBtn.textContent = "View more"
        aboutBtn.classList.add("about__btn")

        rightContainer.append(about1, about2, aboutPara, aboutBtn)
        rightContainer.classList.add("about__right")

        about.append(leftContainer, rightContainer);
        about.classList.add("about")
        return about;
    },
};

function navBar() {
    const nav = document.createElement("nav");
    const logo = document.createElement("h2");
    logo.textContent = "ElixirBite";
    logo.classList.add("logo");
    nav.appendChild(logo);

    const div = document.createElement("div");
    div.classList.add("nav__container");
    for (let link of ["home", "about", "menu"]) {
        let elem = document.createElement("button");
        elem.textContent = link;
        elem.classList.add("nav__container__elem");

        elem.addEventListener("click", () => {
            for (let child of div.children) {
                child.classList.remove("active");
            }
            elem.classList.toggle("active");
        });
        div.appendChild(elem);
    }

    div.firstChild.classList.add("active");
    nav.appendChild(div);
    return nav;
}

main();
