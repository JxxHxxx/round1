<template>
    <header id="AppHeader">
        <div class="AppHeaderContainer">
            <ul class="HorizonUnorderList">
                <div class="AppHeaderItem LeftAppHeaderItem">로고 자리</div>
                <RouterLink to="/">
                    <li class="AppHeaderItem CenterAppHeaderItem">
                        <a>홈</a>
                    </li>
                </RouterLink>
                <RouterLink to="#">
                    <li class="AppHeaderItem CenterAppHeaderItem">
                        <a>권한관리</a>
                    </li>
                </RouterLink>
                <RouterLink to="/comfirm">
                    <div>
                        <li class="AppHeaderItem CenterAppHeaderItem">
                            <a>컴포넌트 설계</a>
                        </li>
                    </div>
                </RouterLink>
                <RouterLink to="#">
                    <div>
                        <li class="AppHeaderItem CenterAppHeaderItem">
                            <a>공지사항</a>
                        </li>
                    </div>
                </RouterLink>
                <RouterLink to="/admin">
                    <div>
                        <li class="AppHeaderItem CenterAppHeaderItem">
                            <a>slot</a>
                        </li>
                    </div>
                </RouterLink>
                <RouterLink to="#">
                    <div>
                        <li class="AppHeaderItem CenterAppHeaderItem">
                            <a>결재관리</a>
                        </li>
                    </div>
                </RouterLink>
                <div class="AppHeaderItem RightAppHeaderItem">로그인/로그아웃</div>
            </ul>
        </div>
    </header>
    <RouterView />
</template>
<script setup>

</script>
<style></style>