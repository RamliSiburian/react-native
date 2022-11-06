import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
// import Dates from '../../modals/Date-picker';
import { API } from '../../config/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";


export default function Todo({ navigation }) {
    let [service, setService] = React.useState("");
    const [date, setDate] = React.useState();
    const [showDate, setShowDate] = React.useState(false);
    const [list, setList] = React.useState([]);
    const isFocused = useIsFocused()

    function cek() {
        setShowDate(true)
        // alert(showDate)
    }

    const getList = async () => {
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

            const response = await API.get('/list', config)
            setList(response.data);
            console.log(response.data);
        } catch (error) {

        }
    }
    React.useEffect(() => {
        if (isFocused) {
            getList()
        }
    }, [isFocused])


    const _dataListRender = ({ item }) => {
        return (
            <NB.Box
                bg={"lightBlue.400"}
                marginBottom={3}
                padding={3}
                borderRadius={5}>
                <NB.Pressable style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => navigation.navigate("DetailList")}>
                    <NB.VStack width={"75%"}>
                        <NB.Text fontWeight={"bold"} fontSize={"xl"}>{item.name}</NB.Text>
                        <NB.Text>{item.desc}</NB.Text>
                        <NB.Text marginTop={3}>
                            <Ionicons name="calendar-outline"> {item.date}</Ionicons>
                        </NB.Text>
                    </NB.VStack>
                    <NB.VStack width={"25%"} alignItems="center">
                        <NB.Text
                            width={"100%"}
                            bg={"blue.500"}
                            color={"white"}
                            textAlign={"center"}
                            borderRadius={5}
                            p={2}
                        >{item.category}</NB.Text>
                        <NB.Text
                            marginTop={3}
                            width={50}
                            height={50}
                            bg={"grey"}
                            borderRadius={100}
                        ></NB.Text>
                    </NB.VStack>
                </NB.Pressable>
            </NB.Box>
        );
    };

    return (
        <NB.Box style={styles.container}>
            <NB.Flex direction="row" marginTop={7} style={styles.profile}>
                <NB.VStack>
                    <NB.Text fontSize={"3xl"} fontWeight={"bold"} >Hi Ramli</NB.Text>
                    <NB.Text color={"red.500"} fontSize={"sm"} >200 List</NB.Text>
                </NB.VStack>
                <NB.VStack>
                    <NB.Image
                        source={{ uri: "https://res.cloudinary.com/dhtuf2uie/image/upload/v1667405133/taskreactnative/profile_xzd7zf.png" }}
                        alt="Todo" width={75} height={75} resizeMode="cover"
                    />
                </NB.VStack>
            </NB.Flex>
            <NB.FormControl>
                <NB.InputGroup marginTop={10} >
                    <NB.Input p={2} placeholder="Search List..." variant="underlined"
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5} />
                </NB.InputGroup>
                <NB.HStack
                    marginTop={3}
                    space={3}
                    style={styles.hstack}>
                    <NB.Button
                        bg={"cyan.100"}
                        onPress={cek}>
                        <NB.Text>{date ? date.toDateString() : "Select date"}</NB.Text>
                        {/* <Dates isOpen={showDate} setIsOpen={setShowDate} date={date} setDate={setDate} /> */}
                    </NB.Button>
                    <NB.Select
                        w={20}
                        bg={"cyan.100"}
                        borderRadius={5}
                        placeholder="Category" >
                        <NB.Select.Item label="Study" value="study" />
                        <NB.Select.Item label="Homework" value="homework" />
                        <NB.Select.Item label="Workout" value="workout" />
                    </NB.Select>
                    <NB.Select
                        w={20}
                        bg={"cyan.100"}
                        borderRadius={5}
                        placeholder="Choose Service" >
                        <NB.Select.Item label="status" value="" />
                        <NB.Select.Item label="Backend Development" value="backend" />
                    </NB.Select>
                </NB.HStack>
            </NB.FormControl>
            <NB.ScrollView
                marginTop={10}
                showsVerticalScrollIndicator={false}
            >
                <NB.FlatList
                    data={list}
                    renderItem={_dataListRender}
                    keyExtractor={(item) => item} />
            </NB.ScrollView>
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
    profile: {
        justifyContent: "space-between",
    },
    hstack: {
        justifyContent: "space-between",
    },
    hstackchild: {
        width: "30%"
    },

})