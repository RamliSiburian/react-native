import React from "react";
import { Axios } from "axios";
import * as NB from 'native-base';
import { StyleSheet } from "react-native";
import { API } from "../../config/Api"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    // https://api.kontenbase.com/query/api/v1/54af6705-b5b4-4cc9-84a5-4c4228b0ece5/Users
    const [form, setForm] = React.useState("");

    function handleOnChange(name, value) {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnSubmit = async () => {
        try {

            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };
            const body = JSON.stringify(form);
            const response = await API.post("/auth/login", body, config);

            if (response) {
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem("user_id", response.data.user._id);
            }

            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                // alert(`Login berhasil`);
                navigation.navigate("Todo")
            }
        } catch (error) {
            // console.log(e);
            alert("Email atau password salah");
        }
    };


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
                            value={form.email}
                            onChangeText={(value) => handleOnChange('email', value)}
                            width={"100%"}
                            fontSize={"sm"}
                            bg={"cyan.100"}
                            color={"black"}
                            borderRadius={5}
                        />
                    </NB.InputGroup>
                    <NB.InputGroup>
                        <NB.Input p={2} placeholder="Password" variant="underlined"
                            value={form.password}
                            onChangeText={(value) => handleOnChange('password', value)}
                            type="password"
                            width={"100%"}
                            fontSize={"sm"}
                            bg={"cyan.100"}
                            color={"black"}
                            borderRadius={5}
                        />
                    </NB.InputGroup>
                    <NB.Button
                        onPress={handleOnSubmit}
                        // onPress={() => navigation.navigate("Todo")}
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