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
    navigation.navigate("Game", {
      deckId: idDeck,
    });
  };

  return (
    <ImageBackground
      source={bgImg2}
      style={styles.container}
      imageStyle={{ resizeMode: "contain", transform: [{ scale: 1.5 }] }}
    >
      <Text style={{color:'white', fontSize: 30}}> JACK THE BETRAYER{"\n"}</Text>
                
      <Text style={{color:'white', fontSize: 15}}> Há um traidor entre nós! Depois de iniciar a partida, clique no botão e puxe 4 cartas, se uma delas for um valete de espadas você perde o jogo. Mas se em 3 tentativas o valete de espadas não for puxado, a vitoria é sua! </Text>
      <View style={{ flex: 2, justifyContent: "center", alignItems:"center", paddingTop: "100%" }}>
        <TouchableOpacity 
                  style={{alignItems: 'center',
                          borderColor:'white',
                          borderWidth: 2,
                          borderRadius: 30,
                          width: 150,
                          }} 
                  
                  onPress={inciarPartida}>
                    <Text style={{color:'white', fontSize: 20}}> Iniciar Partida </Text>
                  </TouchableOpacity>
        {/* <Button title="Iniciar Partida" onPress={inciarPartida} /> */}
      </View>
    </ImageBackground>
  );
};

export default Home;
