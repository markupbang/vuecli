<template>
    <div class="subheader">
        <h1>{{ msg }}</h1>
        <section class="brick-sub-header webhosting">
            <div class="container--pushauto lib-relative">
                <header class="brick-sub-header__title">g클라우드 서버</header>
                <p class="brick-sub-header__desc">중소기업 최초, 클라우드 보안인증 획득! 품질인증 최고레벨(5 Level)획득!</p>
                <ul class="sub-header__btn-area two">
                    <li><a href="https://cloud.gabia.com/service/estimate" target="_blank" title="새창" class="sub-header__btn">g클라우드 계산기</a></li>
                    <li><a href="https://gcloud.gabia.com/" target="_blank" title="새창" class="sub-header__btn">g클라우드 관리콘솔</a></li>
                </ul>
            </div>
        </section>
        <h3 class="guide-case-title"><i class="fas fa-sort-down"></i> 버튼 1개</h3>
        <section class="brick-sub-header webhosting">
            <div class="container--pushauto lib-relative">
                <header class="brick-sub-header__title">g클라우드 서버</header>
                <p class="brick-sub-header__desc">중소기업 최초, 클라우드 보안인증 획득! 품질인증 최고레벨(5 Level)획득!</p>
                <ul class="sub-header__btn-area one">
                    <li><a href="https://cloud.gabia.com/service/estimate" target="_blank" title="새창" class="sub-header__btn">g클라우드 계산기</a></li>
                </ul>
            </div>
        </section>
        <h3 class="guide-case-title"><i class="fas fa-sort-down"></i> 버튼 없을시(모바일 헤더 높이)</h3>
        <section class="brick-sub-header non-btn webhosting">
            <div class="container--pushauto lib-relative">
                <header class="brick-sub-header__title">g클라우드 서버</header>
                <p class="brick-sub-header__desc">중소기업 최초, 클라우드 보안인증 획득! 품질인증 최고레벨(5 Level)획득!</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'subheader',
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