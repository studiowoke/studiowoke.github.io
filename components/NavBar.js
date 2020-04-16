const template = `
<div 
    class="navbar" 
    :style="style.containerStyle"
>
    <a href="/" ><img v-bind:src="logo" :alt="logoTitle" :style="style.logoStyle"  /></a>
    <div 
        v-if="showLinks"
        :style="style.linkBox"
    >
        <a  :style="style.linkStyle"
        v-for="(link, index) in links"
        :key="link"
        :href="'#' + link.toLowerCase().replace(' ', '-')"
        class="navlink"
        >
        {{ link }}
        </a>
    </div>
    <i 
        v-if="!showLinks"
        class="gg-chevron-left-r" 
        :style="style.sidebarIcon" 
        v-on:click="toggleSidebar"
    />

</div>
`

const NavBar = {
    template,
    props:{
        logo:String,
        logoTitle:String,
        links:Array
    },
    data:function(){
        const vm = this;
        //console.log("data",vm)
        
        return {
            style:{
                containerStyle:{
                    width:"100%",
                    position:'absolute', 
                    top:0, right:0, 
                    display:'flex',
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
            return !this.$root.state.isSmallScreen
        }
    },
    methods:{
        toggleSidebar:function(){
            const sidebar = document.getElementById("custom-side-bar")

            if (sidebar.getAttribute("data-display") === "none"){
                sidebar.setAttribute("data-display", "flex");
                if (AniX){
                    animations.openSidebar();
                }
            }
            else if (sidebar.getAttribute("data-display") === "flex"){
                sidebar.setAttribute("data-display", "none");
                if (AniX){
                    animations.closeSidebar();
                }
            }
        },
    }
}

const animations = {
    openSidebar:function(){
        //console.log("animated opening")
        AniX.fromTo(document.getElementById("custom-side-bar"), 0.5, 
            {
                display:"flex",
                //opacity:0,
            },{
                opacity:1,
            }
        );
    },
    closeSidebar:function(){
        //console.log("animated closing")
        AniX.fromTo(document.getElementById("custom-side-bar"), 0.5, 
        {
            display:"flex",
            opacity:1,
        },{
            opacity:0,
        }, 
        );
    },
}



Vue.component("nav-bar", NavBar)

//export default NavBar