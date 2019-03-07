<template>
    <div v-on:mousedown.prevent="handleMouseDown"  draggable="true" class="note" :style="noteStyle" @mouseleave="hover = false"  @mouseover="hover = true">
        <div v-if="!editing">
            <p>{{note}}</p>
            <span v-show="hover"  class="noteButtons">
                <b-button @click.stop="edit">EDIT</b-button>
                <b-button @click.stop="remove">X</b-button>
            </span>
        </div>
        <div v-else>
            <textarea ref="newText" @input="updateVal" :value="note"></textarea>
            <b-button class="noteButtons" @click="save">SAVE</b-button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        id:Number,
        note:String,
        pclass:String
        //top:String,
        //left:String
    },
    data () {
        return {
            editing:false,
            noteStyle:{},
            newText:'',
            hover:false,
        }
    },
    beforeMount:function(){




        this.$nextTick(function(){
            
            let parent= this.$el.parentElement;
            this.noteStyle= {
                left: this.randomBetween(0, (100*(parent.clientWidth-this.$el.clientWidth)/parent.clientWidth), '%'),
                top: this.randomBetween(0, 100*((parent.clientHeight-this.$el.clientHeight)/parent.clientHeight), '%')
            }
            
        })

    },
    updated:function(){
            if (this.editing) {
                this.$refs.newText.focus();
                this.$refs.newText.select();
            }
    },
    computed:{

    },
    methods:{
        handleMouseDown(event){
            let note = this.$el;
            let shiftX = event.clientX - note.getBoundingClientRect().left;
            let shiftY = event.clientY - note.getBoundingClientRect().top;
            note.style.position = 'absolute';
            note.style.zIndex = 1000;

            document.body.append(note);

            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                note.style.left = pageX - shiftX + 'px';
                note.style.top =  pageY - shiftY + 'px';
            }

            const onMouseMove=(event) =>{
                let board = document.querySelector('.board');

                if (this.$el.getBoundingClientRect().left<=board.offsetLeft){
                    this.$el.style.left=board.offsetLeft+20+'px';
                    document.removeEventListener('mousemove', onMouseMove);
                    this.$el.onmouseup = null;
                }else if(this.$el.getBoundingClientRect().right>=board.offsetLeft+board.clientWidth){
                    this.$el.style.left=board.offsetLeft+board.clientWidth-this.$el.clientWidth-20+'px';
                    document.removeEventListener('mousemove', onMouseMove);
                    this.$el.onmouseup = null;
                }else if(this.$el.offsetTop<=board.offsetTop){
                    this.$el.style.top=board.offsetTop+20+'px';
                    document.removeEventListener('mousemove', onMouseMove);
                    this.$el.onmouseup = null;
                }
                else if(this.$el.offsetTop+this.$el.clientHeight>=board.offsetTop+board.clientHeight){
                    this.$el.style.top=board.offsetTop+board.clientHeight-this.$el.clientHeight-20+'px';
                    document.removeEventListener('mousemove', onMouseMove);
                    this.$el.onmouseup = null;
                              
                }
                else{
                    moveAt(event.pageX, event.pageY);
                }
                
            }
            document.addEventListener('mousemove', onMouseMove);

            note.onmouseup = function(event) {
                document.removeEventListener('mousemove', onMouseMove);
                note.onmouseup = null;
            };

        },
        updateVal(e){
            this.newText = e.target.value;
        },
        randomBetween(x, y, s) {
            return (x + Math.ceil(Math.random() * (y - x))) + s
        },
        edit() {
            this.editing=true;
        },
        save() {
            this.$emit('updateNote', this.newText, this.id)
            this.editing=false;
        },
        remove() {
            this.$emit('removeNote', this.id)
        }
    }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Shadows+Into+Light|Roboto:400,300,500);
.note{
    cursor: pointer;
}



div.note {
    height: 150px;
    width: 150px;
    background-color: yellow;
    margin: 2px 0;
    position: absolute;
    cursor: -webkit-grab;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
    overflow: hidden;
}

@media only screen and (min-width: 768px) {
    div.note {
        height: 250px;
        width: 250px;
        background-color: yellow;
        margin: 2px 0;
        position: absolute;
        cursor: -webkit-grab;
        box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, .2);
        overflow: hidden;
    }
}


div.note:active {
    cursor: -webkit-grabbing;
}
span.noteButtons, button.noteButtons{
    position: absolute;
    top:190px;
    left:130px;
}
div.note p {
    margin: 0;
    font-size:22px;
    padding: 5px;
    font-family: "Shadows Into Light", Arial;
    line-height: 1.1;
}

div.note:hover > span {
    opacity: 1;
}

div.note > span {
    position: absolute;
    bottom: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity .25s linear;
}

div.note button {
    margin: 2px;
}

div.note textarea {
    height: 75%;
    background: rgba(255, 255, 255, .5);
}
textarea{
    /* line-height:150px; */
    margin:5px;
    resize: none;
    width:100%;
    overflow:auto
}

div.note:nth-child(even){
    transform:rotate(-6deg);
    position:absolute;
    top:5px;
    transition:rotate 0.5s linear;
}

</style>
