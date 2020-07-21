<template>
    <div>
        <!--        <PropTest :p="a"></PropTest>-->

        <PropTest data-date-picker="activated" style="color: #42b983;background: black;" type="text" class="classA"></PropTest>

    </div>
</template>

<script>
import PropTest from '../components/prop-test'
function Person (firstName, lastName) {
    return () => {
        console.log('firstName', firstName)
        console.log('lastName', lastName)
    }
}

export default {
    name: 'prop-text-index',
    components: { PropTest },
    data() {
        return {
            a: Person('a', 'b')
        }
    }
}
</script>

<style scoped>

</style>