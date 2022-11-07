import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { API } from '../../config/Api';
import Dates from '../../modals/Date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddList() {
    const [date, setDate] = React.useState();
    const [showDate, setShowDate] = React.useState(false);
    const [dataCategory, setdataCategory] = React.useState([]);
    const [list, setList] = React.useState({
        name: "",
        category: "",
        date: "",
        desc: "",
        status: "",
    });


    function cek() {
        setShowDate(true)
        // alert(showDate)
    }


    const getCategory = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const user_id = await AsyncStorage.getItem("user_id");
            // setList({
            //     user_id,
            //     status: "pending"
            // })
            if (token === null) {
                navigation.navigate("Login");
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };
            const response = await API.get('/category', config);
            setdataCategory(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    function handleChange(name, value) {
        setList({
            ...list,
            [name]: value,
        });
    }
    const handleSubmit = (async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            if (!token) {
                Navigation.navigate("LoginPage");
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
            console.log(config);
            const response = await API.post(`/list`, list, config);
            setList({
                name: "",
                category: "",
                date: "",
                desc: "",
                status: "",
            })
            alert(`list berhasil ditambahkan`);
        } catch (error) {
            // console.log(error);
            alert("Gagal mendaftar kategori");
        }
    });

    React.useEffect(() => {
        getCategory();
        if (date) {
            setList({
                ...list,
                date
            })
        }
    }, [date]);

    return (
        <NB.Box style={styles.container}>
            <NB.Text
                marginTop={10}
                fontSize={"2xl"}
                fontWeight={"bold"}
            >Add List</NB.Text>
            <NB.FormControl marginTop={5}>
                <NB.InputGroup>
                    <NB.Input
                        value={list.name}
                        onChangeText={(value) => handleChange("name", value)}
                        _light={{
                            placeholderTextColor: "trueGray.700",
                            bg: "cyan.100",
                            _focus: {
                                bg: "coolGray.100"
                            }
                        }}
                        p={2} placeholder="Name" variant="underlined"
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.InputGroup marginTop={3}>
                    <NB.Select
                        onValueChange={(value) => handleChange("category", value)}
                        _selectedItem={{
                            bg: "green.600",
                            endIcon: <NB.CheckIcon size={5} />,
                        }}
                        minWidth={"100%"}
                        bg={"cyan.100"}
                        borderRadius={5}
                        accessibilityLabel="Category" placeholder="Category">
                        {dataCategory?.map((item) => (
                            <NB.Select.Item label={item?.category} value={item?.category} />
                        ))}
                    </NB.Select>

                </NB.InputGroup>
                <NB.InputGroup marginTop={3}>
                    {/* <NB.Input
                        _light={{
                            placeholderTextColor: "trueGray.700",
                            bg: "cyan.100",
                            _focus: {
                                bg: "coolGray.100"
                            }
                        }}
                        p={2} placeholder="Choose Date" variant="underlined"
                        value={list.date}
                        onChangeText={(value) => handleChange("date", value)}
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    /> */}
                    <NB.Button
                        bg={"cyan.100"}
                        onPress={cek}>
                        <NB.Text>{date ? date.toDateString() : "Select date"}</NB.Text>
                        <Dates isOpen={showDate} setIsOpen={setShowDate} date={date} setDate={setDate} />
                    </NB.Button>
                </NB.InputGroup>
                <NB.TextArea
                    value={list.desc}
                    name="desc"
                    onChangeText={(value) => handleChange("desc", value)}
                    marginTop={3}
                    shadow={2} h={20}
                    placeholder="Text Area Placeholder"
                    width={"100%"}
                    _light={{
                        placeholderTextColor: "trueGray.700",
                        bg: "cyan.100",
                        _focus: {
                            bg: "coolGray.100"
                        }
                    }} />
                <NB.InputGroup
                    marginTop={3}
                >
                    <NB.Input
                        _light={{
                            placeholderTextColor: "trueGray.700",
                            bg: "cyan.100",
                            _focus: {
                                bg: "coolGray.100"
                            }
                        }}
                        p={2} placeholder="Status" variant="underlined"
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.Button
                    onPress={handleSubmit}
                    bg={"red.400"}
                    marginTop={10}
                >
                    <NB.Text
                        color={"white"}
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        letterSpacing={1}
                    >Add List</NB.Text>
                </NB.Button>
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