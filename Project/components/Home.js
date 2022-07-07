import react from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import image from "../assets/menu.png"
const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.discription}> SEX EDUCATION</Text>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Male')}>
                    <Text style={styles.buttonname}>
                        Male Anatomy
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Female')}>
                    <Text style={styles.buttonname}>
                        Female anatomy
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Puberty')}>
                    <Text style={styles.buttonname}>
                        Puberty & Menstruation
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Pregnancy')}>
                    <Text style={styles.buttonname}>
                        Pregnancy
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Abortion')}>
                    <Text style={styles.buttonname}>
                        Abortion
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Contraception')}>
                    <Text style={styles.buttonname}>
                        Contraception
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonNew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('STD')}>
                    <Text style={styles.buttonname}>
                        STD & HIV
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menunew}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Menu')}>
                    <Image source={image} style={styles.strech}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingTop:40,
        },
        tasksWrapper:{
            paddingTop: 10,
            paddingHorizontal: 20,
            paddingLeft: 20,
            paddingBottom:20,
        },
        discription:{
            fontSize: 32,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: 'red',
            textShadowColor:'grey',
            textShadowOffset:{width:3,height:3},
            textShadowRadius: 5,
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
            textShadowColor:'black',
            textShadowOffset:{width:3,height:3},
            textShadowRadius: 10,
        },
        menunew:{
            backgroundColor: 'green',
            marginBottom: 20,
            marginTop:20,
            width: 50,
            alignSelf: 'center',
            height:50,
            borderRadius:100,
        },
        strech:{
            alignSelf:'center',
            width:50,
            height:50,
        }
    
    });
export default HomeScreen
