const template = `
	<button class="btn-btn">
  		You clicked me {{ count }} times.
	</button>
`

export default {
	  tag:"button-counter",
    template: template,
    data: function () {
      return {
        count: 0
      }
    },
  }





/*
const template = `
	<button class="btn-btn">
  		You clicked me {{ count }} times.
	</button>
`

export const ButtonCounter = {
	tag:"button-counter",
    data: function () {
      return {
        count: 0
      }
    },
    template: template
  }

Vue.component(ButtonCounter.tag, ButtonCounter )
*/