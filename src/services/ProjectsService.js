import { db, storage } from "../services/firebase-config";

export const getAllProjects = () => {
	const docs = [];
	db.collection("projects").onSnapshot(querySnapshot => {
		querySnapshot.forEach(doc => {
			docs.push({ ...doc.data(), id: doc.id });
			const cor = 1;
		});
	});
	return docs;
};
