import { db } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllProjects = callback => {
	return onSnapshot(collection(db, "projects"), querySnapshot => {
		const docs = querySnapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id,
		}));

		callback(docs);
	});
};
