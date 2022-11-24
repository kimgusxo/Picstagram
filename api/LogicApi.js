import firestore from "@react-native-firebase/firestore"

// 매개변수: 유저ID
async function getUserDocId(userId) { // 유저ID로 유저 문서 참조를 위해 문서 아이디 리턴
  const userDocIdList = await firestore().collection('User')
  .where('id', '==', userId).get();
  
  if(userDocIdList.empty) { // 유저문서가 비어있을때 널값 리턴
    console.log("해당하는 문서가 없습니다.");
    return;
  }
  
  const userDocId = [];
  
  userDocIdList.forEach(doc => { // 리스트로 DB에서 받아오므로 추출과정 필요
    userDocId.push(doc.id);
  });
  
  return userDocId[0]; // 나 또는 다른 상대방의 문서Id를 얻기위해 스트링형으로 리턴(매개변수로 사용하기 때문)
}

//이슈!: 포스트부분의 유일성을 가지는 필드가 없누!
// 매개변수: 게시물 시간
async function getPostDocId(date) { // 게시물의 docID 찾기
  const postDocIdList = await firestore().collection('Post')
  .where('date', '==', date).get();
  
  if(postDocIdList.empty) { // 게시물 비어있을때 널값 리턴
    console.log("해당하는 게시물이 없습니다.");
    return;
  }

  const postDocId = [];
 
  postDocIdList.forEach(doc => { // 콘솔 출력문
    postDocId.push(doc.id);
  });

  return postDocId[0];
}

// 매개변수: 게시물 시간, 댓글 시간
async function getCommentsDocId({postDate, commentsDate}) { // 댓글의 docId를 가져오는 함수
  const postDocId = await getPostDocId(postDate); // 상위컬렉션인 Post의 docId를 가져옴

  const commentsDocIdList = await firestore().collection('Post').doc(postDocId).collection('Comments')
  .where('date', '==', commentsDate).get();
  
  if(commentsDocIdList.empty) { // 댓글이 비어있을때 널값 리턴
    console.log("해당하는 댓글이 없습니다.");
    return;
  }
  
  const commentsDocId = [];
  
  commentsDocIdList.forEach(doc => { // 콘솔 출력문
    commentsDocId.push(doc.id);
  });
  return commentsDocId[0];
}

export {getUserDocId, getPostDocId, getCommentsDocId}