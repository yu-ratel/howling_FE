const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('map');

  // 지도를 표시할 div
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  const map = new kakao.maps.Map(container, options); // 지도를 생성

  const marker = new kakao.maps.Marker({}); // 마커 생성

  marker.setMap(map); // 마커 실행

  marker.setDraggable(true);

  kakao.maps.event.addListener(map, 'mouseup', (mouseEvent) => {
    // 클릭한 위치 경도 위도 가져옴
    const latlng = mouseEvent.latLng;

    marker.setPosition(latlng); // 마커 클릭한 위치로 옮김

    const message = `경도는 ${latlng.getLat()}이고, 위도는 ${latlng.getLng()}입니다.`;
    console.log(message);
  });

  // 현재 위치 로직
  function displayMarker(locPosition, message) {
    // 마커 생성
    const locationMarker = new kakao.maps.Marker({
      // eslint-disable-next-line object-shorthand
      map: map,
      position: locPosition, // 위치는 현재 위치
    });

    const iwContent = message; // 인포윈도우 창 문구
    const iwRemoveable = true; // 인포윈도우 창 닫기

    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, locationMarker);

    map.setCenter(locPosition);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const locPosition = new kakao.maps.LatLng(lat, lon);
      const message = '내 위치~';
      console.log(lat, lon);
      displayMarker(locPosition, message);
    });
  } else {
    const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const message = 'geolocation을 사용할수 없어요..';

    displayMarker(locPosition, message);
  }
}
