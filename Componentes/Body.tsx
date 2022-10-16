import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Body = () => {
    return (

        <View style={styles.Container}>
            <View style={styles.Notification}>
                <AntDesign
                    style={styles.Icons}
                    name='enviromento'
                />
                <Text style={styles.Texto}>Nueva Guinea</Text>
                <AntDesign
                    name="down" style={styles.Down}
                />
                <AntDesign
                    name="bells"
                    style={styles.Icons}
                />
            </View>

            <View>
                <Image
                    source={require('../Imagenes/pronostico.png')}
                    style={styles.Imgpronostic}
                />

                <Text style={styles.Temperature}>28°</Text>
                <Text style={styles.Presipitation}>Precipitations</Text>
                <Text style={styles.Presipitation}>Max.:31° Min.:25°</Text>

                <View style={styles.Input}>
                    <View style={styles.NumIcons}>
                        <MaterialIcons
                            name="grain"
                            style={styles.InputsIcons}
                        />
                        <Text style={styles.InputsNum}>6%</Text>
                    </View>

                    <View style={styles.NumIcons}>
                        <Feather
                            name="thermometer"
                            style={styles.InputsIcons}
                        />
                        <Text style={styles.InputsNum}>90%</Text>
                    </View>

                    <View style={styles.NumIcons}>
                        <FontAwesome5
                            name="wind"
                            style={styles.InputsIcons}
                        />
                        <Text style={styles.InputsNum}>19 km/h</Text>
                    </View>
                </View>

                <View style={styles.Temp}>
                    <View style={styles.Presipitation1}>
                        <View style={styles.Grade}>

                            <View style={styles.IconsNum}>
                                <Text style={styles.NumTemp}>29°C</Text>
                                <FontAwesome5 name="cloud-sun" style={styles.iconboxend} />
                                <Text style={styles.NumTemp}>15.00</Text>
                            </View>

                            <View style={styles.IconsNum}>
                                <Text style={styles.NumTemp}>26°C</Text>
                                <FontAwesome5 name="cloud-sun" style={styles.iconboxend} />
                                <Text style={styles.NumTemp}>16.00</Text>
                            </View>

                            <View style={styles.IconsNum}>
                                <Text style={styles.NumTemp}>24°C</Text>
                                <FontAwesome5 name="cloud" style={styles.iconboxend} />
                                <Text style={styles.NumTemp}>17.00</Text>
                            </View>

                            <View style={styles.IconsNum}>
                                <Text style={styles.NumTemp}>23°C</Text>
                                <FontAwesome5 name="cloud-moon" style={styles.iconboxend} />
                                <Text style={styles.NumTemp}>18.00</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.Boxend}>
                    <Text style={styles.NextFore}>
                        Next Fore Cast free
                        <AntDesign name="calendar" style={styles.NextFore} />
                    </Text>

                    <View style={styles.Dates}>
                        <Text style={styles.Date}> Monday </Text>
                        <Entypo name="water" style={styles.Date} />
                        <Text style={styles.Date}>13°c 10c°</Text>
                    </View>

                    <View style={styles.Dates}>
                        <Text style={styles.Date}>Tuesday </Text>
                        <Feather name="cloud-lightning" style={styles.Date} />
                        <Text style={styles.Date}>17°c 12c°</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#1249AD",
        width: "110%",
        height: "100%",
        borderRadius: 20,
    },
    Imgpronostic: {
        width: 150,
        height: 150,
        left: 90,
    },
    Notification: {
        flexDirection: "row",
        width: "100%",
        paddingTop: 20,
        borderRadius: 50,
    },
    Icons: {
        color: "#ffff",
        paddingTop: 1,
        fontSize: 20,
        marginLeft: 30,
    },
    Down: {
        color: "#ffff",
        fontSize: 12,
        paddingTop: 9,
        marginLeft: 10,
    },
    Texto: {
        color: "#fff",
        paddingTop: 1,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    Temperature: {
        color: "#ffff",
        fontSize: 55,
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    Presipitation: {
        color: "#ffff",
        fontSize: 15,
        textAlign: "center",
        paddingTop: 1,
    },
    Input: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: "#0D3A89",
        width: "80%",
        height: 35,
        borderRadius: 15,
        marginLeft: 35,
    },
    InputsIcons: {
        color: 'white',
        fontSize: 20
    },
    InputsNum: {
        color: 'white',
        fontSize: 15,
    },
    NumIcons: {
        flexDirection: 'row',
        margin: 10,
    },
    Grade: {
        flexDirection: 'row',
    },
    Num: {
        color: "#FFFFFF",
        fontSize: 15,
        marginLeft: 40,
        marginTop: -22,
    },
    Temp: {
        marginTop: 20,
        marginLeft: 35,
        backgroundColor: "#0D3A89",
        width: "80%",
        height: 150,
        borderRadius: 10,
    },
    Presipitation1: {
        marginTop: 20,
        width: "80%",
        height: "50%",
        flexDirection: "row",
        borderRadius: 10,
    },
    NumTemp: {
        color: "#ffff",
        marginLeft: 15,
        marginTop: 15,
    },
    Boxend: {
        marginTop: 35,
        backgroundColor: "#0D3A89",
        width: "80%",
        height: 100,
        borderRadius: 10,
        marginLeft: 35,
    },
    IconsNum: {
        marginHorizontal: 15
    },
    NextFore: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: 'white',
    },
    Date: {
        marginLeft: 16,
        marginTop: 10,
        fontSize: 15,
        color: "#FFFFFF",
    },
    Dates: {
        flexDirection: 'row',
    },
    iconboxend: {
        fontSize: 25,
        color: "#FFFFFF",
        marginLeft: 17,
        marginTop: 7,
    },

});
