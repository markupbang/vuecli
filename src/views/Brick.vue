<template>
  <div class="bricks">
    <div class="children-nav">
        <router-link to="/brick/about" class="children-link">About</router-link>
        <router-link to="/brick/addition" class="children-link">Addition</router-link>
        <router-link to="/brick/subheader" class="children-link" msg="subheader">Subheader</router-link>
        <router-link to="/brick/notice" class="children-link">Notice</router-link>
    </div>
    <router-view class="page"/>
  </div>
</template>

<style lang="scss" scoped>
.bricks {
    & > h1 {
        color:#1d7abd;
    }
}
.router-link {
    &-exact-active:link,,
    &-exact-active:visited {
        color: #42b983;
    }
}

.children {
    &-nav {
        display: flex;
        justify-content: space-around;
        text-align: left;
        padding: 20px 0;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
    }
}

</style>
