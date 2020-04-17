//import ButtonCounter from "./components/ButtonCounter.js"
import  "./components/Hero.js"
import  "./components/NavBar.js"
import  "./components/Sidebar.js"
//import { animations } from "./assets/animations.js"



const state = Vue.observable({
    isSidebarOpen:false,
    isSmallScreen:window.innerWidth < 600,
    
})
const Database = {
    load:function(callback){
        fetch('./assets/db.json')
            .then(r => r.json())
            .then(jr => callback(jr) );
    },
    save:function(data, callback){
        console.log("save", JSON.stringify(data));
        const jdata = JSON.stringify(data);
        fetch('assets/db.json', {
                method:"post",
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:jdata, 
            }).then(r => r.json())
            .then(rj => {
                console.log("rj", rj);
                callback(rj) 
            })
    },
}


const vm = new Vue({
    el: '#app',
    components:{
        //HeroText
        //ButtonCounter,
    },
    data: {
        state,
        database:{}
    },
    methods:{
        screenListener:function(){
            //console.log(this);
            if (window.innerWidth < 600){
                state.isSmallScreen = true;
            }
            else {
                state.isSmallScreen = false;
            }
        },
        // toggle with changing data attr --> css change
        toggleSidebarByDOM:function(){
            const el = document.getElementById("custom-side-bar");
            const status = el.setAttribute("data-display", "none");
            switch (status){
                case "none":
                    el.setAttribute("data-display", "flex");
                case "flex":
                    el.setAttribute("data-display", "none");       
            }
        },
        // (Deprecated - use in every pages )toggle with AniX animation 
        toggleSidebarAnimated:function(){
            const sidebar = document.getElementById("custom-side-bar")
            //console.log("status", sidebar.getAttribute("data-display"))
            //console.log("animated toggle ",vm)
            if (sidebar.getAttribute("data-display") === "none"){
                vm.animation.openSidebar()
                sidebar.setAttribute("data-display", "flex");
            }
            else if (sidebar.getAttribute("data-display") === "flex"){
                vm.animation.closeSidebar()
                sidebar.setAttribute("data-display", "none");
            }
        },
        printer:function(d){
            console.log("printer printed: ", d)
        }

    },
    watch:{
        database:function(){
            console.log("database loaded. Current db: ", this.database)
        }
    },
    mounted:function(){
        // load local json db
        const thisApp = this;
        //Database.load(function(data){thisApp.database = data})
        
        const data = {recs:[1,2,3]}
        //setTimeout(function(){
        //}, 2000)
        //Database.save(data, thisApp.printer)
        //Database.save(a)

        // Resize ScreenListener
        window.addEventListener("resize", this.screenListener);
        //console.log("root mount", this)
    }
});


/*

const store = {
    state:{
        isSidebarOpen:false,
        isSmallScreen:window.innerWidth < 600,
        
    },
    setScreenSize(){
        //console.log(this);
        if (window.innerWidth < 600){
            this.state.isSmallScreen = true;
        }
        else {
            this.state.isSmallScreen = false;
        }
    },

    // for outside click listener -- dont'use
    checkAndSetSidebarStatus(){
        var el = document.getElementById("custom-side-bar");
        
        
        const status = el.getAttribute("data-display")
        if (status === "none"){
            this.state.isSidebarOpen = false
            // remove outside click event listener
            //SidebarClickListener.detach()
        }
        else {
            this.state.isSidebarOpen = true
            // add event listener for outside click
            //SidebarClickListener.attach()
        }
        console.log("toggling", status);
    }
}


*/