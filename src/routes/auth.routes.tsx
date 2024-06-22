import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator } = createNativeStackNavigator()

export function AuthRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <></>
        </Navigator>
    )
}