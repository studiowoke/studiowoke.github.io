<template>
    <div id="custom-side-bar" class="data-prop"
        data-display="none"
        :style="style.containerStyle"
    >
        <div :style="style.sliderIconBox" >
        
            <i class="gg-chevron-right-r" :style="style.sliderIconBox.sidebarIcon" v-on:click="toggleSidebar"></i>
        </div>

        <a href="/" :style="style.headlink">
            <img v-bind:src="logo" :alt="logoTitle" :style="style.logoStyle"  />
            <h2 :style="{color:'black', fontSize:'24px'}" >{{ logoTitle }}</h2>
        </a>

        <div :style="style.linkBox" id="side-bar-link-box">
            <a  
                v-for="(link) in links"
                :style="style.linkStyle"
                :key="link"
                :href="'#' + link.toLowerCase().replace(' ', '-')"
                class="side-link"
                >
                {{ link }}
            </a>
        </div>
    </div>
</template>


<script>

export default {
    props:{
        logo:String,
        logoTitle:String,
        links:Array
    },
    data:function(){
        const showHeadLink = false
        //console.log("sidebar data", this.$root)
        return {
            showHeadLink:false, // true for logo and name
            style:{
                containerStyle:{
                    display:"attr(data-display)",
                    position:"fixed",
                    flexDirection:"column",
                    right:0, top:0, bottom:0,
                    height:"100%",
                    width:"60%",
                    maxWidth:"500px",
                    backgroundColor:"#f1f1f1",
                    paddingLeft:"0px",
                    zIndex:100
                },
                sliderIconBox:{
                    width:'100%', 
                    display:'flex',
                    alignItems:"center",
                    minHeight:'80px', 
                    borderBottom:'4px solid rgba(180,180,180, 0.4)',
                    sidebarIcon:{
                        marginLeft:"16px",
                        color:"black",
                        cursor:"pointer"
                    },
                },
                headlink:{
                    display:showHeadLink ? "flex" : "none",
                    position:'relative',
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    textDecoration:'none',
                    height:'50px',
                    marginTop:"80px",
                },
                logoStyle:{
                    position:"absolute",
                    left:"32px",
                    width:"40px",
                    height:"40px",
                    //margin:"0 32px"
                },
                linkBox:{
                    width:"100%",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:"32px"
                },
                linkStyle:{
                    fontSize:"32px",
                    fontWeight:"bold",
                    color:"#1d1d1d",
                    textDecoration:"none",
                    height:"60px"
                },
            }
        }
    },
    methods:{
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
    computed:{

    }
}

</script>

<style>
[data-display="flex"] {
    display:flex;
}
[data-display="none"] {
    display:none;
}

</style>