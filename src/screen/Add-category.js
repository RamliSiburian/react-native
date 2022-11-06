import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { API } from '../../config/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddCategory({ navigation }) {
    const [form, setForm] = React.useState({ category: "" });
    const [dataCategory, setdataCategory] = React.useState()

    const handleOnChange = (name, value) => {
        setForm({
            [name]: value,
        })
    }

    const handleOnSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                navigation.navigate("Login");
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
            const response = await API.post("/category", form, config)
            alert("insert data berhasil")
            setForm({ category: "" })
            getCategory()

        } catch (error) {
            console.log(error);
        }
    }

    const getCategory = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const user_id = await AsyncStorage.getItem('user_id');
            if (token === null) {
                navigation.navigate("Login")
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
            const response = await API.get('/category', config);
            setdataCategory(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getCategory()
    }, [])

    const _dataCategoryRender = ({ item }) => {
        return (
            <NB.View p={2} bg={"red.500"} color={"white"} rounded={10} minWidth={70} marginRight={3} marginBottom={3} style={styles.list}>
                <NB.Text bold style={{ color: "white" }}>
                    {item.category}</NB.Text>
            </NB.View>
        );
    };

    return (
        <NB.Box style={styles.container}>
            <NB.Text
                marginTop={10}
                fontSize={"2xl"}
                fontWeight={"bold"}
            >Add Category</NB.Text>
            <NB.FormControl marginTop={5}>
                <NB.InputGroup>
                    <NB.Input
                        _light={{
                            placeholderTextColor: "trueGray.700",
                            bg: "cyan.100",
                            _focus: {
                                bg: "coolGray.100"
                            }
                        }}
                        p={2} placeholder="Name" variant="underlined"
                        onChangeText={(value) => handleOnChange('category', value)}
                        value={form.category}
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.Button
                    onPress={handleOnSubmit}
                    bg={"red.400"}
                    marginTop={7}
                >
                    <NB.Text
                        color={"white"}
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        letterSpacing={1}
                    >Add Category</NB.Text>
                </NB.Button>
            </NB.FormControl>
            <NB.Text
                marginTop={10}
                fontSize={"2xl"}
                fontWeight={"bold"}
            >List Category</NB.Text>
            <NB.Box marginTop={5} style={styles.lists}>

                <NB.FlatList
                    numColumns={3}
                    data={dataCategory}
                    renderItem={_dataCategoryRender}
                    keyExtractor={(item) => item}
                />
            </NB.Box>
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
    list: {
        display: "flex",
        textAlign: "center",
        flexWrap: "wrap"
    },
    lists: {
        display: "flex",
        flexWrap: "wrap"
    }
})