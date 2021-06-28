<template>
    <div>
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>

<script>
export default {
    /**
     * @property component name
     */
    name: "App",
    provide() {
        return { reload: this.reload };
    },
    /**
     * @property data, initialization of component variables
     */

    data() {
        return {
            isRouterAlive: true,
        };
    },
    /**
     * @property component methods
     */
    methods: {
        /**
         * @description reloading method, you can control the display or hiding of the router view to control page reloading.
         */

        reload: function () {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true;
            });
        },
    },
};
</script>

<style lang="css"></style>
