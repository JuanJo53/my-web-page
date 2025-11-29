import { db, storage } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllEducations = () => {
	const docs = [];
	onSnapshot(collection(db, "educations"), querySnapshot => {
		querySnapshot.forEach(doc => {
			docs.push({ ...doc.data(), id: doc.id });
		});
	});
	return docs;
};
