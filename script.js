const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const answer = item.querySelector(".faq-answer");

        if(answer.style.display === "block"){

            answer.style.display = "none";

            question.querySelector("span").textContent = "+";

        }

        else{

            answer.style.display = "block";

            question.querySelector("span").textContent = "−";

        }

    });

});
/*=========================================
        FOOTER JAVASCRIPT
=========================================*/

// Current Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/*=========================================
        NEWSLETTER VALIDATION
=========================================*/

const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("newsletter-email");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = emailInput.value.trim();

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            showToast("Please enter your email address.", "#ff4d4d");
            emailInput.focus();
            return;
        }

        if (!pattern.test(email)) {

            showToast("Please enter a valid email address.", "#ff9800");
            emailInput.focus();
            return;
        }

        showToast("🎉 Thank you for subscribing!", "#00F5FF");

        newsletterForm.reset();

    });

}

/*=========================================
            TOAST MESSAGE
=========================================*/

function showToast(message, color){

    const toast=document.createElement("div");

    toast.innerText=message;

    toast.style.position="fixed";
    toast.style.bottom="30px";
    toast.style.left="50%";
    toast.style.transform="translateX(-50%)";
    toast.style.background=color;
    toast.style.color="#000";
    toast.style.padding="15px 30px";
    toast.style.borderRadius="40px";
    toast.style.fontWeight="600";
    toast.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
    toast.style.zIndex="9999";
    toast.style.opacity="0";
    toast.style.transition=".4s";

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.style.opacity="1";
    },100);

    setTimeout(()=>{
        toast.style.opacity="0";

        setTimeout(()=>{
            toast.remove();
        },400);

    },2500);

}

/*=========================================
        BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="flex";

        topBtn.style.alignItems="center";
        topBtn.style.justifyContent="center";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
        FOOTER FADE-IN
=========================================*/

const footer=document.getElementById("footer");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

footer.style.opacity="1";
footer.style.transform="translateY(0)";
}

});

});

footer.style.opacity="0";
footer.style.transform="translateY(60px)";
footer.style.transition="1s ease";

observer.observe(footer);