<template>
  <div class="bricks">
    <nav>
        <router-link to="/components/About">About</router-link> |
        <router-link to="/components/Subheader">Subheader</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.bricks {
    & > h1 {
        color:#1d7abd;
    }
}
</style>
