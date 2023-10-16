gsap.to("#box",{
    scrollTrigger:{
        trigger:"#white",
        start:"top top",
        markers:true
    },
    x:400,
    duration:3,
    backgroundColor:"green",
    ease:Expo.easeInOut,
    borderRadius:"50%"
})