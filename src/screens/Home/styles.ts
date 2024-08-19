import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 32px;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    margin: 24px 18px;
    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
    border-radius: 8px;
`