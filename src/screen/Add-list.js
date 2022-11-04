import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';

export default function AddList() {
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
                        minWidth={"100%"}
                        bg={"cyan.100"}
                        borderRadius={5}
                        accessibilityLabel="Category" placeholder="Category">
                        <NB.Select.Item label="Study" value="study" />
                        <NB.Select.Item label="Homework" value="homework" />
                        <NB.Select.Item label="workout" value="workout" />
                    </NB.Select>
                </NB.InputGroup>
                <NB.InputGroup marginTop={3}>
                    <NB.Input
                        _light={{
                            placeholderTextColor: "trueGray.700",
                            bg: "cyan.100",
                            _focus: {
                                bg: "coolGray.100"
                            }
                        }}
                        p={2} placeholder="Choose Date" variant="underlined"
                        type="date"
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.TextArea
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
                    }} />;
                <NB.Button
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