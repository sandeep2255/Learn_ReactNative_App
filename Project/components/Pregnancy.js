import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/pr.png';

const Pregnancy =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image source={image} style={styles.strech}/>

                 <Text style={styles.heading}>PREGNANCY</Text>

                <Text style={styles.discription}>
                pregnancy, process and series of changes that take place in a woman’s organs and tissues as a result of a developing fetus. 
                The entire process from fertilization to birth takes an average of 266–270 days, or about nine months.
                A new individual is created when the elements of a potent sperm merge with those of a fertile ovum, or egg. 
                Before this union both the spermatozoon (sperm) and the ovum have migrated for considerable distances in order to achieve their 
                union. A number of actively motile spermatozoa are deposited in the vagina, pass through the uterus, and invade the uterine 
                (fallopian) tube, where they surround the ovum. The ovum has arrived there after extrusion from its follicle, or capsule, 
                in the ovary. After it enters the tube, the ovum loses its outer layer of cells as a result of action by substances in the 
                spermatozoa and from the lining of the tubal wall. Loss of the outer layer of the ovum allows a number of spermatozoa to 
                penetrate the egg’s surface. Only one spermatozoon, however, normally becomes the fertilizing organism. Once it has entered 
                the substance of the ovum, the nuclear head of this spermatozoon separates from its tail. The tail gradually disappears, 
                but the head with its nucleus survives. As it travels toward the nucleus of the ovum (at this stage called the female 
                pronucleus), the head enlarges and becomes the male pronucleus. 
                The two pronuclei meet in the centre of the ovum, where their threadlike chromatin material organizes into chromosomes.
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
        width:400,
        height:300,
    }

});

export default Pregnancy;