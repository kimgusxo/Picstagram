// 아직 이 부분은 어케 만져야할지 감이 안와서 실습만 몇개 진행해보겠습니다.
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';

// 이미지 url 들고오기 ---> 접근권한이 if로 안되어있길래 접근을 모두가능하도록 해제하니 잘 작동
async function getImageUrl(imgName) {
  const reference = storage().ref(imgName);
  const url = await reference.getDownloadURL();
  console.log(url);
  return url;
}

// 갤러리 접근 권한이 안넘어와짐,,, 그것만 되면 해결완료!
// 매개변수에 이미지받고 imageName에 이미지 이름 추출해서 박으면 됨
// 레퍼런스에 들가는 이름도 이름 추출해서 쓸거임!!
async function imageUpload(images) {
  const arSplitUrl = images.path.split('/'); //   "/" 로 전체 url 을 나눈다
  let nArLength = arSplitUrl.length;
  let arFileName = arSplitUrl[nArLength - 1]; // 나누어진 배열의 맨 끝이 파일명이다

  const imageName = arFileName;
  const fileImage = `${utils.FilePath.PICTURES_DIRECTORY}/${imageName}`;
  const reference = storage().ref(imageName);
  await reference.putFile(fileImage);
}

// 메타데이터 넣는 함수, 파이어베이스 스토리지에 위도/경도 속성이 없어서 직접 커스텀으로 넣어야함,,
async function setMetadata(imgName) {
  const reference = storage().ref(imgName);
  const newMetadata = {
    customMetadata: {
      latitude: '100', // 여기
      longtitude: '200', // 여기
    },
  };
  await reference.updateMetadata(newMetadata);
}

// 메타데이터 추출하는 함수
// 매개변수로 참조하는 이미지가 필요함
async function metadataImage(imgName) {
  const reference = storage().ref(imgName);
  const metadata = await reference.getMetadata();
  return metadata;
}

async function deleteImage(imgName) {
  const reference = storage().ref(imgName);
  await reference.delete();
}

export { getImageUrl, imageUpload, metadataImage, setMetadata, deleteImage };