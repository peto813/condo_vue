<template>
    <div>
        <div class="board">
            <note @removeNote="remove" :note="item.note" :id="item.id" @updateNote="update" v-for="item in notes" :key="item.id"></note>
        </div>
        <b-button @click="add('New Note')">+</b-button>
    </div>
</template>
<script>
import axios from "axios";
import note from "@/components/note/note.vue"
export default {
    components:{
        note
    },
    data() {
      return {
        notes:[],
        count:10
      }
    },
    methods:{
        remove(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },
        nextId() {
            this.uniqueId = this.uniqueId || 0
            return this.uniqueId++
        },
        add(text) {
            let notes = [
                ...this.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
            
            this.notes= notes
        },
        update(newText, id) {
            let notes = this.notes.map(
                    note => (note.id !== id) ?
                            note :
                    {
                        ...note,
                        note: newText
                    }
            )
            this.notes= notes;
        },
        // eachNote(note) {
        //     return (<Note key={note.id}
        //                   id={note.id}
        //                   onChange={this.update}
        //                   onRemove={this.remove}>
        //         {note.note}
        //     </Note>)
        // },
    },
    beforeCreate:function(){

        this.$nextTick(function () {
            if (this.count) {
                let url= `https://baconipsum.com/api/?type=all-meat&sentences=${this.count}`
                axios.get(url)
                    .then(response=>
                        response.data[0].split('.')
                        //console.log(response)
                    )
                    .then(array=> array.forEach(
                        sentence =>this.add(sentence)
                    ))
                    .catch(e=>{
                        console.log(e)
                    })

            }
        })
            
        

    }
}
</script>
<style scoped>
    .board > button {
        position: fixed;
        top: 190px;
        right: 16px;
        font-size: 1.5em;
    }
div.board {
    background-color: 'brown';
    width: 100%;
    background: #eab92d;
}

</style>
