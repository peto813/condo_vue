<template>
    <div>
        <div v-if="!editing" class="note" :style="noteStyle">
            <p>{{note}}</p>
            <span>
                <b-button @click="edit">EDIT</b-button>
                <b-button @click="remove">X</b-button>
            </span>
        </div>
        <div v-else>
            <div class="note" :style="noteStyle">
                <textarea ref="newText" @input="updateVal" :value="note">
                </textarea>
                <b-button @click="save">SAVE</b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        id:Number,
        note:String
    },
    data () {
        return {
            editing:false,
            noteStyle:{},
            newText:''
        }
    },
    beforeMount:function(){
        this.noteStyle= {
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(220, window.innerHeight - 150, 'px')
        }
    },
    updated:function(){
            if (this.editing) {
                this.$refs.newText.focus();
                this.$refs.newText.select();
            }
    },
    methods:{
        updateVal(event){
            this.newText = event.target.value;
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

div.note:active {
    cursor: -webkit-grabbing;
}

div.note p {
    margin: 0;
    font-size: 22px;
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

</style>
