<template>
    <div class="one two">
        homePage
    </div>
</template>

<script>
    export default {
        name: "pageHome",
        created : function () {
            console.log(webConfig, '====')
        }
    }
</script>

<style scoped lang="less">
    .two{
        background: #cccccc;
    }
</style>
