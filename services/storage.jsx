import AsyncStorage from '@react-native-async-storage/async-storage';


export const save = async (key, value) => {
await AsyncStorage.setItem(key, JSON.stringify(value));
}


export const load = async (key) => {
const raw = await AsyncStorage.getItem(key);
return raw ? JSON.parse(raw) : null;
}