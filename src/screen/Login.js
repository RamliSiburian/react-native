import React from "react";
import * as NB from 'native-base';
import { StyleSheet } from "react-native";
import { API } from "../../config/Api"

export default function Login({ navigation }) {
    // https://api.kontenbase.com/query/api/v1/54af6705-b5b4-4cc9-84a5-4c4228b0ece5/Users

    const cekData = async () => {
        const response = await API.get("/users/");
        console.log(response);
    }

    return (
        <NB.Box style={styles.container}>
            <NB.Image
                marginTop={5}
                source={{ uri: "https://res.cloudinary.com/dhtuf2uie/image/upload/v1667405134/taskreactnative/Login_icon_mk45rm.png" }} alt="Login image" width={350} height={350} resizeMode="cover"
            />
            <NB.Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                marginTop={5}
            >Login</NB.Text>
            <NB.FormControl>
                <NB.Stack>
                    <NB.InputGroup
                        marginTop={6}
                        marginBottom={3}
                    >
                        <NB.Input p={2} placeholder="Email" variant="underlined"
                            width={"100%"}
                            fontSize={"sm"}
                            bg={"cyan.100"}
                            color={"black"}
                            borderRadius={5}
                        />
                    </NB.InputGroup>
                    <NB.InputGroup>
                        <NB.Input p={2} placeholder="Password" variant="underlined"
                            type="password"
                            width={"100%"}
                            fontSize={"sm"}
                            bg={"cyan.100"}
                            color={"black"}
                            borderRadius={5}
                        />
                    </NB.InputGroup>
                    <NB.Button
                        // onPress={() => navigation.navigate("Todo")}
                        onPress={cekData}
                        bg={"red.400"}
                        marginTop={10}
                    >
                        <NB.Text
                            fontSize={"xl"}
                            fontWeight={"bold"}
                            letterSpacing={1}
                        >Login</NB.Text>
                    </NB.Button>
                </NB.Stack>
                <NB.Text
                    marginTop={3}
                    textAlign={"center"}
                >New Users ?
                    <NB.Text
                        onPress={() => navigation.navigate("Register")}
                        color={"red.500"}
                        fontWeight="bold"
                    > Register</NB.Text>
                </NB.Text>
            </NB.FormControl>
        </NB.Box>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#31E1F7",
        width: "100%",
        height: "100%",
        padding: 25,
    },
})