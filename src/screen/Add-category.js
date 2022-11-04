import * as React from 'react';
import * as NB from 'native-base';
import { StyleSheet } from 'react-native';

export default function AddCategory() {
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
                        width={"100%"}
                        fontSize={"sm"}
                        bg={"cyan.100"}
                        color={"black"}
                        borderRadius={5}
                    />
                </NB.InputGroup>
                <NB.Button
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