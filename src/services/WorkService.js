import { db } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllWorkExperiences = callback => {
	return onSnapshot(collection(db, "work_experience"), querySnapshot => {
		const docs = querySnapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id
		}));

		callback(docs);
	});
};
