import React, { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground, TouchableOpacity } from "react-native";
import { getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";
import bgImg from "../../images/AAAA.webp";
import bgImg2 from "../../images/skull2.png";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    setLoading(true);
      const id = await getDeckId(); 
      setLoading(false);
    navigation.navigate("Game", {
      deckId: id,
    });
  };

  return (
    <ImageBackground
      source={bgImg2}
      style={styles.container}
      imageStyle={{ resizeMode: "contain", transform: [{ scale: 1.5 }] }}
    >
      <Text style={{color:'white', fontSize: 30}}> JACK THE RIPPER{"\n"}</Text>
                
      <Text style={{color:'white', fontSize: 15}}> Jack o Estripador está a solta! Você caminha pelas ruas de Londres a noite na esperança de chegar em casa. Será que você irá cruzar com ele?  </Text>
      <View style={{ flex: 2, justifyContent: "center", alignItems:"center", paddingTop: "100%" }}>
        <TouchableOpacity 
                  style={{alignItems: 'center',
                          borderColor:'white',
                          borderWidth: 2,
                          borderRadius: 30,
                          width: 200,
                          }} 
                  
                  onPress={inciarPartida}>
                    <Text style={{color:'white', fontSize: 20}}> TESTE SUA SORTE! </Text>
                  </TouchableOpacity>
        {/* <Button title="Iniciar Partida" onPress={inciarPartida} /> */}
      </View>
    </ImageBackground>
  );
};

export default Home;
