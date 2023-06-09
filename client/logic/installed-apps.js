import { InstalledApps } from 'react-native-launcher-kit';

export const getApps = async () => {
    try {
        return InstalledApps.getApps();
    }
    catch (error) {
        console.log(error);
    };
}

export const getSortedApps = async () => {
    try {
        return InstalledApps.getSortedApps();
    }
    catch (error) {
        console.log(error);
    };
}
