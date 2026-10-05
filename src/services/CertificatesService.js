import { db } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllCertificates = callback => {
	return onSnapshot(collection(db, "certifications"), querySnapshot => {
		const docs = querySnapshot.docs.map(doc => ({
			...doc.data(),
			id: doc.id
		}));

		if (callback) {
			callback(docs);
		}
	});
};
