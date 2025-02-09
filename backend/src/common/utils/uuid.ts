import {v4 as uuidv4} from 'uuid';
import crypto from 'crypto';
export function generateUniqueCode(){
    return crypto.createHash('sha256').update(uuidv4()).digest('hex').substring(0,25);
};