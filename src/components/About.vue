<template>
    <div class="about">
        <h1>{{ msg }}</h1>
        <div class="site-const-wrap">
            <h3 class="guide-case-title">BG Img</h3>
            <section class="brick-about cloud">
                <header class="brick-about__title"><span class="sans-serif">g</span>클라우드를 내 상품처럼 판매</header>
                <div class="brick-about__desc">
                믿을 수 있는 g클라우드를 내 상품처럼<br>판매하여 수익을 올려보세요.
                </div>
                <a href="https://partnercenter.gabia.com/cloudpartner" class="btn-basic invert btn--detail-view">자세히보기</a>
            </section>
        </div>
        <div class="site-const-wrap">
            <h3 class="guide-case-title">BG White</h3>
            <section class="brick-about white">
                <header class="brick-about__title"><span class="sans-serif">g</span>클라우드를 내 상품처럼 판매</header>
                <div class="brick-about__desc">
                믿을 수 있는 g클라우드를 내 상품처럼<br>판매하여 수익을 올려보세요.
                </div>
                <a href="https://partnercenter.gabia.com/cloudpartner" class="btn-basic btn--detail-view">자세히보기</a>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    props: {
        msg: String
    }
}
</script>

<style lang="scss" scoped>
.brick-about.cloud {
    background: url('https://static.gabia.com/responsive/assets/images/cloud/bg_service_gcloud.png') center/cover no-repeat;
}
</style>
