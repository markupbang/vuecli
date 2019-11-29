<template>
    <div class="consult">
        <div class="site-const-wrap">
            <h3 class="guide-case-title">Basic type</h3>
            <section class="brick-consult idc">
                <div class="container--pushauto">
                    <header class="brick-consult__title">전문가와 상담하세요</header>
                    <a href="/quotation" class="btn-basic">상담하기</a>
                    <ul class="brick-consult-list">
                        <li class="brick-consult-list__line">
                            <span class="brick-consult__title-circle">
                                <p class="circle__text">전문 상담 문의</p>
                            </span>
                            <ul class="brick-consult-call-list">
                                <li>
                                    <span class="brick-consult-call-list__title">영업 문의</span>
                                    <span class="brick-consult-call-list__desc">02-3473-3911</span>
                                </li>
                                <li>
                                    <span class="brick-consult-call-list__title">위탁운영 지원</span>
                                    <span class="brick-consult-call-list__desc">02-6948-3776</span>
                                </li>
                            </ul>
                        </li>
                        <li class="brick-consult-list__line">
                            <span class="brick-consult__title-circle">
                                <p class="circle__text two-line">24시간<span class="block-tablet"></span> 지원 문의</p>
                            </span>
                            <ul class="brick-consult-call-list">
                                <li>
                                    <span class="brick-consult-call-list__title">서초 센터</span>
                                    <span class="brick-consult-call-list__desc">02-3473-3901</span>
                                </li>
                                <li>
                                    <span class="brick-consult-call-list__title">가산 센터</span>
                                    <span class="brick-consult-call-list__desc">02-867-9901</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

        <div class="site-const-wrap">
            <h3 class="guide-case-title">Short type</h3>
            <section class="brick-consult short">
                <div class="container--pushauto">
                    <header class="brick-consult__title">VPS에 대해 무엇이든 물어보세요</header>
                    <p class="brick-consult__service">상담 문의를 이용하시면 더욱 정확한 상담이 가능합니다.</p>
                    <a href="javascript:document.reg1.submit()" class="btn-basic">상담하기</a>
                    <p class="brick-consult__phone"><span class="ico"></span>1544-4370 (3번)</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'consult',
}
</script>