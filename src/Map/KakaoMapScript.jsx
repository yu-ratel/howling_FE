const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
    draggable: false,
  };
  const map = new kakao.maps.Map(container, options);

  function displayLevel() {
    const levelEl = document.getElementById('maplevel');
    levelEl.innerHTML = `현재 지도 레벨은  ${map.getLevel()} 레벨입니다.`;
  }

  function zoomIn() {
    // 현재 지도의 레벨을 얻어옵니다
    const level = map.getLevel();

    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(level - 1);

    // 지도 레벨을 표시합니다
    displayLevel();
  }

  function zoomOut() {
    // 현재 지도의 레벨을 얻어옵니다
    const level = map.getLevel();

    // 지도를 1레벨 올립니다 (지도가 축소됩니다)
    map.setLevel(level + 1);

    // 지도 레벨을 표시합니다
    displayLevel();
  }
  // const marker = new kakao.maps.Marker({
  //   position: map.getCenter(),
  // });

  // marker.setMap(map);

  // kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
  //   const latlng = mouseEvent.latLng;

  //   marker.setPosition(latlng);

  //   const message = `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`;
  // console.log(message);
  // });

  function displayMarker(locPosition, message) {
    const marker = new kakao.maps.Marker({
      // eslint-disable-next-line object-shorthand
      map: map,
      position: locPosition,
    });

    const iwContent = message;
    const iwRemoveable = true;

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(map, marker);

    map.setCenter(locPosition);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const locPosition = new kakao.maps.LatLng(lat, lon);
      const message = '<div style="padding:5px;">부이야</div>';

      displayMarker(locPosition, message);
    });
  } else {
    const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const message = 'geolocation을 사용할수 없어요..';

    displayMarker(locPosition, message);
  }
}
