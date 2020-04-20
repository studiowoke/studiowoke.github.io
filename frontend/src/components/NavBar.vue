<template>
<div 
    class="navbar" 
    :style="style.containerStyle"
>
    <a href="/" ><img v-bind:src="logo" :alt="logoTitle" :style="style.logoStyle"  /></a>

    <!-- Links  -->
    <div 
        v-if="showLinks"
        :style="style.linkBox"
    >
        <a  :style="style.linkStyle"
        v-for="(link) in navlinks"
        :key="link"
        :href="'#' + link.toLowerCase().replace(' ', '-')"
        class="navlink"
        >
        {{ link }}
        </a>
    </div>

    <!-- Hidden Sidebar Toggler  -->
    <i 
        v-if="!showLinks"
        class="gg-chevron-left-r" 
        :style="style.sidebarIcon" 
        v-on:click="toggleSidebar"
    />

</div>
</template>

<script>

export default {
    name: "nav-bar",
    props:{
        bg:String,
        logo:String,
        logoTitle:String,
        links:Array,
    },
    data:function(){
        const vm = this;
        console.log("navbar data",vm)
        
        return {
            windowWidth:window.innerWidth,
            style:{
                containerStyle:{
                    background:this.bg ? this.bg : "transparent",
                    width:"100%",
                    position:'absolute', 
                    top:0, right:0, 
                    display:'flex',
                    //justifyContent:"flex-end",
                    alignItems:'center', 
                    padding:'16px 16px 16px 16px',
                    zIndex:10
                },
                logoStyle:{
                    width:"50px",
                    height:"50px",
                    margin:"0 32px"
                },
                linkBox:{
                    position:"relative",
                    flexGrow:1,
                    display:"flex",
                    alignItems:"center",
                    flexWrap:"wrap",
                    justifyContent:`flex-start`,
                },
                linkStyle:{
                    fontSize:"14px",
                    color:"#f1f1f1",
                    margin:"0 12px",
                    textDecoration:"none"
                },
                sidebarIcon:{
                    position:"absolute",
                    right:"32px",
                    top:"auto",
                    color:"white",
                    cursor:"pointer",
 
                }
            },
        }
    },
    computed:{
        showLinks:function(){
            if (this.windowWidth > 600) return true
            return false
        },
        navlinks:function(){
            return (
                (this.links && this.links.length > 0) ? this.links
                    : this.$root.navbarLinks ? this.$root.navbarLinks
                        : [] 
            )

        }
    },
    methods:{
        setWindowWidth:function(width){
            this.windowWidth = window.innerWidth
        },
        toggleSidebar:function(){
            const sidebar = document.getElementById("custom-side-bar")

            if (sidebar.getAttribute("data-display") === "none"){
                sidebar.setAttribute("data-display", "flex");
            }
            else if (sidebar.getAttribute("data-display") === "flex"){
                sidebar.setAttribute("data-display", "none");
            }
        },
    },
    mounted:function(){
        window.addEventListener("resize", this.setWindowWidth);
    }

}

</script>

<style scoped>
/* Navbar and links */
.navlink {
    transition: opacity 0.2s !important;
  }  
.navbar:hover .navlink:not(:hover) {
    opacity: 0.6 !important;
}



</style>