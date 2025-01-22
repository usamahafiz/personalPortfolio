import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'


const UseFirestore = () => {
    const addMessage = async (values) =>{
        const { email , message } = values;
        try{
            await addDoc(collection (db , 'messages'),{
                email ,
                message,
                timestamp: new Date(),
            })
        }
        catch(error){
            console.log("Error occur while adding document" ,error);
        }

    }
  return { addMessage};
};

export default UseFirestore
