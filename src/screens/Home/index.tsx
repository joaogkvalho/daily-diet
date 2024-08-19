import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Button, Container, Title } from "./styles";

export function Home() {
    const navigation = useNavigation()

    function handleCreateNewMeal() {
        navigation.navigate('new')
    }

    function handleMealInfo() {
        navigation.navigate('info')
    }

    
    function handleMealStats() {
        navigation.navigate('stats')
    }

    return (
        <Container>
            <Button onPress={handleMealStats}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    Meal stats
                </Text>
            </Button>

            <Title>
                Home
            </Title>

            <Button onPress={handleCreateNewMeal}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    New Meal
                </Text>
            </Button>

            <Button onPress={handleMealInfo}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    Meal info
                </Text>
            </Button>
        </Container>
    )
}