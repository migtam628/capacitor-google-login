declare global {
    interface PluginRegistry {
        GoogleLogin?: GoogleLoginPlugin;
    }
}
export interface GoogleLoginOptions {
    serverAppId: string;
    scopes: string[];
    web: {
        appId?: string;
        authorizationBaseUrl: string;
        redirectUrl: string;
        state?: string;
        stateDisabled?: boolean;
    };
    ios: {
        appId: string;
    };
}
export interface GoogleLoginResponse {
    code?: string;
    token?: string;
    state?: string;
}
export interface GoogleLoginPlugin {
    authenticate(options: GoogleLoginOptions): Promise<GoogleLoginResponse>;
}
