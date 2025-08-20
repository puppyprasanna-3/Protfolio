// Typing effect
const words=["Web Developer","Java Developer","Full Stack Developer"];
let i=0,j=0,isDeleting=false;
const typingSpan=document.querySelector(".typing");

function type(){
  let current=words[i];
  typingSpan.textContent=current.substring(0,j);
  if(!isDeleting && j<current.length){j++;setTimeout(type,150);}
  else if(isDeleting && j>0){j--;setTimeout(type,100);}
  else{isDeleting=!isDeleting;if(!isDeleting)i=(i+1)%words.length;setTimeout(type,1000);}
}
type();

// Section slide-in effect
const sections=document.querySelectorAll("section");
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");}});
},{threshold:0.2});
sections.forEach(sec=>sectionObserver.observe(sec));

// Skill bars animate ONLY on Skills menu click
const skillsLink=document.getElementById("skills-link");
const fills=document.querySelectorAll(".fill");
let skillsAnimated=false;

skillsLink.addEventListener("click",()=>{
  if(!skillsAnimated){
    fills.forEach(f=>{f.style.width=f.getAttribute("data-width");});
    skillsAnimated=true;
  }
});

// Initialize EmailJS
(function() {
  emailjs.init("SyUO7-CgskQD2qW2T"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_w2ofhdv", "template_6is4y47", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});
