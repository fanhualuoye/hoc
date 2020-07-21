<script>
import { withHooks, useState, useEffect } from "vue-hooks";

// a custom hook... 自定义一个hook
function useWindowWidth() {
    // 用useState 声明width属性，和setWidth设置属性的方法
    const [width, setWidth] = useState(window.innerWidth);
    // 声明一个方法，通过setWidth改变width
    const handleResize = () => {
        console.log('handleResize')
        setWidth(window.innerWidth);
    };
    // useEffect方法首次创建和更新都会调用
    useEffect(() => {
        console.log('只执行一次useEffect')
        // 这里绑定监听，浏览器宽度改变就出发
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    return width;
}

const Foo = withHooks(h => {
    // state
    const [count, setCount] = useState(0);
    // effect
    useEffect(() => {
        console.log('每次都执行useEffect')
        document.title = "count is " + count;
    })

    // custom hook
    const width = useWindowWidth();

    return h("div", [
        h("span", `count is: ${count}`),
        h(
            "button",
            {
                on: {
                    click: () => setCount(count + 1)
                }
            },
            "+"
        ),
        h("div", `window width is: ${width}`)
    ]);
});
export default {
    name: 'hooks-test-index',
    render(h) {
        return h("div", [h(Foo)]);
    }
}
</script>