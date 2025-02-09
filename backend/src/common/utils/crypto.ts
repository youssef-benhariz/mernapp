import bycrypt from 'bcrypt';
export const hashValue = async (value:string, saltRounds:number = 10) =>
    await bycrypt.hash(value,saltRounds);
export const compareValue = async (value:string,hashedValue:string) =>
    await bycrypt.compare(value,hashedValue);
