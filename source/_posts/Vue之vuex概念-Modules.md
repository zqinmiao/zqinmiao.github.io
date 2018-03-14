---
title: Vue之vuex概念-Modules
tags: Vue.js
categories: 框架
abbrlink: 30406
date: 2017-07-13 16:08:47
update:
comments:
permalink:
---
>代码演示vuex中嵌套Modules是如何执行的
<!--more-->

[参考文档](https://vuex.vuejs.org/zh-cn/modules.html)
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        a:{
            namespaced: true,
            state:{
                msg:'msg';
            },
            mutations:{
                increment(state){
                    let m = state.msg+'aa';
                    console.log(m);
                }
            },

            //嵌套模块
            modules:{
                b:{
                    state:{
                        msg2:'inner-msg';
                    },
                    mutations:{
                        test(state){
                            console.log(state.msg2);
                        }
                    }
                }
            }
        }
    }
});
/*
* 情况1: 想要执行模块a中的mutations->increment()：如果模块a中的namespaced:true;那么methods中increment中的写法为this.$store.commit('a/increment');
* 情况2: 想要执行模块b中的mutations->test()：如果模块a中的namespaced:true;模块b中的namespaced:false;或者不设置，那么methods中increment中的写法为this.$store.commit('a/test');
* 情况3: 想要执行模块b中的mutations->test()：如果模块a中的namespaced:true;模块b中的namespaced:true;，那么methods中increment中的写法为this.$store.commit('a/b/test');
* */
const app = new Vue({
   el:'#app',
    store,
    methods:{
        increment(){
            this.$store.commit('a/increment');//情况1  ,log: msgaa
            this.$store.commit('a/test');//情况2  ,log: inner-msg
            this.$store.commit('a/b/test');//情况3  ,log: inner-msg
        }
    },
    template: `
            <div class="app2">
              <button v-on:click="increment">按钮</button>
            </div>
          `
});
```