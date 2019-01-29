import { shallowMount } from '@vue/test-utils'
import navBar from '@/components/navBar/navBar.vue'
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter)

describe('navBar', () => {
  it('renders navbar condo links if user is condo, hides others', () => {
    const wrapper = shallowMount(navBar, {

    props: {
      src: String
    },
	    data: function() {
	         return {
	            userIsCondo:true,
	          }
	      }
    })

    // see if the message renders
    // expect(wrapper.find('.message').text()).toEqual('Hello World')

    // assert the error is rendered
    expect(wrapper.find('.condoLink').exists()).toBeTruthy()

    expect(wrapper.find('.anonymousLink').exists()).toBeFalsy()
    
    // update the `userIsCondo` and assert error is no longer rendered
    // wrapper.setData({ username: 'Lachlan' })
    // expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})