import { db, storage } from "../services/firebase-config";

export const getAllEducations = () => {
	const docs = [];
	db.collection("educations").onSnapshot(querySnapshot => {
		querySnapshot.forEach(doc => {
			docs.push({ ...doc.data(), id: doc.id });
		});
	});
	return docs;
};
