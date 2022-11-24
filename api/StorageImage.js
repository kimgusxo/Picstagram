// 아직 이 부분은 어케 만져야할지 감이 안와서 실습만 몇개 진행해보겠습니다.
import storage from "@react-native-firebase/storage";
import { utils } from "@react-native-firebase/app"

// 이미지 url 들고오기 ---> 접근권한이 if로 안되어있길래 접근을 모두가능하도록 해제하니 잘 작동
async function getImage(imgName) {
    const reference = storage().ref(imgName)
    const url = await reference.getDownloadURL();
    console.log(url);
}

// 갤러리 접근 권한이 안넘어와짐,,, 그것만 되면 해결완료!
async function imageUpload() {
    const imageName = 'IMG_20221124_220553.jpg'
    const fileImage = `${utils.FilePath.PICTURES_DIRECTORY}/${imageName}`
    const reference = storage().ref('photo.jpg')
    await reference.putFile(fileImage)
}

// 메타데이터 추출하는 함수


export {getImage, imageUpload}