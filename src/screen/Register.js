import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { API } from '../../config/Api';

export default function Register({ navigation }) {
    const [form, setForm] = React.useState({
        email: '',
        firstName: '',
        password: '',
    });

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleOnSubmit = async () => {
        try {
            const response = await API.post("/auth/register", form)
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    return ( 
        <NB.Box style={styles.container}>
            <NB.Image
                marginTop={10}
                source={{ uri: "https://res.cloudinary.com/dhtuf2uie/image/upload/v1667405134/taskreactnative/Login_icon_mk45rm.png" }}
                alt="Login image" width={300} height={300} resizeMode="cover"
            />
            <NB.Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                marginTop={5}
            >Register</NB.Text>
            <NB.FormControl>
                <NB.InputGroup marginTop={6} marginBottom={3}>
                    <NB.Input p={2} placeholder="email" variant="underlined"
                        value={form.email}
                        onChangeText={(value) => handleOnChange('email', value)}
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.InputGroup marginBottom={3}>
                    <NB.Input p={2} placeholder="Name" variant="underlined"
                        value={form.firstName}
                        onChangeText={(value) => handleOnChange('firstName', value)}
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.InputGroup marginBottom={3}>
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
                    bg={"red.400"}
                    marginTop={10}
                    onPress={handleOnSubmit}
                >
                    <NB.Text
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        letterSpacing={1}
                    >Register</NB.Text>
                </NB.Button>
                <NB.Text
                    marginTop={3}
                    textAlign={"center"}
                >Joined us before ?
                    <NB.Text
                        onPress={() => navigation.navigate("Login")}
                        color={"red.500"}
                        fontWeight="bold"
                    > Login</NB.Text>
                </NB.Text>
            </NB.FormControl>
        </NB.Box >
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