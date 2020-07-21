<template>
<!--    <div></div>-->
    <input style="color: #000;" type="number" class="classB"/>
</template>

<script>
function Person (firstName, lastName) {
    return () => {
        console.log('firstName', firstName)
        console.log('lastName', lastName)
    }
}

export default {
    // 禁用inheritAttrs
    // inheritAttrs: false,
    name: 'prop-text',
    props: {
        p: Person
    }
}
</script>

<style scoped>

</style>