/**
 * Secrets for `react-native-code-push`
 */
export interface PluginConfigType {
    ios: {
        CodePushServerURL?: string;
        CodePushDeploymentKey: string;
        CodePushPublicKey?: string;
    };
    android: {
        CodePushServerURL?: string;
        CodePushDeploymentKey: string;
        CodePushPublicKey?: string;
    };
}
