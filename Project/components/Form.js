import react from "react";
import { useState } from "react";
import database from "../firebase";
import image from "../assets/success.png"
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Alert, Modal, KeyboardAvoidingView,TextInput, SafeAreaView, ScrollView } from "react-native";
const Modalpopup =({visible, children})=>{
    const[showModal,setshowModal] = react.useState(visible);
    react.useEffect(()=>{
        toggleModel()
    },[visible]);
    const toggleModel = () =>{
        if(visible){
            setshowModal(true);
        }else{
            setshowModal(false);
        }
    }
    return <Modal transparent visible={showModal}>
        <View style={styles.modalb}>
            <View style={styles.modalc}>{children}</View>
        </View>
    </Modal>
};


const Form =({navigation}) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const Push =()=>{
        database.ref("Booking").push({
            name:name,
            age:age,
            date:date,
            time:time,
        }).catch(alert);
    }
    const[visible, setVisible] = react.useState(false)
    return(
        <ScrollView style={styles.scroll}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
            <Modalpopup visible={visible}>
                <View style={{alignItems:'center'}}> 
                    <Image source={image} style={styles.image1}/>
                    <Text style={styles.textel}>Booking Confirmed</Text>
                    <View style={styles.okbutton}>
                        <TouchableOpacity onPress={()=> {setVisible(false), navigation.navigate('Home')}}>
                            <Text style={styles.oktext}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalpopup>
                <View style={styles.inputContainter}>
                <TextInput
                placeholder="Name"
                value={name}
                onChangeText={text =>setName(text)}
                styles={styles.input}
                />

                </View>
                <View style={styles.inputContainter}>
                <TextInput
                placeholder="Age"
                value={age}
                onChangeText={text =>setAge(text)}
                styles={styles.input}
                />
                </View>

                <View style={styles.inputContainter}>
                <TextInput
                placeholder="Booking Date"
                value={date}
                onChangeText={text =>setDate(text)}
                styles={styles.input}
                />
                </View>

                <View style={styles.inputContainter}>
                <TextInput
                placeholder="Time"
                value={time}
                onChangeText={text =>setTime(text)}
                styles={styles.input}
                />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={ () => {Push(), setVisible(true)} }
                        styles={styles.button}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,    
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainter:{
        width: '70%',
        borderWidth:2,
        marginBottom:10,
        borderRadius:5,
        borderColor:'green',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        width:80,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        backgroundColor:'green',
        borderRadius:8,
  
      },
      button:{
        backgroundColor:'blue',
        width:'100%',
        padding: 15,
        borderRadius: 10,
        alignItems:'center'
      },
      buttonText:{
         color:'white',
         fontWeight:'bold',
         fontSize:18,
  
      },
      buttonOutline:{
        backgroundColor: 'white',
        marginTop:5,
        borderColor:'blue',
        borderWidth:2,
  
      },
      buttonOutlineText:{
        color:'blue',
        fontWeight:'700',
        fontSize: 16,
  
      },
      scroll:{
        paddingTop:'70%',
      },
      modalc:{
        width:'80%',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation: 20,
    },
    modalb: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
    },
    textel:{
        fontStyle:'italic',
        fontSize:18,
        fontWeight:'bold',
        paddingBottom:20,
        color:'black',
        paddingTop:20,
    },
    okbutton:{
        borderWidth:2,
        borderColor:'grey',
        width:50,
        height:50,
        borderRadius:8,
    },
    oktext:{
        fontWeight:'bold',
        alignSelf:'center',
        paddingTop: 7,
        fontSize:20,
    },
    image1:{
        alignSelf:'center',
        width:50,
        height:50,
    }

})

export default Form