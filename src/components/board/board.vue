<template>
    <b-container> 
        <h2>Cartelera Virtual</h2>
        <hr>
        <b-button size="lg" variant="success" @click="add('New Note')">+</b-button>
        <hr>
        <div class="board" >
            <note pclass="board" class="note"  @removeNote="remove" :note="item.note" :id="item.id" @updateNote="update" v-for="item in notes" :key="item.id"></note>
        </div>
        
    </b-container>
</template>
<script>
import axios from "axios";
import note from "@/components/note/note.vue";
//import draggable from 'vuedraggable';

// function onMoveCallback(evt, originalEvent){
//    //console.log(originalEvent.layerX)
//    //console.log(originalEvent.layerY)
//    let mouseY= originalEvent.clientY
//    let mouseX= originalEvent.clientX
//    //console.log(mouseX, mouseY)
//    //evt.dragged.style.background="red"
//    //console.log(evt.dragged)
//    return 1;
//   // return true
//    //alert('a')
// //    console.log(evt.to)
// //    console.log(evt.to.offsetLeft)
// //    console.log(evt.to.offsetTop)
// //    evt.target.left=evt.to.offsetLeft
// //    evt.target.right=evt.to.offsetLeft
//     // return false; — for cancel
// }

export default {
    components:{
        note,
        //draggable
    },
    props:{
        count:Number
    },
    data() {
      return {
        notes:[],
        //count:10
      }
    },
    methods:{
        // verga(data){
        //     console.log(data)
        // },
        //getComponentData:onMoveCallback,
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
                let str="Shoulder tongue shank ball tip fatback corned beef. Beef ribs pig fatback ham hock corned beef. Ham hock jerky ham, beef ribs frankfurter tongue turkey. Hamburger shoulder landjaeger ground round sirloin. Shoulder brisket cow tri-tip biltong ball tip, tenderloin drumstick bacon boudin bresaola turkey jowl shank pastrami. Chicken swine porchetta chuck ham, burgdoggen pancetta t-bone sausage boudin. Beef beef ribs buffalo ball tip jerky shank andouille rump cupim meatball pork chop swine capicola turkey. Porchetta ham hock pig, salami ribeye buffalo brisket pastrami kevin turkey strip steak. Cupim hamburger brisket ball tip leberkas filet mignon ground round, tail picanha drumstick landjaeger strip steak ham hock flank frankfurter. Jerky jowl bacon fatback pancetta beef ribs meatloaf."
                let strings= str.split('.')
                strings.forEach(sentence=>this.add(sentence))
                //let url= `https://baconipsum.com/api/?type=all-meat&sentences=${this.count}`
               // axios.get(url)
                    //.then(response=>  response.data[0].split('.'))
                    // .then(array=> array.forEach(
                    //     sentence =>this.add(sentence)
                    // ))
                    // .catch(e=>{
                    //     console.log(e)
                    // })

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
    /* background-color: 'brown'; */
    background-image: url("../../../src/assets/static/old_map.png");
    width: 100%;
    /* background: #eab92d; */
    height: 100vh;
    position:relative;
    
}
</style>
