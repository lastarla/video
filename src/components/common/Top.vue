<template>
    <div class="top">
        <div class="top-cont" v-if="!isList">
            <span class="logo"></span>Video
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
    height: 3.571rem;
    margin-bottom: 1px;
    background: #fff;
}
.top-cont {
    font-size: 1.571rem;
    color: #303030;
    padding: 0 20px;
}
.top-cont-list {
    padding: 0 20px 0 0;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
}
.logo {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(233,38,53,0.26);
    vertical-align: bottom;
    margin: 0.928rem 5px 0 0;
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