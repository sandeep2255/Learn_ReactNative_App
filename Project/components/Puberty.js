import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/me.png';

const Puberty =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image source={image} style={styles.strech}/>
                 <Text style={styles.heading}>PUBERTY</Text>
                <Text style={styles.discription}>
                Puberty is the process of physical changes through which a child's body matures into an adult 
                body capable of sexual reproduction. It is initiated by hormonal signals from the brain 
                to the gonads: the ovaries in a girl, the testes in a boy. In response to the signals, 
                the gonads produce hormones that stimulate libido and the growth, function, and 
                transformation of the brain, bones, muscle, blood, skin, hair, breasts, and sex organs. 
                Physical growth—height and weight—accelerates in the first half of puberty and 
                is completed when an adult body has been developed. Before puberty, the external sex 
                organs, known as primary sexual characteristics, are sex characteristics that distinguish
                 boys and girls. Puberty leads to sexual dimorphism through the development of the 
                 secondary sex characteristics, which further distinguish the sexes.
                 </Text>

                 <Text style={styles.heading}>MENSTRUATION</Text>

                <Text style={styles.discription}>
                Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle. 
                Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, 
                or womb, sheds its lining. The menstrual blood is partly blood and partly tissue 
                from inside the uterus. It passes out of the body through the vagina.
                Periods usually start between age 11 and 14 and continue until menopause at about age 51.
                They usually last from three to five days. Besides bleeding from the vagina, you may have:
                </Text>
                <Text style={styles.discription}>
                 -> Abdominal or pelvic cramping pain
                </Text>
                <Text style={styles.discription}>
                 -> Lower back pain
                </Text>
                <Text style={styles.discription}>
                 -> Bloating and sore breasts
                </Text>
                <Text style={styles.discription}>
                 -> Food cravings
                </Text>
                <Text style={styles.discription}>
                 -> Mood swings and irritability
                </Text>
                <Text style={styles.discription}>
                 -> Headache and fatigue
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
        width:500,
        height:400,
    }

});

export default Puberty;