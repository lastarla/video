<template>
    <div class="top">
        <div class="top-cont" v-if="!isList">
            <span class="logo"></span>
        </div>
        <div class="top-cont top-cont-list" v-if="isList">
            <div class="back" @click="back">
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top',
    computed: {
        isList() {
            return this.$route.path.indexOf('list') > -1;
        }
    },
    mounted () {
        window.scrollTo(0, 0);
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.top {
    background: #fff;
}
.top-cont {
    height: 30px;
    font-size: 1.571rem;
    color: #303030;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.12);
}
.top-cont-list {
    height: auto;
    padding: 0 20px 0 0;
    border-bottom: none;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
}
.logo {
    display: inline-block;
    width: 101px;
    height: 30px;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 100%;
}

 .back {
    display: inline-block;
    width: 4rem;
    height: 3.571rem;
 }

.back span{
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background: url('../../assets/img/back.png') no-repeat;
    background-size: contain;
    margin: 1.2rem 0 0 20px;
}
</style>