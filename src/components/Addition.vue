<template>
<div class="addition">
    <div class="site-const-wrap">
        <h3 class="guide-case-title">박스 콘텐츠들의 높이가 같을경우 auto-height 추가(768,1024포인트 확인 요망):<br>ul class="brick-addition__items auto-height"</h3>
        <section class="brick-addition">
            <div class="container--pushauto">
                <header>다양한 부가서비스로<span class="block-desktop"></span> 서비스 운영의<span class="block-desktop"></span> 효율성을 높이세요</header>
                <ul class="brick-addition__items">
                    <li>
                        <a href="/service/autoscalling">
                            <p class="brick-addition__title">오토스케일링 <i class="fal fa-chevron-right"></i></p>
                            <p>임계치 설정에 따른 서버 자동 증설로<span class="block-tablet"></span> 부하 분산 처리가 가능합니다.</p>
                        </a>
                    </li>
                    <li>
                        <a href="/loadbalancer">
                            <p class="brick-addition__title">로드밸런서  <i class="fal fa-chevron-right"></i></p>
                            <p>지능형 부하 분산 시스템으로<span class="block-tablet"></span> 서버의 성능 저하를 방지합니다.</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://security.gabia.com/product/waf">
                            <p class="brick-addition__title">보안 <i class="fal fa-chevron-right"></i></p>
                            <p>웹방화벽, 바이러스 백신으로<span class="block-tablet"></span> 서버와 데이터를 안전하게 보호합니다.</p>
                        </a>
                    </li>
                    <li>
                        <a href="/service/snapshot" >
                            <p class="brick-addition__title">스냅샷/이미지  <i class="fal fa-chevron-right"></i></p>
                            <p>서버의 현재 상태 저장하여<span class="block-tablet"></span> 단시간 내 정보 복원이 가능합니다.</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div class="site-const-wrap">
        <section class="brick-addition orange">
            <div class="container--pushauto">
                <header>함께 이용하면<span class="block-desktop"></span>더 좋습니다</header>
                <ul class="brick-addition__items line-four">
                    <li>
                        <a href="/service/autoscalling">
                            <p class="brick-addition__title">오토스케일링 <i class="fal fa-chevron-right"></i></p>
                            <p>서버와 네트워크 운영인력을<span class="block-tablet"></span>별도로 확보하지 않고 전문가의<span class="block-tablet"></span>체계적인 관리를 받을 수 있는 서비스 입니다.</p>
                        </a>
                    </li>
                    <li>
                        <a href="/loadbalancer">
                            <p class="brick-addition__title">로드밸런서  <i class="fal fa-chevron-right"></i></p>
                            <p>외부의 불법적인 접근 및 공격에서<span class="block-tablet"></span>정해진 정책에 따라 고객의 시스템을<span class="block-tablet"></span>안전하게 보호하는 보안 서비스입니다.</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <div class="site-const-wrap">
        <h3 class="guide-case-title">아이콘 유: 아이콘은 페이지.scss에 선언</h3>
        <section class="brick-addition is-icon webhosting">
            <div class="container--pushauto">
                <header>편리한<span class="block-desktop"></span> 부가서비스</header>
                <ul class="brick-addition__items">
                    <li class="addservice">
                        <a href="/addservice">
                            <p class="brick-addition__title">전자결제 모듈 지원 <i class="fal fa-chevron-right"></i></p>
                            <p>웹 구매를 위해 안전한 네트워크<span class="block-tablet"></span> 환경과 결제 모듈을 제공합니다.</p>
                        </a>
                    </li>
                    <li class="phone-confirm">
                        <a href="/addservice/phone_confirm">
                            <p class="brick-addition__title">휴대전화 본인인증 <i class="fal fa-chevron-right"></i></p>
                            <p>휴대전화를 이용해 본인 여부를<span class="block-tablet"></span> 확인하는 안전한 인증수단입니다.</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    name: 'addition',
}
</script>