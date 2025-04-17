import { db } from "../lib/firebaseconfig";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";

type FormData = {
    nome: string,
    email: string,
    cpf: string,
    telefone?: string
}

const COLLECTION_NAME = "usuarios";

export const handleADD = async (data: FormData) => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
        console.log("Documento registrado com o ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Erro ao adicionar o documento: ", e);
        return null;
    }
}

export const handleSelectAll = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return data;
    } catch (e) {
        console.error("Erro ao buscar os documentos: ", e);
        return null;
    }
}

export const handleDelete = async (id: string) => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
        console.log("Documento excluído com o ID: ", id);
        return true;
    } catch (e) {
        console.error("Erro ao excluir o documento: ", e);
        return false;
    }
}

export const handleUpdate = async (id: string, data: FormData) => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, data);
        console.log("Documento atualizado com o ID: ", id);
        return true;
    } catch (e) {
        console.error("Erro ao atualizar o documento: ", e);
        return false;
    }
}
