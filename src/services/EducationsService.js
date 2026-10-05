import { db } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllEducations = callback => {
	return onSnapshot(collection(db, "educations"), querySnapshot => {
		const docs = querySnapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id,
		}));

		if (callback) {
			callback(docs);
		}
	});
};
