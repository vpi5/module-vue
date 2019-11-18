<template>
    <div id="ppp">
        <HelloWorld/>
        <mt-header title="long long long long title">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
    import HelloWorld from '../../components/HelloWorld/index.vue';

    export default {
        name: "homePage",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped lang="less">
    #ppp{
        background: red;
    }
</style>
