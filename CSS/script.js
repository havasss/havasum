window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID');


      const menuItem = document.querySelectorAll(".navbar__menu-item");

      function followImageCursor(event, menuItem) {
        const contentBox = menuItem.getBoundingClientRect();
        const dx = event.pageX - contentBox.x;
        const dy = event.pageY - contentBox.y;
        menuItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
      }
      
      menuItem.forEach(menuItem => {
      
      menuItem.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, menuItem), 1000);
      });
        });



        gsap.to('.text0',{
            x:'20%',rotate:10,duration:0.85,scrollTrigger:{
              trigger:'.text0',
              scrub:true,
              start:'top 20%'
            }
          })
          gsap.to('.text2',{
            x:'20%',rotate:10,duration:0.85,scrollTrigger:{
              trigger:'.text2',
              scrub:true,
              start:'top 40%'
            }
          })
          gsap.to('.text1',{
            x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
              trigger:'.text1',
              scrub:true,
              start:'top 30%'
            }
          })
          gsap.to('.text3',{
            x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
              trigger:'.text3',
              scrub:true,
              start:'top 40%'
            }
          })
          document.querySelector('#back').addEventListener('click',()=>{
                gsap.to(window, {duration: 1, scrollTo:'body'});
          
          })
          

/* project */


document.getElementById('close-btn').addEventListener('click', function() {
  this.style.display = 'none';
});