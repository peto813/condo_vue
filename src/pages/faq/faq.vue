<template>
    <div>
        <b-container>
            <b-row>
                <h1 class="pb-3 text-center mt-5">
                    Frequently asked questions
                </h1>
            </b-row>
            <b-row>
                <b-col cols="12" sm="4">
                    <b-list-group>
                        <b-list-group-item
                            v-bind:class="{ active: item.active}" 
                            @click.prevent="selectCategory(item)"
                            v-for="item in categories"
                            :value="item.name">{{item.name}}
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col cols="12" sm="8" role="tablist">
                    <div v-for="question in selected['questions']">
                        <b-btn v-b-toggle="question.id" class="m-1" variant="outline-success" block role="tab">
                            <h4 class="mbr-fonts-style display-5">
                                <span class="sign mbr-iconfont mbri-arrow-down inactive"></span> {{question.question}}
                            </h4> 
                        </b-btn>
                        <b-collapse :id="question.id" accordion="my-accordion" role="tabpanel">
                            <b-card>
                            {{question.answer}}
                            </b-card>
                        </b-collapse>
                    </div>
                </b-col>
            </b-row>


        </b-container>
        <div id="footerContainer">
            <custom-footer></custom-footer>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import footer from '@/components/footer/footer.vue';
Vue.component('custom-footer', footer);
export default {
    data(){
        return {
            selected:{},
            categories:[
                {
                    name: 'General Questions',
                    active:true,
                    questions:[
                        {
                            id:"1",
                            question:"What is the purpose of life?",
                            answer:'Yes it is',
                        },
                        {   
                            id:"2",
                            question:"Is kiteboarding fun?",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        },
                        {   
                            id:"3",
                            question:"Is Windsurf fun?",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        }
                    ]
                },
                {
                    name: 'Venezuela',
                    active:false,
                    questions:[
                        {
                            id:"1",
                            question:"Is travelling to Los Roques safe?",
                            answer:'Yes it is',
                        },
                        {   
                            id:"2",
                            question:"When is the best time to visit Los Roques?",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        }
                    ]
                },
                {
                    name: 'Jeri',
                    active:false,
                    questions:[
                        {
                            id:"1",
                            question:"Is travelling to Jericoacoara safe?",
                            answer:'Yes it is',
                        },
                        {
                            id:"2",
                            question:"When is the best time to visit Jericoacoara?",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        }
                    ]
                },
                {
                    name: 'Canaima',
                    active:false,
                    questions:[
                        {
                            id:"1",
                            question:"Is travelling to Canaima safe?",
                            answer:'Yes it is',
                        },
                        {
                            id:"2",
                            question:"When is the best time to visit Canaima?",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        },
                        {
                            id:"3",
                            question:"What is your purpose??",
                            answer:'We usually recommend travelling during the dry season (December - June) since rains bring about mosquitoes, winds die off, and travelling tends to be more cumbersome.',
                        }
                    ]
                }
                
            ]
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.selectCategory(this.categories[0]);
        })
    },
    methods:{
        selectCategory(category){
            this.selected=category;
            this.categories.forEach(element => {
                element.active=false;
            })
            category.active=true;
            let collapsed= this.$el.querySelectorAll('.collapse.show');
            collapsed.forEach(element => {
                this.$root.$emit('bv::toggle::collapse', element.id)

            });
        }
    }
}
</script>

<style scoped>
    .list-group{
        cursor: pointer;
    }

    .list-group-item{
        transition:all 0.5s ease;
    }


  #footerContainer{
      margin-top:50px;
  }

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
