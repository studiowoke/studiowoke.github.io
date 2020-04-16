import { customElement } from "../assets/js/atomico.js";
import html from "../assets/js/html.js"

const styler = {
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
        display:"none",
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
        alignItems:"center"
    },
    linkStyle:{
        fontSize:"32px",
        fontWeight:"bold",
        color:"#1d1d1d",
        textDecoration:"none",
        height:"60px"
    }
}



function WebComponent(){
    const template = `
    <div id="custom-side-bar" class="data-prop"
        data-display="none"
        style=${styler.containerStyle}
    >
        <div style=${styler.sliderIconBox} >
        
            <i class="gg-chevron-right-r" style=${styler.sliderIconBox.sidebarIcon} click="toggleSidebar"></i>
        </div>

        <a href="/" style=${styler.headlink}>
            <img v-bind:src="logo" :alt="logoTitle" style=${styler.logoStyle}  />
            <h2 style=${{color:'black', fontSize:'24px'}} >{{ logoTitle }}</h2>
        </a>

        <div style=${styler.linkBox} id="side-bar-link-box">
            <a  
                style=${styler.linkStyle}
                >
                asd
            </a>
        </div>
    </div>
    `
    return html(template)
}

customElement("my-side-bar",WebComponent);