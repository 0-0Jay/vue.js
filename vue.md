# vue.js

1. 데이터 바인딩
   => 데이터와 HTML 태그를 양방향 연결. 한쪽이 변경되면 다른한쪽도 즉시 반영.
   document 객체를 활용하지 않음. (예, document.querySelector)
2. SPA(Single Page Application) : 단일 페이지 애플리케이션
   => 하나의 웹페이지에서 필요한 데이터만 동적으로 가져와 화면을 갱신.
   화면을 새로 로드하지 않음.
3. Virtual-DOM : 가상 돔
   => 가상의 돔을 만들어 여러 변경사항을 가상 돔에 적용한 후, 확정되면 원본 돔에 밀어넣는 방식.

# 부모-자식 간 데이터 교환

1. v-bind:(props) -> defineProps => 부모 -> 자식
2. defineEmits -> v-on:(emit) => 자식 -> 부모

# lifecycle

1. mount : DOM에 추가되어 화면에 렌더링
2. update : 데이터 변경 또는 리렌더링
3. unmount : DOM에서 제거

# AJAX

비동기 기반 통신
주 목적 : 리로드 없이 페이지 변화를 일으키기 위해 데이터를 가져오는 통신
