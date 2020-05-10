const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Links
const nav = document.querySelector("div.container header nav");
const firstLink = document.createElement("a");
const lastLink = document.createElement("a");
firstLink.href = lastLink.href = "#";
firstLink.textContent = "First";
lastLink.textContent = "Last";
nav.prepend(firstLink);
nav.appendChild(lastLink);
const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link, i) => {
  if (i !== 0 && i !== 7) link.textContent = siteContent.nav[`nav-item-${i}`];
  link.style = "color: green;";
});

// CTA
const cta = document.querySelector("section.cta");
const ctaH1 = cta.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1.replace(/ /g, "<br>");
const mainImage = document.getElementById("cta-img");
mainImage.src = siteContent.cta["img-src"];
let imageVisible = true;
const ctaButton = cta.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;
ctaButton.setAttribute("onclick", "changeImage()");
function changeImage() {
  if (imageVisible) mainImage.style.display = "none";
  else mainImage.style.display = "block";
  imageVisible = !imageVisible;
}
// -----------------------------------Main Content---------------------------------------
const mainContent = document.querySelector("section.main-content");
// Top Content
const topContent = mainContent.querySelector(".top-content");
const features = topContent.children[0];
features.querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
features.querySelector("p").textContent =
  siteContent["main-content"]["features-content"];
const about = topContent.children[1];
about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
about.querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

// Image
document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"];

// Bottom Content
const bottomContent = mainContent.querySelector(".bottom-content");
const services = bottomContent.children[0];
services.querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
services.querySelector("p").textContent =
  siteContent["main-content"]["services-content"];
const product = bottomContent.children[1];
product.querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
product.querySelector("p").textContent =
  siteContent["main-content"]["product-content"];
const vision = bottomContent.children[2];
vision.querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
vision.querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

// -----------------------------------Contact---------------------------------------
const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
const pTags = document.querySelectorAll(".contact p");
pTags[0].textContent = siteContent.contact.address;
pTags[1].textContent = siteContent.contact.phone;
pTags[2].textContent = siteContent.contact.email;

// -----------------------------------Footer---------------------------------------
const footer = (document.querySelector("footer p").textContent =
  siteContent.footer.copyright);
