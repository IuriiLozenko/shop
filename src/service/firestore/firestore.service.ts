import { async } from '@firebase/util';
import { collection, getDocs, query } from 'firebase/firestore'
import { firestore } from '../..';
import { Product } from '../../slices/products.slice';
const firestoreServiceDef = () => {

    const getProducts = async () => {
        try {
            const collectionRef = collection(firestore, 'products')
            const q = query(collectionRef)
            const snapshots = await getDocs(q)
            const products = snapshots.docs.map(snap => ({
                ...snap.data(),
                firebaseId: snap.id
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const createMockData = async (products: Product[]) => {
        products.forEach(product => {

        })
    }

  return {

  };
};

export const firestoreService = firestoreServiceDef();
