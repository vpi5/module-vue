<template>
    <div>
        <div v-for="(item, index) in list" :key="index" @click="handleListClick(item)">
            <span :class="item.age > 15 ? 'two' : item.name === '张三' ? 'three' : ''">名字：{{item.name}}</span>
            <span>年龄：{{item.age}}</span>
            <span>索引：{{index}}</span>
        </div>
        <div>{{num}}</div>
        <div v-show="isShow">store 控制的显示隐藏</div>
    </div>
</template>

<script>
    export default {
        name: "DemoComp",
        props: {
            list: {
                type: Array,
                default: function () {
                    return []
                }
            },
            num : {
                type: Number,
                default: function () {
                    return ''
                }
            }
        },
        computed : {
            isShow(){
                return this.$store.getters.showFun;
            }
        },
        methods : {
            handleListClick (data){
                this.$emit('listClick', data)
            },
            handleUpData (data) {
                console.log(data, '监听num 发生变化')
            },
        },
        watch : {
            /*list (data, b){
                console.log(data, b)
            },*/
            num (a, b){
                if(a === b){
                    return;
                }
                this.handleUpData(a);
            },
        },
    }
</script>

<style scoped lang="less">
    .two{
        color: red;
    }
    .three{
        color: #c89564;
    }
</style>
