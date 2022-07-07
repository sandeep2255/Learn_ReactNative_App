import react from "react";
import { View, Text, StyleSheet,ScrollView, SafeAreaView, Image } from "react-native";
import { Button } from "react-native";
import image from '../assets/f.png';

const Female =  () => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <Image source={image} style={styles.strech}/>
                <Text style={styles.discription}>
                The female reproductive system is made up of
                 the internal and external sex organs that function in reproduction of new offspring.
                 In humans, the female reproductive system is immature at birth and develops to maturity 
                 at puberty to be able to produce gametes, and to carry a foetus to full term. 
                 The internal sex organs are the vagina, uterus, Fallopian tubes, and ovaries. 
                 The vagina allows for sexual intercourse and birth, and is connected to the uterus at the cervix. 
                 The uterus or womb accommodates the embryo which develops into the foetus. 
                 The uterus also produces secretions which help the transit of sperm to the Fallopian tubes, 
                 where sperm fertilize ova (egg cells) which are produced by the ovaries. 
                 The external sex organs are also known as the genitals and these are the organs of the vulva including the labia, 
                 clitoris, and vaginal opening.</Text>

                 <Text style={styles.heading}>VAGINA</Text>

                <Text style={styles.discription}>
                As mentioned above, the vagina is the canal that connects the vulva with the uterus. The opening to the vagina is part of the vulva.
                The vagina can vary in size, but the average length is about 2.5 to 3 inches. That said, it expands in length during arousal.
                It also contains special structures called Bartholin’s glands. These are two “pea-sizedTrusted Source” glands that sit on either 
                side of the vaginal opening. These glands are responsible for secreting lubrication to keep the vaginal tissues from becoming too dry.
                 </Text>

                 <Text style={styles.heading}>CERVIX</Text>

                <Text style={styles.discription}>
                The cervix is the lower portion of the uterus. It is a cylinder-shaped area 
                of tissue that separates the vagina from the rest of the uterus.
                During birth, the cervix dilates to allow the baby to move through the vagina.
                </Text>

                <Text style={styles.heading}>UTERUS</Text>

                <Text style={styles.discription}>
                The uterus is located in the middle of the pelvic cavity. This muscular sac will house the fetus during pregnancy.
                During a female’s monthly menstrual cycle, the lining of the uterus thickens with blood in preparation for the 
                release of an egg from one of the ovaries. This is to prepare a nourishing environment for a fetus if pregnancy occurs.
                If pregnancy does not occur, the uterine lining sheds. 
                This is called the menstrual period. It occurs every around 28 days, 
                though cycle length varies between females.
                The upper portion of the uterus is connected to the ovaries by the fallopian tubes.
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
        borderRadius:10,
        width:300,
        height:200,
    }

});

export default Female;