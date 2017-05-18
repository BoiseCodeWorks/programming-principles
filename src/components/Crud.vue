<template>
    <div class="crud">
        <h1>C.R.U.D.</h1>
        <ul>
            <li v-for="item in http">
                <router-link :to="'/crud/'+item.route">{{item.letter}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'crud',
    data () {
       return {
            crud: 'CRUD',
            httpMethods: [{letter: 'C', route: 'post'}, {letter: 'U', route: 'put'} ]
        }
    }
}
</script>

<style>
</style>