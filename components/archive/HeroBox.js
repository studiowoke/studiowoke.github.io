const template2 = `
<div v-bind:style="styleObject">
    <slot></slot>
</div>
`


const HeroBox = {
    template:template2,
    props: {
        src: String
    },
    data: function(){
        console.log("data",this)
        return {
            herosource:`url(${this.src})`,
            styleObject:{
                position:'relative',
                width:'100vw', 
                height:'56.25vw', minHeight:'300px', maxHeight:'500px',
                objectFit:'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${this.src})`,
                backgroundPosition:'center',
                backgroundSize:this.calculateBgSize()
            }
        }
    },
    methods:{
        calculateBgSize:function(){
            const newWidth = window.innerWidth
            return `${newWidth > 600 ? "100%" : (newWidth < 400 ? "175%" : "150%")}`
        }
    },
    mounted(){
        const vm = this
        window.addEventListener("resize", function(){
            const newWidth = window.innerWidth;
            const backgroundSize = `${newWidth < 600 ? "150%" : "100%"}`
            //console.log("resizing", newWidth,vm, this);
            vm.styleObject.backgroundSize = vm.calculateBgSize()
        })
    }
}

Vue.component('hero-box', HeroBox)

export default HeroBox