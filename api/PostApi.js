import firestore from '@react-native-firebase/firestore';
import { getPostDocId, getCommentsDocId } from './LogicApi';
import { findFollowingById } from './UserApi';
import { getImageUrl, imageUpload, deleteStorageImage } from './StorageImage';

// 매개변수: 유저ID
async function findPostById(userId) {
  //유저ID로 게시물 찾기
  const result = [];

  const postList = await firestore()
    .collection('Post')
    .where('writer', '==', userId)
    .orderBy('date', 'desc')
    .get(); // 두 개 이상의 조건 사용 시 콘솔에서 복합색인 만들어야 함

  if (postList.empty) {
    // 게시물이 없을때 출력문
    console.log('해당하는 게시물이 없습니다.');
    return [];
  }

  postList.forEach((doc) => {
    // 콘솔 출력문
    result.push(doc);
  });

  return result;
}

// 매개변수: 게시물 제목, 시작구간
// 시작 구간을 받으면 거기부터 10개 출력
async function findPostByTitle(title) {
  // 게시물 제목으로 게시물 찾기
  const result = [];

  // limit부분을 start와 end로 바꿀 것
  const postList = await firestore()
    .collection('Post')
    .where('title', '==', title)
    .orderBy('date', 'desc')
    .limit(10)
    .get(); // 게시물 검색 시 사용함으로 10개씩 받아옴

  if (postList.empty) {
    console.log('해당하는 게시물이 없습니다.');
    return [];
  }
  postList.forEach((doc) => {
    // 콘솔 출력문
    result.push(doc.data());
  });

  return result;
}

async function loadingMainPage(userId) {
  const postList = await findPostList(userId);

  const result = [];

  const fetchCommentsAndImages = async (postDate) => {
    return { commentList: await readComments(postDate), imageList: await readImages(postDate) };
  };

  const fetchResult = async () => {
    for (const index of postList) {
      let post = index.data();

      await fetchCommentsAndImages(post.date).then(({ commentList, imageList }) => {
        post = { ...post, commentList, imageList };
        result.push(post);
      });
    }
  };

  return fetchResult().then(() => result);
}

// 매개변수: 유저ID
async function findPostList(userId) {
  // 맨 처음 메인페이지에다가 게시물 출력함
  const postList = [];

  // 0. 나의 게시물을 배열에 푸쉬
  const myPost = await findPostById(userId);
  myPost.forEach((doc) => {
    postList.push(doc);
  });

  // 1. 이메일로 following들을 받아옴
  const following = await findFollowingById(userId);

  // 2. 팔로잉 리스트들의 아이디를 통해 게시물들을 받아옴
  for (const index of following) {
    // forEach는 await을 기다려주지 않아 for ...of문으로 대체했습니다.
    const post = await findPostById(index.following); // 1차 반복문에서 팔로잉을 받아온 뒤
    post.forEach((doc) => {
      // 2차 반복문에서 팔로잉의 게시물을 전체 배열에 푸쉬
      if (doc.data().range != 'Private') {
        // 공개범위가 비공개가 아닐 때
        postList.push(doc);
      }
    });
  }

  // 3. temp배열에 있는 doc들을 전부 시간순으로 재정렬
  postList.sort(function compare(a, b) {
    return b.data().date - a.data().date;
  });

  postList.forEach((doc) => {
    // 콘솔 출력문
    console.log(doc);
  });

  return postList;
}

// 매개변수: 게시물 제목, 게시물 내용, 게시물 작성자
async function createPost({ title, content, writer, images }) {
  // 게시물 생성
  const date = new Date();

  await firestore().collection('Post').add({
    content: content,
    date: date,
    like: 0,
    range: 'All',
    title: title,
    writer: writer,
  });

  // 그룹이미지를 받으면 url만 추출해서 넣고 사진은 스토리지에 넣음
  // url을 추출해서 넣는게 아니라 스토리지에 박아넣고 url을 가져와서 입히는 건가??
  // 쨋든 그 작업을 상위 컬렉션의 필드가 채워진 후 넣는 식으로 작성함

  await addStorageImages(images); // 이미지를 스토리지에 넣는 함수
  await addDatabaseImages(images); // 이미지를 데이터베이스에 넣는 함수
}

// 게시물 수정 함수
async function updatePost({ postDate, title, content, images }) {
  const postDocId = getPostDocId(postDate);

  await firestore().collection('Post').doc(postDocId).update({
    title: title,
    content: content,
  });

  await deleteImage(postDocId);

  await addStorageImages(images); // 이미지를 스토리지에 넣는 함수
  await addDatabaseImages({ postDate, metadata }); // 이미지를 데이터베이스에 넣는 함수
}

// images가 배열이므로 반복문 돌려야함
async function addStorageImages(images) {
  for (const index of images) {
    // images에서 추출한 메타데이터가 매개변수로 들어가야함
    // 이건 이미지 이름 필요
    await imageUpload(index);

    // 이건 나머지 커스텀 메타데이터 필요
    // await setMetadata(index);
  }
}

// images가 배열이므로 반복문 돌려야함
async function addDatabaseImages(images) {
  const postDocId = getPostDocId(images.Datetime); // 사진을 넣기 위한 DocId 추출

  for (const index of images) {
    // images에서 메타데이터 추출
    const arSplitUrl = index.path.split('/'); //   "/" 로 전체 url 을 나눈다
    let nArLength = arSplitUrl.length;
    let arFileName = arSplitUrl[nArLength - 1]; // 나누어진 배열의 맨 끝이 파일명이다

    await firestore()
      .collection('Post')
      .doc(postDocId)
      .collection('Images')
      .add({
        imgDate: index.Datetime,
        latitude: index.latitude,
        longtitude: index.longtitude,
        url: await getImageUrl(arFileName),
      });
  }
}

async function deleteImage(postDocId) {
  const imageDocIdList = await firestore()
    .collection('Post') // 해당 하위 컬렉션의 docId를 전부 획득
    .doc(postDocId)
    .collection('Images')
    .get();

  imageDocIdList.forEach((doc) => {
    // 반복문으로 하위 컬렉션의 문서를 전부 삭제
    const imagesDocId = doc.id;
    deleteImagesByDocId({ postDocId, imagesDocId });
  });
}

// 이슈!: 파이어베이스는 유일성필드를 지원하지 않는다.
// 따라서 검색을 통해 Time을 통해 unique한 값을 먹이는데 나노세컨드까지 겹칠때엔 어떻게 해야할지 모르겠습니다.
// 따라서 게시물과 댓글에 Date()를 통한 값을 유일성으로 생각하고 작성하겠습니다.

// 매개변수: 게시물 시간
async function deletePost(postDate) {
  // 게시물 삭제
  const postDocId = await getPostDocId(postDate); // 해당 상위컬렉션인 게시물의 docId 획득

  const commentsDocIdList = await firestore()
    .collection('Post') // 해당 하위 컬렉션의 docId를 전부 획득
    .doc(postDocId)
    .collection('Comments')
    .get();

  commentsDocIdList.forEach((doc) => {
    // 반복문으로 하위 컬렉션의 문서를 전부 삭제
    const commentsDocId = doc.id;
    deleteCommentsByDocId({ postDocId, commentsDocId });
  });

  deleteImage(postDocId); // 이미지 db랑 스토리지에 있는거 삭제

  // 이슈!: 하위 컬렉션이 있는 문서의 경우 하위컬렉션의 모든 문서를 제거한 뒤
  // 삭제해야하므로 for문을 통해 하위컬렉션의 문서들을 전부 삭제해야한다.
  await firestore().collection('Post').doc(postDocId).delete(); // 하위 컬렉션이 사라진 상위 컬렉션 삭제
}

// 매개변수: 게시물 시간, 설정한 범위
async function postRangeUpdate({ postDate, range }) {
  // 게시물 범위를 업데이트하는 함수
  const postDocId = await getPostDocId(postDate);

  await firestore().collection('Post').doc(postDocId).update({
    range: range,
  });
}

// 매개변수: 게시물 시간, 좋아요 토큰, 좋아요 개수
// 증분함수나 집계함수가 안먹힙니다....
async function likeUpdate({ postDate, likeToken, like }) {
  // 좋아요 받는 함수
  const postDocId = await getPostDocId(postDate);

  if (likeToken == 'a') {
    // 토큰 부분은 어케할지 합치면서 수정이다요~
    await firestore()
      .collection('Post')
      .doc(postDocId)
      .update({
        like: like + 1,
      });
  } else {
    await firestore()
      .collection('Post')
      .doc(postDocId)
      .update({
        like: like - 1,
      });
  }
}

// 매개변수: 댓글 작성자, 댓글 내용, 게시물 시간
async function createComments({ commentWriter, commentContent, postDate }) {
  // 댓글 작성자와 댓글 내용을 넣어 댓글 생성
  const postDocId = await getPostDocId(postDate);

  await firestore().collection('Post').doc(postDocId).collection('Comments').add({
    commentWriter: commentWriter,
    commentContent: commentContent,
    date: new Date(),
    type: true,
  });
}

// 이슈!: 댓글도 유일성을 보장하는 필드가 없음!
// 매개변수: 게시물 시간, 댓글 시간
async function deleteComments({ postDate, commentsDate }) {
  const postDocId = await getPostDocId(postDate); // 해당 상위컬렉션인 게시물의 docId 획득
  const commentsDocId = await getCommentsDocId({ postDate, commentsDate }); // 해당 하위컬렉션인 댓글의 docId 획득

  deleteCommentsByDocId({ postDocId, commentsDocId });
}

async function updateComments({ postDate, commentsDate, commentContent }) {
  const postDocId = await getPostDocId(postDate); // 해당 상위컬렉션인 게시물의 docId 획득
  const commentsDocId = await getCommentsDocId({ postDate, commentsDate }); // 해당 하위컬렉션인 댓글의 docId 획득

  await firestore()
    .collection('Post')
    .doc(postDocId)
    .collection('Comments')
    .doc(commentsDocId)
    .set({
      commentContent: commentContent,
    });
}

async function readComments(postDate) {
  const postDocId = await getPostDocId(postDate);

  const result = [];

  const comments = await firestore()
    .collection('Post')
    .doc(postDocId)
    .collection('Comments')
    .orderBy('date', 'desc')
    .get();

  comments.forEach((doc) => {
    result.push(doc.data());
  });

  return result;
}

// 매개변수: 게시물 시간
async function readImages(postDate) {
  // 게시물의 이미지 불러오는 함수
  const postDocId = await getPostDocId(postDate); // 게시물의 DocId 가져옴

  const result = [];

  const images = await firestore()
    .collection('Post') // 이미지리스트 가져오기
    .doc(postDocId)
    .collection('Images')
    .get();

  images.forEach((doc) => {
    result.push(doc.data());
  });

  return result;
}

// 어차피 매개변수 두개받아서 프로필 검사하는데 그게 함수로 빼야하나???
// ---> 잘몰루!

// 매개변수: 리턴된 게시물, 나의Id
function isMyPost({ post, myId }) {
  // 나의 게시물인지 확인하는 함수
  const myPost = [];

  post.forEach((el) => {
    if (el.writer == myId) {
      myPost.push(true);
    } else {
      myPost.push(false);
    }
  });

  return myPost;
}

// 매개변수: 리턴된 댓글, 나의Id
function isMyComments({ comments, myId }) {
  // 내가 쓴 댓글인지 확인하는 함수
  const myComments = [];

  comments.forEach((el) => {
    if (el.writer == myId) {
      myComments.push(true);
    } else {
      myComments.push(false);
    }
  });

  return myComments;
}

// 게시물의 삭제를 위해 어쩔 수 없이 docId로 삭제하는 방향으로 작성
// 내부로직 함수
async function deleteCommentsByDocId({ postDocId, commentsDocId }) {
  await firestore()
    .collection('Post')
    .doc(postDocId)
    .collection('Comments')
    .doc(commentsDocId)
    .delete();
}

// 내부로직 함수
async function deleteImagesByDocId({ postDocId, imagesDocId, imgName }) {
  await deleteStorageImage(imgName); // 스토리지 사진 지우는 것
  await firestore()
    .collection('Post')
    .doc(postDocId) // 파이어베이스 DB 정보 지우는 것
    .collection('Images')
    .doc(imagesDocId)
    .delete();
}

export {
  findPostById,
  loadingMainPage,
  findPostByTitle,
  findPostList,
  createPost,
  deletePost,
  updatePost,
  postRangeUpdate,
  likeUpdate,
  createComments,
  deleteComments,
  updateComments,
  readComments,
  readImages,
  isMyPost,
  isMyComments,
};
