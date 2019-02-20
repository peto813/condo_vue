<template>
<div class="container">
    <h1>{{$ml.with('VueJS').get('questions')}}</h1>
    <div class="row">
        <div class="col-lg-4">

<b-nav class="nav nav-pills faq-nav" id="faq-tabs"  vertical>
  <b-nav-item v-on:click="activePan=1" :active="activePan===1">Frequently Asked Questions</b-nav-item>
  <b-nav-item v-on:click="activePan=2" :active="activePan===2">Profile</b-nav-item>
  <b-nav-item v-on:click="activePan=3" :active="activePan===3">Favorites</b-nav-item>
  <b-nav-item v-on:click="activePan=4" :active="activePan===4">General help</b-nav-item>
</b-nav>

        </div>

        <div class="col-lg-8">

            <div v-if="activePan===1">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">What is the cost of your services?</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            Free
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                        texto
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">How long does it take for you to approve my condo?</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            Usually a couple of hours, however due to high demand the process may take up to a 24 hours.
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                        texto
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
            <div v-if="activePan===2">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Question 2</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            answer 2
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                        texto
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
            <div v-if="activePan===3">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Question 3</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            answer 3
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                        texto
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
            <div v-if="activePan===4">
                <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Question 4</b-btn>
                    </b-card-header>
                    <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            answer 4
                            I start opened because <code>visible</code> is <code>true</code>
                        </p>
                        <p class="card-text">
                        texto
                        </p>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            activePan:1 
        }
    }
}
</script>


<style>
body {
  margin-top: 30px;
  background-color: #eee;
}


.faq-nav {
    flex-direction: column;
    margin: 0 0 32px;
    border-radius: 2px;    
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
    
    .nav-link {
        position: relative;
        display: block;
        margin: 0;
        padding: 13px 16px;
        background-color: #fff;
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        color: #616161;
        transition: background-color .2s ease;
        
        &:hover {
            background-color: #f6f6f6;
        }
        
        &.active {
            background-color: #f6f6f6;
            font-weight: 700;
            color: rgba(0,0,0,.87);        
        }
        
        &:last-of-type {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom: 0;
        }
        
        i.mdi {
            margin-right: 5px;
            font-size: 18px;
            position: relative;
        }
    }
}

.tab-content {
    box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
    
    .card {
        border-radius: 0;
    }
    
    .card-header {
        padding: 15px 16px;
        border-radius: 0;
        background-color: #f6f6f6;
        
        h5 {
            margin: 0;
            
            button {
                display: block;
                width: 100%;
                padding: 0;
                border: 0;
                font-weight: 700;
                color: rgba(0,0,0,.87);
                text-align: left;
                white-space: normal;
                
                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    text-decoration: none;
                }
            }
        }
    }
    
    .card-body {
        p {
            color: #616161;
            
            &:last-of-type {
                margin: 0;
            }
        }
    }
}


.accordion {
    > .card {
        &:not(:first-child) {
            border-top: 0;
        }   
    }
}

.collapse.show {
    .card-body {
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
}
</style>
