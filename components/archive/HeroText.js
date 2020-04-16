const template = `
    <div :style="textContainerStyle">
        <h1 :style="headerStyle" class="page-title">{{ header }}</h1>
        <p :style="textStyle">{{ text }}</p>
    </div>
`


const HeroText = {
    template,
    props:{
        header:String,
        text:String
    },
    data:function(){
        console.log("asd",this);
        return {
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
                fontSize:"38px",
                color:"#f1f1f1",
                fontWeight:"bold",
                paddingLeft:"16px",
            },
            textStyle:{
                fontWeight:"14px",
                color:"#f1f1f1",
                paddingLeft:"16px",
            }
        }
    }
}

Vue.component("hero-text", HeroText)
//export default HeroText