<template>
    <div>
        <Map/>
    </div>
</template>

<script>
import Map from './Map.vue';

export default {
    /** 
     * @property component name
     */
    name: "Dashboard",
    /** 
     * @property component initialization
     */
    components: {
        Map,
    },
    /** 
     * @property data, initialization of component variables
     */
    data() {
        return {}
    },
    /** 
     * @property computed component properties
     */
    computed: {},
    /** 
     * @property component methods
     */
    methods: {},
    /** 
     * @property created, calls the following functions when loading the component
     */
    created: function() {},
    /** 
     * @property wath property of the component
     */
    watch: {},
}; 
</script>

<style scope></style>