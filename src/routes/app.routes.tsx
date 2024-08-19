import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { MealInfo } from '../screens/MealInfo'
import { MealStats } from '../screens/MealStats'
import { NewMeal } from '../screens/NewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="new"
                component={NewMeal}
            />

            <Screen 
                name="info"
                component={MealInfo}
            />

            <Screen 
                name="stats"
                component={MealStats}
            />
        </Navigator>
    )
}