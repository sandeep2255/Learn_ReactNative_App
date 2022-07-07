import react from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, Alert, Modal } from "react-native";
import image from "../assets/cancel.png"

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
const Menu = ({navigation}) => {
    const[visible, setVisible] = react.useState(false)
    return(
        <View style={styles.container}>
            <Modalpopup visible={visible}>
                <View style={{alignItems:'center'}}> 
                    <Text style={styles.textel}>Contact Us</Text>
                    <Text style={styles.textel}>Dr. Robin</Text>
                    <Text style={styles.textel}>+91 9874561230</Text>
                    <View style={styles.okbutton}>
                        <TouchableOpacity onPress={()=> setVisible(false)}>
                            <Text style={styles.oktext}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalpopup>
            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonname}>
                    Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={()=> navigation.navigate('Form')}>
                    <Text style={styles.buttonname}>
                    Booking
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={()=> navigation.navigate('')}>
                    <Text style={styles.buttonname}>
                    Hearing Doubts
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={ () => setVisible(true) } >
                    <Text style={styles.buttonname}>
                    Contact Us
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingTop:250,
        },
        buttonNew:{
            backgroundColor: 'green',
            marginBottom: 20,
            marginTop:20,
            width: 250,
            alignSelf: 'center',
            height:40,
            borderRadius:10,
        },
        buttonname:{
            color:'white',
            paddingTop: 5,
            alignSelf:'center',
            fontWeight:'bold',
            fontSize:20,
            width:170,
            textAlign:'center',
            textShadowColor:'black',
            textShadowOffset:{width:3,height:3},
            textShadowRadius: 10,
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
        header:{
            width:'100%',
            height:40,
            alignItems:"flex-start",
        },
        im:{
            height:30,
            width:30,
        },
        textel:{
            fontStyle:'italic',
            fontSize:18,
            fontWeight:'bold',
            paddingBottom:20,
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
        }
    });
export default Menu
