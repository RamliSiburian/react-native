import React from "react";
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';



export default function Home({ navigation }) {
    return (
        <NB.Box style={styles.container}>
            <NB.Image
                source={{ uri: "https://res.cloudinary.com/dhtuf2uie/image/upload/v1667405133/taskreactnative/Home_icon_p5kztv.png" }} alt="Home image" width={350} height={350} resizeMode="cover"
            />
            <NB.Text
                fontSize="5xl"
                bold
                letterSpacing={1}
                textAlign="center"
                color={"#000000"}
            >Ways
                <NB.Text
                    color={"#B82020"}
                > To</NB.Text>
                <NB.Text
                    color={"#FF5555"}
                >DO</NB.Text>
            </NB.Text>
            <NB.Text textAlign={"center"} marginTop={15}>
                Write your activity and finish your activity. {'\n'}
                Fast, simple and Easy to Use
            </NB.Text>
            <NB.Button
                onPress={() => navigation.navigate("Login")}
                width={"100%"}
                colorScheme={"red"}
                marginTop={50}
            >
                <NB.Text
                    color={"#fff"}
                    fontWeight={"bold"}
                    fontSize={"xl"}
                    letterSpacing={1}
                >Login</NB.Text>
            </NB.Button>
            <NB.Button
                onPress={() => navigation.navigate("Register")}
                width={"100%"}
                bg={"#EAE3D2"}
                marginTop={3}
            >
                <NB.Text
                    fontWeight={"bold"}
                    fontSize={"xl"}
                    letterSpacing={1}
                >Register</NB.Text>
            </NB.Button>
        </NB.Box>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#31E1F7",
        width: "100%",
        height: "100%",
        padding: 25,
        alignItems: "center",
    },
})