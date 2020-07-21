<template>
    <div @click="click">
        <span style="color: #42b983">我是原组件的内容</span>
        <hr>
        <slot name="aSlot"></slot>
        <div style="margin: 20px;">我是分割线，也是原先组件的-----------------------------------------------------------------------</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'hoc-c',
    methods: {
        click() {
            // console.log('a-components')
        }
    },
    // eslint-disable-next-line vue/require-render-return
    render(h) {
        console.log('aaa')
        return h('<template>11</template>')
    },
    props: {
        list: {}
    },
    created () {
        // console.log('list', this.list)
    }
}
</script>

<style scoped>

</style>
