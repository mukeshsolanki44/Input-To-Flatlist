import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';


const ToDo = () => {

    const [text, setInputText] = useState('');
    const [data, setData] = useState([]);

    const handleChangeText = (newText) => {
        setInputText(newText);
    };

    const handleAddData = () => {
        if (text.trim() !== '') {
            setData([...data, { key: data.length.toString(), text: text }]);
            setInputText('');
        }
    };

    
    const handleClearData = () => {
        setData([]); // Clears the data array
    };
    return (
        <View style={{ flex: 1, }}>


            <View style={{ alignItems: "center" }}>
                <TextInput

                    placeholder="Enter your text "
                    value={text}
                    onChangeText={handleChangeText}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        width: 300,
                        borderRadius: 10,
                        fontSize: 20,
                        marginTop: 20,

                    }}

                />


                <TouchableOpacity>
                    <Text style={{
                        padding: 10,
                        backgroundColor: '#ece',
                        width: 300,
                        textAlign: "center",
                        borderRadius: 10,
                        fontSize: 20,
                        marginTop: 10,
                        color: "#FFF"

                    }} onPress={handleAddData} >
                        ADD DATA
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{
                        padding: 10,
                        backgroundColor: '#FF5733',
                        width: 300,
                        textAlign: "center",
                        borderRadius: 10,
                        fontSize: 20,
                        marginTop: 10,
                        color: "#FFF"

                    }} onPress={handleClearData}>
                        CLEAR DATA
                    </Text>
                </TouchableOpacity>



            </View>

            <FlatList
                data={data}
                renderItem={({ item }) =>    <Text
                style={{
                    marginLeft: 35,
                    marginTop: 10,
                    fontSize: 20,
                    width: 295,
                    backgroundColor: "#cee",
                    padding: 4
                    , borderRadius: 5
                }}>
                {item.text}
            </Text>}
            />
                      
         
        </View>

    )
}

export default ToDo