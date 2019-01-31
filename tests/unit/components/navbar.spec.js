import { shallowMount, mount } from '@vue/test-utils'
import navBar from '@/components/navBar/navBar.vue'
import BootstrapVue from 'bootstrap-vue';
import  '@/ml'
//import './ml';
import Vue from 'vue';
import VueRouter from 'vue-router';
//import Icon from 'vue-awesome/components/Icon';
//import 'vue-awesome/icons/user';
Vue.use(BootstrapVue);
Vue.use(VueRouter)

describe('navBar', () => {
  it('renders navbar condo links if user is condo, hides others', () => {
    const wrapper = shallowMount(navBar, {
	    props: {
	      userData: Object
	    },
		propsData: {
			userData: {
				role:"condo",
				first_name:'Einstein',
				loggedIn : true
			}
		}
    })

    // see if the message renders
    // expect(wrapper.find('.message').text()).toEqual('Hello World')

    // assert condo link renders
    expect(wrapper.find('.condoLink').exists()).toBeTruthy();


    //assert anon user links are not rendered
    expect(wrapper.find('.anonymousLink').exists()).toBeFalsy();

    //assert resident links are not rendered
    expect(wrapper.find('.residentLink').exists()).toBeFalsy();

    //assert rentee links are not rendered
    expect(wrapper.find('.renteeLink').exists()).toBeFalsy();

    // update the `userIsCondo` and assert error is no longer rendered
    // wrapper.setData({ username: 'Lachlan' })
    // expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})