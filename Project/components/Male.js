import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/m.jpg';

const Male =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image source={image} style={styles.strech}/>
                <Text style={styles.discription}>
                The following is an overview of the male reproductive anatomy:</Text>
                <Text style={styles.heading}>SCORTUM</Text>

                <Text style={styles.discription}> 
                The bag of skin that holds and helps to protect the testicles. 
                The testicles make sperm and, to do this, the temperature of the testicles needs to be cooler than the inside of the body. 
                This is why the scrotum is located outside of the body.</Text>

                <Text style={styles.heading}>TESTES(testicles)</Text>

                <Text style={styles.discription}>
                The testes are 2 small organs that are found inside the scrotum.
                The testes are responsible for making sperm and are also involved in producing 
                a hormone called testosterone. Testosterone is an important hormone during male 
                development and maturation for developing muscles, deepening the voice, 
                and growing body hair.
                </Text>

                 <Text style={styles.heading}>EPIDIDYMUS</Text>

                <Text style={styles.discription}>
                A long tube that is located near each testicle. 
                The epididymis is the tube which moves the sperm from the testicles.
                </Text>

                <Text style={styles.heading}>VAS DEFERENSE</Text>

                <Text style={styles.discription}>
                This is a tube in which the sperm is stored and it carries the sperm out of the scrotal sac.
                The vas deferens is between the epididymis and the urethra and connects these together.
                </Text>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:40,
    },
    newtaskitem:{
        backgroundColor: 'red',
        paddingTop: 10,
        alignSelf:'center',
        width:300,
        paddingBottom: 20,
        borderRadius: 10,
        marginTop:20,
        marginBottom:20,
        justifyContent:'space-evenly',
    },
    discription:{
        alignContent:'center',
        fontSize: 20,
        marginBottom: 10,
        textAlign:'justify',
    },
    ScrollView: {
        marginHorizontal: 10,
    },
    heading:{
        fontWeight:'bold',
        fontSize: 20,
        marginBottom: 10,
        color:'red',
    },
    strech:{
        alignSelf:'center',
        borderRadius:30,
        width:300,
        height:400,
    }

});

export default Male;