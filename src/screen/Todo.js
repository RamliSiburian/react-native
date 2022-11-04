import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Dates from '../../modals/Date-picker';


export default function Todo({ navigation }) {
    let [service, setService] = React.useState("");
    const [date, setDate] = React.useState();
    const [showDate, setShowDate] = React.useState(false);

    function cek() {
        setShowDate(true)
        // alert(showDate)
    }

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
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.HStack
                    marginTop={3}
                    space={3}
                    style={styles.hstack}>
                    <NB.Button
                        bg={"cyan.100"}
                        onPress={cek}>
                        <NB.Text>{date ? date.toDateString() : "Select date"}</NB.Text>
                        <Dates isOpen={showDate} setIsOpen={setShowDate} date={date} setDate={setDate} />
                    </NB.Button>
                    <NB.Select
                        w={20}
                        bg={"cyan.100"}
                        borderRadius={5}
                        selectedValue={service} placeholder="Category"
                        onValueChange={itemValue => setService(itemValue)}>
                        <NB.Select.Item label="Study" value="study" />
                        <NB.Select.Item label="Homework" value="homework" />
                        <NB.Select.Item label="Workout" value="workout" />
                    </NB.Select>
                    <NB.Select
                        w={20}
                        bg={"cyan.100"}
                        borderRadius={5}
                        placeholder="Choose Service"
                    >
                        <NB.Select.Item label="status" value="" />
                        <NB.Select.Item label="Backend Development" value="backend" />
                    </NB.Select>
                </NB.HStack>
            </NB.FormControl>
            <NB.ScrollView
                showsVerticalScrollIndicator={false}
                marginTop={10}
            >
                <NB.Box
                    bg={"lightBlue.300"}
                    padding={3}
                    borderRadius={5}>
                    <NB.Pressable style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => navigation.navigate("DetailList")}>
                        <NB.VStack width={"75%"}>
                            <NB.Text fontWeight={"bold"} fontSize={"xl"}>Study - Golang</NB.Text>
                            <NB.Text>
                                Learn golang to improve fundamentals and familiarize with coding
                            </NB.Text>
                            <NB.Text marginTop={3}>
                                <Ionicons name="calendar-outline"> 19 july 2022</Ionicons>
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
                            >Study</NB.Text>
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
                <NB.Box
                    bg={"lightBlue.300"}
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <NB.VStack width={"75%"} >
                        <NB.Text fontWeight={"bold"} fontSize={"xl"}>Homework - Mathenatics</NB.Text>
                        <NB.Text>
                            Do homework math probability
                        </NB.Text>
                        <NB.Text marginTop={3}>
                            <Ionicons name="calendar-outline"> 19 july 2022</Ionicons>
                        </NB.Text>
                    </NB.VStack>
                    <NB.VStack alignItems="center" width={"25%"}>
                        <NB.Text
                            width={"100%"}
                            bg={"red.300"}
                            color={"white"}
                            textAlign={"center"}
                            borderRadius={5}
                            p={2}
                        >Home work</NB.Text>
                        <Ionicons name="checkmark-circle"
                            marginTop={5}
                            size={60}
                            color={"green"}
                        ></Ionicons>
                    </NB.VStack>
                </NB.Box>
                <NB.Box
                    bg={"#FFE3E1"}
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <NB.VStack width={"75%"}>
                        <NB.Text fontWeight={"bold"} fontSize={"xl"}>Study - HTML</NB.Text>
                        <NB.Text>
                            Learn html to improve fundamentals and familiarize with coding
                        </NB.Text>
                        <NB.Text marginTop={3}>
                            <Ionicons name="calendar-outline"> 19 july 2022</Ionicons>
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
                        >Study</NB.Text>
                        <Ionicons name="checkmark-circle"
                            marginTop={5}
                            size={60}
                            color={"green"}
                        ></Ionicons>
                    </NB.VStack>
                </NB.Box>
                <NB.Box
                    bg={"#F2F5C8"}
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <NB.VStack width={"75%"}>
                        <NB.Text fontWeight={"bold"} fontSize={"xl"}>Study - Javascript</NB.Text>
                        <NB.Text>
                            Learn Javascript to improve fundamentals and familiarize with coding
                        </NB.Text>
                        <NB.Text marginTop={3}>
                            <Ionicons name="calendar-outline"> 19 july 2022</Ionicons>
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
                        >Study</NB.Text>
                        <NB.Text
                            marginTop={3}
                            width={50}
                            height={50}
                            bg={"grey"}
                            borderRadius={100}
                        ></NB.Text>
                    </NB.VStack>
                </NB.Box>
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