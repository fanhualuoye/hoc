export const WithConsole = (WrappedComponent) => {
    return {
        mounted () {
            console.log('打印------------------------------')
        },
        props: WrappedComponent.props,
        // 渲染函数
        render (createdElement) {
            //组合子级虚拟节点
            const slots = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self
                    return vnode
                })
            // 返回一个由createdElement方法生成的虚拟dom
            return createdElement(
                WrappedComponent,
                // 一个与模板中属性对应的数据对象
                {
                    on: this.$listeners, // 绑定的事件
                    props: this.$props, // 绑定的props参数对象 透传 scopedSlots
                    scopedSlots: this.$scopedSlots,
                    attrs: this.$attrs
                },
                // 子级虚拟节点
                slots
            )
        }
    }
}

export default {
    WithConsole
}
