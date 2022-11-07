import firestore from '@react-native-firebase/firestore';


const getAllUser = async () => {
    const users = await firestore().collection('Post').get();
    const user = await firestore().collection('Post').doc('f33G2pgPeORQcV26B8HL');

    console.log(user);

}
export { getAllUser };


