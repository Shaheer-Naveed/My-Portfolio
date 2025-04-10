var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("tab");
}
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("nav", {
        backgroundColor: "#555",
        height:"100px",
        width:"100%",
        zIndex:1,
        duration: 0.5,
        scrollTrigger: {
            trigger: "body",
            start: "top 1%",
            end: "top -30%",
            scrub: 1,
            markers: false
        }
    });
});
