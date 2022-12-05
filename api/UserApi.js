import firestore from '@react-native-firebase/firestore';
import { getUserDocId } from './LogicApi';

// 매개변수: google이메일
async function authUser(email) {
  const authToken = await firestore().collection('User').where('email', '==', email).get();

  if (authToken.empty) {
    return true; // 이미 등록된 이메일이라면 true 반환
  }

  return false; // 아니면 false 반환
}

// 매개변수: 구글 auth, 유저ID
async function createUser(userId, email) {
  //유저ID를 기반으로 유저 생성
  await firestore().collection('User').add({
    // auth와 합칠 때 유일성을 보장하는 값으로 구글이메일 쓸 예정!
    id: userId,
    email: email, // auth로 저장된 이메일 넣기
  });
}

async function findMyInfoByEmail(email) {
  const temp = [];
  const result = [];

  const myInfo = await firestore().collection('User').where('email', '==', email).get();

  myInfo.forEach((doc) => {
    result.push(doc);
  });

  const fetchCommentsAndImages = async (userId) => {
    return {
      followingList: await findFollowingById(userId),
      followerList: await findFollowerById(userId),
    };
  };

  const fetchResult = async () => {
    for (const index of temp) {
      let user = index.data();

      await fetchCommentsAndImages(user.id).then(({ followingList, followerList }) => {
        user = { ...user, followingList, followerList };
        result.push(user);
      });
    }
  };

  return fetchResult().then(() => result);
}

// 매개변수: 유저ID
async function findUserById(userId) {
  // 유저ID로 유저 찾기
  const temp = [];
  const result = [];

  const user = await firestore().collection('User').where('id', '==', userId).get();

  if (user.empty) {
    console.log('해당하는 유저가 없습니다.');
    return [];
  }

  user.forEach((doc) => {
    temp.push(doc);
  });

  const fetchCommentsAndImages = async (userId) => {
    return {
      followingList: await findFollowingById(userId),
      followerList: await findFollowerById(userId),
    };
  };

  const fetchResult = async () => {
    for (const index of temp) {
      let user = index.data();

      await fetchCommentsAndImages(user.id).then(({ followingList, followerList }) => {
        user = { ...user, followingList, followerList };
        result.push(user);
      });
    }
  };

  return fetchResult().then(() => result);
}

// 매개변수: 나의ID, 상대방ID
async function addFollowing(myId, yourId) {
  //내 유저ID와 상대방의 유저ID를 받아 팔로우, 팔로잉 추가
  const myFollowing = await getUserDocId(myId); // 내 문서ID
  const yourFollower = await getUserDocId(yourId); // 상대방 문서ID

  await firestore().collection('User').doc(myFollowing).collection('following').add({
    following: yourId,
  });

  await firestore().collection('User').doc(yourFollower).collection('follower').add({
    follower: myId,
  });
}

// 매개변수: 유저ID
async function findFollowingById(userId) {
  // 유저ID를 기반으로 팔로잉 찾기
  const result = [];

  const userDocId = await getUserDocId(userId); // 유저 DocId가 필요하므로 호출

  const following = await firestore()
    .collection('User')
    .doc(userDocId)
    .collection('following')
    .get(); // 하위 컬렉션인 팔로잉 접근

  if (following.empty) {
    // 비어있을때 출력문
    console.log('해당하는 유저가 없습니다.');
    return [];
  }

  following.forEach((doc) => {
    // 배열에 넣기
    result.push(doc.data());
  });

  return result;
}

// 매개변수: 유저ID
async function findFollowerById(userId) {
  // 유저ID를 기반으로 팔로워 찾기
  const result = [];

  const userDocId = await getUserDocId(userId); // 유저 DocId가 필요하므로 호출

  const follower = await firestore().collection('User').doc(userDocId).collection('follower').get(); // 하위 컬렉션인 팔로워 접근

  if (follower.empty) {
    // 비어있을 때 출력문
    console.log('해당하는 유저가 없습니다.');
    return [];
  }

  follower.forEach((doc) => {
    // 배열에 넣기
    result.push(doc.data());
  });

  return result;
}

// 이슈!: 작성하다가 생각난 건데 굳이 팔로잉/팔로워를 찾을때 문서를 읽는게 맞는 것인가??
// 문서를 읽기보단 팔로워와 팔로잉의 개수를 필드로 저장하고 있는 방식이 더 좋은것 같다.

// 팔로워 팔로잉 집계함수
// 매개변수: 유저ID
async function countFollowing(userId) {
  // 팔로잉 몇 명 인지 찾는 함수
  const followingCount = await findFollowingById(userId);

  return followingCount.size;
}

// 매개변수: 유저ID
async function countFollower(userId) {
  // 팔로워가 몇 명인지 찾는 함수
  const followerCount = await findFollowerById(userId);

  return followerCount.size;
}

// 매개변수: 나의 유저ID, 상대방 유저ID
async function deleteFollowing(myId, yourId) {
  // 내 팔로잉 삭제
  const myFollowing = await getUserDocId(myId); // 내 문서ID
  const yourFollower = await getUserDocId(yourId); // 상대방 문서ID

  await firestore()
    .collection('User')
    .doc(myFollowing) // 나의 팔로잉에서 상대방 삭제
    .collection('following')
    .doc(yourFollower)
    .delete();

  await firestore()
    .collection('User')
    .doc(yourFollower) // 상대방의 팔로워에서 나 삭제
    .collection('follower')
    .doc(myFollowing)
    .delete();
}

// 매개변수: 나의 유저ID, 상대방 유저ID
async function deleteFollower(myId, yourId) {
  // 내 팔로워 삭제
  const myFollower = await getUserDocId(myId); // 내 문서ID
  const yourFollowing = await getUserDocId(yourId); // 상대방 문서ID

  await firestore()
    .collection('User')
    .doc(myFollower) // 나의 팔로워에서 상대방 삭제
    .collection('follower')
    .doc(yourFollowing)
    .delete();

  await firestore()
    .collection('User')
    .doc(yourFollowing) // 상대방의 팔로잉에서 나 삭제
    .collection('following')
    .doc(myFollower)
    .delete();
}

// 매개변수: 유저ID
async function duplicationId(userId) {
  // 아이디 중복을 검사하는 함수
  const user = await findUserById(userId);

  let token = true;

  if (user === null) {
    token = false;
  }

  return token;
}

export {
  authUser,
  createUser,
  findMyInfoByEmail,
  findUserById,
  addFollowing,
  findFollowingById,
  findFollowerById,
  countFollowing,
  countFollower,
  deleteFollowing,
  deleteFollower,
  duplicationId,
};
