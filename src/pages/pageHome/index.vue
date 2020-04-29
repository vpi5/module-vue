<template>
    <div class="one two">
        {{a}}
        {{numberSumFun}}
        <div class="searh">
            <input type="text" v-model="value" @input="handleInputChange">
        </div>
        <DemoComp v-on:listClick="listClick" :list="listData" :num="num"/>
        <div @click="handleBtnClick">按钮</div>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import DemoComp from '../../components/demoComp';
    export default {
        name: "pageHome",
        components:{
            DemoComp,
        },
        data: () => {
            return {
                a : 1,
                b : 2,
                value : 0,
                listData : [
                    {name : '张三', age : 15},
                    {name : '王五', age : 18}
                ],
                num : 0,
            }
        },
        created: function() {
            // 准备开始渲染 dom 元素树
            console.log(3);
            console.log(webConfig, '====')
        },
        mounted : function ()  {
            // dom 树已经渲染完成
            //this.isShow = this.$store.getters.isShow;
        },
        computed : {
            numberSumFun : function () {
                if(this.a === 1 && this.b < 2){
                    return '成立'
                }
                return '不成立'
            },
        },
        methods : {
            handleDivClick : function (e) {
                console.log('执行了点击事件',e);
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                setTimeout(() => {
                    Indicator.close()
                }, 2000);
            },
            handleInputChange (e){
                this.value = e.target.value;
            },
            listClick (data){
                console.log(data.name, '父组件')
            },
            handleBtnClick () {
                this.listData = [
                    {name : '赵六', age : 12},
                    {name : '李八', age : 11}
                ];
                this.num = 2;
                this.$store.dispatch(this.$store.getters.showFun ? 'hideFooter' : 'showFooter');
            },
        }
    }
</script>

<style scoped lang="less">
    .two{
        background: #cccccc;
    }
    .searh{
        width: 100%;
        height: 35px;
    }
</style>
