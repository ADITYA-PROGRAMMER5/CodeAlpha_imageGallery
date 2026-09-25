const images = [

    {
        id: 1,
        title: "Beautiful Mountains",
        category: "nature",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        title: "Forest Adventure",
        category: "nature",
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        title: "City Lights",
        category: "city",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        title: "Modern Architecture",
        category: "city",
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        title: "Wild Tiger",
        category: "animals",
        url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        title: "Cute Fox",
        category: "animals",
        url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        title: "Green Landscape",
        category: "nature",
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        title: "City Skyline",
        category: "city",
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        title: "Wild Elephant",
        category: "animals",
        url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80"
    }

];

const gallery = document.getElementById("gallery");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxTitle = document.getElementById("lightboxTitle");

const imageCounter = document.getElementById("imageCounter");

const closeBtn = document.getElementById("closeBtn");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const filterButtons = document.querySelectorAll(".filter-btn");

let currentImages = [...images];
let currentIndex = 0;

function displayImages(imageList) {

    gallery.innerHTML = "";

    imageList.forEach((image, index) => {

        const item = document.createElement("div");

        item.classList.add("gallery-item");

        item.innerHTML = `
            <img
                src="${image.url}"
                alt="${image.title}"
                loading="lazy"
            >

            <div class="image-overlay">
                <h3>${image.title}</h3>
            </div>
        `;

        item.addEventListener("click", () => {

            openLightbox(index);

        });

        gallery.appendChild(item);

    });

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        if (category === "all") {

            currentImages = [...images];

        } 
        else {

            currentImages = images.filter(image => {

                return image.category === category;

            });

        }


        displayImages(currentImages);


    });

});

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

