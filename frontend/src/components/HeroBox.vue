<template>
    
<div :style="styleObject" class="">
    <div :style="textContainerStyle">
        <h1 :style="headerStyle" class="page-title">{{ header }}</h1>
        <p :style="textStyle">{{ text }}</p>
    </div>
    <slot></slot>
</div>
</template>


<script>
export default {    
    props: {
        src: String,
        header: String,
        text: String
    },
    data: function(){
        //console.log("herobox data",this);
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
    },
}
</script>


<style scoped>

</style>

