<template>
<div class="notice">
    <div class="site-const-wrap">
        <h3 class="guide-case-title"></h3>
        <section class="brick-noticewrap">
            <div class="container--pushauto">
                <section class="brick-notice idc">
                    <header>공지사항</header>
                    <a href="https://www.gabia.com/gabia_notice/list.php" class="brick-notice__list">전체 보기 <i class="fal fa-chevron-right"></i></a>
                    <ul class="item-list">
                        <li class="brick-notice__items"><a href="https://www.gabia.com/gabia_notice/view.php?seq_no=19868">[공지] 공유형 방화벽 장비 교체 작업 안내</a><p class="brick-notice__time">2019.09.03.</p></li>
                        <li class="brick-notice__items"><a href="https://www.gabia.com/gabia_notice/view.php?seq_no=19846">[공지] 장기보관 서버 폐기 예정 안내</a><p class="brick-notice__time">2019.08.16.</p></li>
                    </ul>
                </section>
                <section class="brick-nameserver">
                    <header>네임서버</header>
                    <ul>
                        <li class="brick-nameserver__items"><span class="brick-nameserver__label">1차</span>ns.gabia.co.kr - <span class="block-tablet">211.234.118.50</span></li>
                        <li class="brick-nameserver__items"><span class="brick-nameserver__label">2차</span>ns1.gabia.co.kr - <span class="block-tablet">121.78.117.39</span></li>
                        <li class="brick-nameserver__items"><span class="brick-nameserver__label">3차</span>ns.gabia.net</li>
                    </ul>
                </section>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'notice',
}
</script>

<style lang="scss" scoped>

</style>
