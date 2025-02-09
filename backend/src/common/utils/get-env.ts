export const getEnv = (key: string, defaultValue:string = ""): string => {
    const value =process.env[key];
    if (value ===undefined){
        if (defaultValue){
            return defaultValue;
        }
        throw new Error(`Environment variable ${key} is missing`);
    };
    return value;
};