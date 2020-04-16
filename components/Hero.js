const template = `
<div :style="styleObject" class="fbox-c" id="hero-box">
    <div :style="textContainerStyle">
        <h1 :style="headerStyle" class="page-title" id="hero-title">{{ header }}</h1>
        <p :style="textStyle">{{ text }}</p>
    </div>
</div>
`


const HeroBox = {
    template,
    props: {
        src: String,
        header: String,
        text: String

    },
    data: function(){
        //console.log("data",this);
        return {
            styleObject:{
                position:"relative",
                /* The image used */
                display: "flex",
                backgroundImage: `url(${this.src})`,
                /* Set a specific height */
                minHeight: "600px",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:`${window.innerWidth < 600 ? "flex-start": "center"}`,
                zIndex:0
            },
            textContainerStyle:{
                paddingLeft:"10vw",
                paddingRight:"10vw",
                zIndex:1, 
                maxWidth:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:`${window.innerWidth < 600 ? "flex-start" : "center"}`
            },
            headerStyle:{
                fontSize:"55px",
                color:"#f1f1f1",
                fontWeight:"bold",
                paddingLeft:"16px",
                zIndex:1, 
            },
            textStyle:{
                fontWeight:"14px",
                color:"#f1f1f1",
                paddingLeft:"16px",
            }
        }
    },
}

Vue.component('hero-box', HeroBox)

//export default HeroBox

