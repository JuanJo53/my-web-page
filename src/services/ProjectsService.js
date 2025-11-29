import { db, storage } from "../services/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

export const getAllProjects = () => {
	const docs = [];
	onSnapshot(collection(db, "projects"), querySnapshot => {
		querySnapshot.forEach(doc => {
			docs.push({ ...doc.data(), id: doc.id });
		});
	});
	return docs;
};
