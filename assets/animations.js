import { Observer } from "./lib.js"

const Animations = {

    createListener(event, callback){
        const adder = () => window.addEventListener(event, callback);
        const remover = () => window.removeEventListener(event, callback);
        return [adder, remover]
    },
    observeElements(targetSelector, callback1, callback2=null){
        //create callback for visibility changes
        function observerCallback(entries, observer){
            entries.forEach(e => {
                if (e.intersectionRatio > 0) {
                        callback1()
                        console.log('in the view');
                  } else {
                        // out of sight case
                        if (callback2) {
                            callback2()
                            console.log('out of view');
                        }
                  }
                if (e.isIntersecting){console.log("intersecting")}
            })
        } 
          let observer = new IntersectionObserver(observerCallback);
    
          // observe the target
          let target = document.querySelector(targetSelector);
          observer.observe(target);
    }

}



const ShineAnimation = (elementId) => {
    // shine configs and object creation
    var config = new shinejs.Config({
        numSteps: 12,
        opacity: 0.2,
        shadowRGB: new shinejs.Color(255, 255, 255),
        blur:8
      });
    var shineA = new Shine(document.getElementById(elementId), config);
    shineA.light.intensity = 0.4
    // create callback with closure through intersection observer
    function setLightSource(e){
        if (e){
            //console.log("e", e.clientX, e.clientY);
            shineA.light.position.x=e.clientX;
            shineA.light.position.y=e.clientY;
            shineA.draw(); // make sure to re-draw

        }
    }
    setLightSource()

    const [ mouselistener, mouseremover ] = Animations.createListener("mousemove", setLightSource)

    //Observer("#hero-title",mouselistener, mouseremover )
    // Create Observer that observe the title in the hero
    Animations.observeElements("#hero-title", mouselistener, mouseremover)




}
//ShineAnimation('hero-title')




export const AniX = {
    openSidebar:function(){
        console.log("animated opening")
        AniX.fromTo(document.getElementById("custom-side-bar"), 1, 
        {
            display:"flex",
            opacity:0,
        },
        {
            opacity:1,

        }
        );
    },
    closeSidebar:function(){
        console.log("animated closing")
        AniX.to(document.getElementById("custom-side-bar"), 3, {
            display:"none",
        });
    },
}
