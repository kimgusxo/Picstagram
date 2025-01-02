// 주의!
// 결과 실행을 위해 로그인 페이지에서 호출하게 프론트를 임시작성했으므로
// 모든 매개변수가 email, password로 되어있을텐데
// 이거 완성이 완료되면 전부 바꿀예정입니다.
// 또한 유저부분, 게시물부분, 댓글부분, 내부로직을위한부분을 따로 API로 나눌예정입니다.
// 일단은 댓글과 게시물의 pk를 임의로 index로 정했지만 Date값으로 변경할 예정

import firestore from "@react-native-firebase/firestore"

// 매개변수: 유저ID
async function findUserById(email) { // 유저ID로 유저 찾기
    const user = await firestore().collection('User')
    .where('id', '==', email).get();

    if(user.empty) { // 유저가 비어있을때 널값 리턴
      console.log("해당하는 유저가 없습니다.");
      return;
    }

    user.forEach(doc => { // 콘솔 출력문
      console.log(doc.id, '=>', doc.data());
    });

    return user;
}

// 매개변수: 유저ID
async function getUserDocId(email) { // 유저ID로 유저 문서 참조를 위해 문서 아이디 리턴
  const userDocIdList = await firestore().collection('User')
  .where('id', '==', email).get();

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

// 매개변수: 구글 auth, 유저ID
async function createUser(email) { //유저ID를 기반으로 유저 생성
  await firestore().collection('User').add({ // auth와 합칠 때 유일성을 보장하는 값으로 구글이메일 쓸 예정!
      id: email
      // auth로 이메일 넣기
  })
}

// 매개변수: 유저ID
async function findFollowingById(email) { // 유저ID를 기반으로 팔로잉 찾기
  const userDocId = await getUserDocId(email) // 유저 DocId가 필요하므로 호출

  const following = await firestore().collection('User')
  .doc(userDocId).collection('following').get(); // 하위 컬렉션인 팔로잉 접근

  if(following.empty) { // 비어있을때 출력문
    console.log("해당하는 유저가 없습니다.");
    return;
  }

  following.forEach(doc => { // 콘솔 출력문
    console.log(doc.id, '=>', doc.data());
  });

  return following;
}

// 매개변수: 유저ID
async function findFollowerById(email) { // 유저ID를 기반으로 팔로워 찾기
  const userDocId = await getUserDocId(email) // 유저 DocId가 필요하므로 호출

  const follower = await firestore().collection('User')
  .doc(userDocId).collection('follower').get(); // 하위 컬렉션인 팔로워 접근

  if(follower.empty) { // 비어있을 때 출력문
    console.log("해당하는 유저가 없습니다.");
    return;
  }

  follower.forEach(doc => { // 콘솔 출력문
    console.log(doc.id, '=>', doc.data());
  });

  return follower;
}

// 이슈!: 파이어베이스는 유일성필드를 지원하지 않는다.
// 따라서 검색을 통해 Time을 통해 unique한 값을 먹이는데 나노세컨드까지 겹칠때엔 어떻게 해야할지 모르겠습니다.
// 따라서 게시물과 댓글에 Date()를 통한 값을 유일성으로 생각하고 작성하겠습니다.

// 매개변수: 게시물 시간
async function deletePost(index) { // 게시물 삭제
  const postDocId = await getPostDocId(index); // 해당 상위컬렉션인 게시물의 docId 획득
  
  const commentsDocIdList = await firestore().collection('Post') // 해당 하위 컬렉션의 docId를 전부 획득
  .doc(postDocId).collection('Comments').get();

  commentsDocIdList.forEach(doc => { // 반복문으로 하위 컬렉션의 문서를 전부 삭제
    const commentsDocId = doc.id;
    deleteCommentsByDocId({postDocId, commentsDocId})
  })

  // 이슈!: 하위 컬렉션이 있는 문서의 경우 하위컬렉션의 모든 문서를 제거한 뒤
  // 삭제해야하므로 for문을 통해 하위컬렉션의 문서들을 전부 삭제해야한다.
  await firestore().collection('Post').doc(postDocId).delete(); // 하위 컬렉션이 사라진 상위 컬렉션 삭제
}

// 매개변수: 나의ID, 상대방ID
async function addFollowing({email, password}) { //내 유저ID와 상대방의 유저ID를 받아 팔로우, 팔로잉 추가
  const myFollowing = await getUserDocId(email) // 내 문서ID
  const yourFollower = await getUserDocId(password) // 상대방 문서ID

   await firestore().collection('User').doc(myFollowing).collection('following').add({
     following: password
   })

   await firestore().collection('User').doc(yourFollower).collection('follower').add({
     follower: email
   })
}

// 매개변수: 게시물 시간, 댓글 시간
async function getCommentsDocId({index1, index2}) { // 댓글의 docId를 가져오는 함수
  const postDocId = await getPostDocId(index1); // 상위컬렉션인 Post의 docId를 가져옴

  const commentsDocIdList = await firestore().collection('Post').doc(postDocId).collection('Comments')
  .where('date', '==', index2).get();

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

// 매개변수: 댓글 작성자, 댓글 내용
async function createComments({email, password}) { // 댓글 작성자와 댓글 내용을 넣어 댓글 생성
  const postDocId = await getPostDocId(index);

  await firestore().collection('Post').doc(postDocId).collection('Comments').add({
    commentWriter: email,
    commentContent: password,
    date: new Date(),
    type: true
  })
}

// 이슈!: 댓글도 유일성을 보장하는 필드가 없음!
// 매개변수: 게시물 시간, 댓글 시간
async function deleteComments({index1, index2}) {
  const postDocId = await getPostDocId(index1); // 해당 상위컬렉션인 게시물의 docId 획득
  const commentsDocId = await getCommentsDocId({index1, index2}); // 해당 하위컬렉션인 댓글의 docId 획득
  
  deleteCommentsByDocId({postDocId, commentsDocId});
}

// 게시물의 삭제를 위해 어쩔 수 없이 docId로 삭제하는 방향으로 작성
// 내부로직 함수
async function deleteCommentsByDocId({postDocId, commentsDocId}) {
  await firestore().collection('Post').doc(postDocId)
  .collection('Comments').doc(commentsDocId).delete();
}

// 매개변수: 유저ID
async function findPostList(email) { // 맨 처음 메인페이지에다가 게시물 출력함  
  const postList = [];

  // 0. 나의 게시물을 배열에 푸쉬
  const myPost = await findPostById(email)
  myPost.forEach(doc => {
    postList.push(doc)
  })
  
  // 1. 이메일로 following들을 받아옴
  const following = await findFollowingById(email)

  // 2. 팔로잉 리스트들의 아이디를 통해 게시물들을 받아옴
  for(const index of following) { // forEach는 await을 기다려주지 않아 for ...of문으로 대체했습니다.
    const post = await findPostById(index.following) // 1차 반복문에서 팔로잉을 받아온 뒤
    post.forEach(doc => { // 2차 반복문에서 팔로잉의 게시물을 전체 배열에 푸쉬
      postList.push(doc)
    })
  }

  // 3. temp배열에 있는 doc들을 전부 시간순으로 재정렬
  postList.sort(function compare(a, b) {
    return a.date - b.date
  });

  postList.forEach(doc => { // 콘솔 출력문
    console.log(doc.data())
  })

  // 4. 최종리스트를 10개씩 뽑아서 출력 --> 이 부분을 잘 모르겠음,,,
  // 이슈!: 이거는 값을 최대로 가져오게 되는데, 최적화를 위해 포인터를 설정하는 등의 작업이 필요할 듯 합니다.
  // start와 end로 뽑아오는 방식도 고려중,,,
  return postList;
}

// 매개변수: 유저ID
async function findPostById(email) { //유저ID로 게시물 찾기

  const postList = await firestore().collection('Post')
  .where('writer', '==', email).orderBy('date', 'desc').get() // 두 개 이상의 조건 사용 시 콘솔에서 복합색인 만들어야 함

  if(postList.empty) { // 게시물이 없을때 출력문
    console.log("해당하는 게시물이 없습니다.");
    return;
  }

  postList.forEach(doc => { // 콘솔 출력문
    console.log(doc.id, '=>', doc.data());
  });

  return postList;
}

//이슈!: 포스트부분의 유일성을 가지는 필드가 없누!
// 매개변수: 게시물 시간
async function getPostDocId(index) { // 게시물의 docID 찾기
  const postDocIdList = await firestore().collection('Post')
  .where('date', '==', index).get();

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

// 매개변수: 게시물 제목
async function findPostByTitle(email) { // 게시물 제목으로 게시물 찾기
  // limit부분을 start와 end로 바꿀 것
  const postList = await firestore().collection('Post')
  .where('title', '==', email).limit(10).get(); // 게시물 검색 시 사용함으로 10개씩 받아옴

  if(postList.empty) {
    console.log("해당하는 게시물이 없습니다.");
    return;
  }
  postList.forEach(doc => { // 콘솔 출력문
    console.log(doc.id, '=>', doc.data());
  });

  return postList;
}

// 매개변수: 게시물 제목, 게시물 내용, 게시물 작성자
async function createPost({email, password, writer}) { // 게시물 생성
  await firestore().collection('Post').add({
    content: password,
    date: new Date(), // 이건 내장함수로 처리가능하니 객체로 프론트에서 받는게 나을듯?? 아니다 걍 Date로 들가노 ㅋㅋ
    like: 0,
    range: "All",
    title: email,
    writer: writer
  })
  // 그룹이미지를 받으면 url만 추출해서 넣고 사진은 스토리지에 넣음
  // url을 추출해서 넣는게 아니라 스토리지에 박아넣고 url을 가져와서 입히는 건가??
  // 쨋든 그 작업을 상위 컬렉션의 필드가 채워진 후 넣는 식으로 작성함
}

// 이슈!: 작성하다가 생각난 건데 굳이 팔로잉/팔로워를 찾을때 문서를 읽는게 맞는 것인가??
// 문서를 읽기보단 팔로워와 팔로잉의 개수를 필드로 저장하고 있는 방식이 더 좋은것 같다.

// 팔로워 팔로잉 집계함수
// 매개변수: 유저ID
async function countFollowing(email) { // 팔로잉 몇 명 인지 찾는 함수
  const followingCount = await findFollowingById(email)

  console.log(followingCount.size)
}

// 매개변수: 유저ID
async function countFollower(email) { // 팔로워가 몇 명인지 찾는 함수 
  const followerCount = await findFollowerById(email)

  console.log(followerCount.size)
}

// 매개변수: 나의 유저ID, 상대방 유저ID
async function deleteFollowing({email, password}) { // 내 팔로잉 삭제
  const myFollowing = await getUserDocId(email) // 내 문서ID
  const yourFollower = await getUserDocId(password) // 상대방 문서ID

  await firestore().collection('User').doc(myFollowing) // 나의 팔로잉에서 상대방 삭제
  .collection('following').doc(yourFollower).delete();

  await firestore().collection('User').doc(yourFollower) // 상대방의 팔로워에서 나 삭제
  .collection('follower').doc(myFollowing).delete();
}

// 매개변수: 나의 유저ID, 상대방 유저ID
async function deleteFollower({email, password}) { // 내 팔로워 삭제
  const myFollower = await getUserDocId(email) // 내 문서ID
  const yourFollowing = await getUserDocId(password) // 상대방 문서ID

  await firestore().collection('User').doc(myFollower) // 나의 팔로워에서 상대방 삭제
  .collection('follower').doc(yourFollowing).delete();

  await firestore().collection('User').doc(yourFollowing) // 상대방의 팔로잉에서 나 삭제
  .collection('following').doc(myFollower).delete();
}

// 매개변수: 게시물 시간, 설정한 범위
async function postRangeUpdate(index, range) { // 게시물 범위를 업데이트하는 함수
  const postDocId = await getPostDocId(index);

  await firestore().collection('Post').doc(postDocId).update({
    range: range
  })
}

// 매개변수: 게시물 시간, 좋아요 토큰
async function likeUpdate({email, password}) { // 좋아요 받는 함수
  const postDocId = await getPostDocId(email)

  if(password == 'a') {
    await firestore().collection('Post').doc(postDocId).update({
      like: like+1
    })
  } else {
    await firestore().collection('Post').doc(postDocId).update({
      like: like-1
    })
  }
}

// 매개변수: 유저ID
async function duplicationId(email) { // 아이디 중복을 검사하는 함수
  const user = await findUserById(email);

  const token = true 

  if(user.empty) {
    token = false
  } 

  return token;
}

// 어차피 매개변수 두개받아서 프로필 검사하는데 그게 함수로 빼야하나???
// ---> 잘몰루!

// 매개변수: 리턴된 게시물, 나의Id
function isMyPost({post, myId}) { // 나의 게시물인지 확인하는 함수
  const myPost = [];

  post.forEach(el => {
    if(el.writer == myId) {
      myPost.push(true)
    } else {
      myPost.push(false)
    }
  })

  return myPost;
}

// 매개변수: 리턴된 댓글, 나의Id
function isMyComments({comments, myId}) { // 내가 쓴 댓글인지 확인하는 함수
  const myComments = [];

  comments.forEach(el => {
    if(el.writer == myId) {
      myComments.push(true)
    } else {
      myComments.push(false)
    }
  })

  return myComments;
}