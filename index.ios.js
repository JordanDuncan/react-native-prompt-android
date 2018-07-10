import {
    AlertIOS
} from 'react-native';

function convertToIosTypes(moduleType) {
    switch (moduleType) {
        case 'default':
        return {
            type: 'plain-text',
            keyboardType: 'default'
        };

        case 'plain-text':
        return {
            type: 'plain-text',
            keyboardType: 'default'
        };

        case 'secure-text':
        return {
            type: 'secure-text',
            keyboardType: 'default'
        };

        case 'login-password':
        return {
            type: 'login-password',
            keyboardType: 'default'
        };

        case 'numeric':
        return {
            type: 'plain-text',
            keyboardType: 'numeric'
        };
        
        case 'email-address':
        return {
            type: 'plain-text',
            keyboardType: 'email-address'
        };

        case 'phone-pad':
        return {
            type: 'plain-text',
            keyboardType: 'phone-pad'
        };

        default:
        return {
            type: 'plain-text',
            keyboardType: 'default'
        }
    }
}

export default function prompt(
    title: ?string,
    message?: ?string,
    callbackOrButtons?: ?((text: string) => void) | Object,
    options?: Object
): void {
    let iosTypes = convertToIosTypes(options.type);
    AlertIOS.prompt(title, message, callbackOrButtons, iosTypes.type, options.defaultValue, iosTypes.keyboardType);
};
