export function OutsideClickListener(elementId, callback){
    var cb = callback
    //const state = {attach:true}
    function func(evt){
        //console.log("ff", elementId, callback)
        const freeElement = document.getElementById(elementId);
        let targetElement = evt.target; // clicked element
        
        do {
            if (targetElement == freeElement) {
                console.log("clicked")
                return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
        } while (targetElement);
        console.log("outside click")
        // This is a click outside.
        cb()
    }
    function attach(){document.addEventListener("click",func)}
    function detach(){document.removeEventListener("click", func)}
    return {
        attach,
        detach
    }

}

export function Observer( targetEl, callback1, callback2=null){

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
      let target = document.querySelector(targetEl);
      observer.observe(target);
}