import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailList() {
    return (
        <NB.Box style={styles.container} >
            <NB.VStack marginTop={10} bg={"lightBlue.300"} padding={3} borderRadius={5} >
                <NB.Box style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <NB.VStack width={"75%"}>
                        <NB.Text fontWeight={"bold"} fontSize={"2xl"}>Study - Golang</NB.Text>
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
                <NB.ScrollView marginTop={5} showsVerticalScrollIndicator={false}>
                    <NB.Text style={{ textAlign: "justify" }} >
                        Learn Golang to improve fundamentals and familiarize with coding. {'\n'} {'\n'}
                        Advantages of Go {'\n'}
                        Go has advantages over other languages, including:{'\n'} {'\n'}

                        Supports concurrency at the language level with fairly easy application {'\n'}
                        Supports data processing with multiple processors at the same time (parallel processing) {'\n'}
                        Have a garbage collector {'\n'}
                        The compilation process is very fast{'\n'}
                        It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code.{'\n'} {'\n'}
                        Listing Material :{'\n'}{'\n'}

                        Instalation {'\n'}
                        Setup Go Modules{'\n'}
                        Setup Gopath & Workspace{'\n'}
                        Go Command{'\n'}
                        Hello World{'\n'}
                        Variable{'\n'}
                        Tipe DataKonstanta{'\n'}
                        Operator{'\n'}
                        Condition{'\n'}
                        Loops{'\n'}
                    </NB.Text>
                    <NB.Text marginTop={3}>
                        <Ionicons name="calendar-outline"> 19 july 2022</Ionicons>
                    </NB.Text>
                </NB.ScrollView>
            </NB.VStack>
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