<template>
  <div class="bricks">
    <div class="children-nav">
        <router-link to="/brick/grid" class="children-link">Grid</router-link>
        <router-link to="/brick/about" class="children-link">About</router-link>
        <router-link to="/brick/addition" class="children-link">Addition</router-link>
        <router-link to="/brick/subheader" class="children-link">Subheader</router-link>
        <router-link to="/brick/notice" class="children-link">Notice</router-link>
        <router-link to="/brick/eventbnr" class="children-link">Event banner</router-link>
        <router-link to="/brick/plan" class="children-link">plan</router-link>
        <router-link to="/brick/bricktitle" class="children-link">Brick Title</router-link>
        <router-link to="/brick/item" class="children-link">Items</router-link>
        <router-link to="/brick/consult" class="children-link">Consult</router-link>
        <router-link to="/brick/faq" class="children-link">Faq</router-link>
    </div>
    <router-view class="page"/>
  </div>
</template>

<script>
export default {
    name: 'brick',
}
</script>

<style lang="scss">
.bricks {
    & > h1 {
        color:#42b983;
    }
    .page {
        .site-const-wrap {
            border-top: 1px solid #efefef;
            border-radius: 10px;
            @include mq('tablet') {
            }
        }
    }
    .guide-case-title {
        padding: 25px 20px 10px;
        text-align: left;
        font-size: 1.125rem;
        font-weight: normal;
    }
}

.router-link {
    &-exact-active:link,
    &-exact-active:visited {
        color: #42b983;
    }
}

.children {
    &-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        text-align: left;
        padding: 10px 0;
        border-top: 1px solid #efefef;
        @include mq('tablet') {
            justify-content: space-around;
        }
    }
    &-link {
        padding: 10px;
    }
}
</style>
