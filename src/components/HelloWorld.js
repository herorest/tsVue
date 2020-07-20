import HelloWorld from './HelloWorld.vue';

HelloWorld.install = function (Vue) {
    console.log(HelloWorld.name);
    Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;