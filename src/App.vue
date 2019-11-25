<template>
    <div id="app">
        <header class="header-global">
            <h1 class="nav-logo">+ combric</h1>
            <div id="nav" class="nav-bar">
                <!-- <router-link to="/">Home</router-link> | -->
                <router-link to="/component" class="nav-bar-link">Component</router-link> |
                <router-link to="/brick" class="nav-bar-link">Brick</router-link>
            </div>
        </header>
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.header-global {
    @include clearfix();
}
.nav-logo {
    float: left;
    padding: 10px;
    font-size: 1.5rem;
    @include mq('tablet') {
        font-size: 2rem;
    }
}
.nav-bar {
    float: right;
    &-link {
        display: inline-block;
        padding: 0 10px;
    }
}
#nav {
    padding: 15px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-active,
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.children-nav {
    margin-bottom: 30px;
}
.guide-case-title {
    margin-top: 20px;
    padding: 15px 15px 10px;
    text-align: left;
    font-size: calc(1.325rem + .9vw);
    font-weight: normal;
}
</style>
