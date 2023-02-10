import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { ButtonClose } from '../components/ButtonClose';

let phrasesAvailable = [
  '"Siga os bons e aprenda com eles."',
  '"O bom-senso vale mais do que muito conhecimento."',
  '"O riso é a menor distância entre duas pessoas."',
  '"Deixe de lado as preocupações e seja feliz."',
  '"Realize o óbvio, pense no improvável e conquiste o impossível."',
  '"Acredite em milagre, mas não dependa deles."',
  '"A maior barreira para o sucesso é o medo do fracasso."',
];

export function Home() {
  const [img, setImg] = useState(require('../assets/biscoito.png'));
  const [phraseChosen, setPhraseChosen] = useState('');
  const [isBrokenCookie, setIsBrokenCookie] = useState(false);

  function handleBreakCookie() {
    const phraseDrawn =
      phrasesAvailable[Math.floor(Math.random() * phrasesAvailable.length)];

    setPhraseChosen(phraseDrawn);
    setIsBrokenCookie(true);
    setImg(require('../assets/biscoitoAberto.png'));
  }

  function handleResetCookie() {
    setPhraseChosen('');
    setIsBrokenCookie(false);
    setImg(require('../assets/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={img} style={styles.img} />

        <Text style={styles.phrase}>{phraseChosen}</Text>
      </View>

      <View style={styles.footer}>
        {!isBrokenCookie ? (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleBreakCookie}>
            <Text style={styles.buttonText}>Quebrar biscoito</Text>
          </TouchableOpacity>
        ) : (
          <ButtonClose onPress={handleResetCookie} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#292828',
  },
  main: {
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    width: 230,
    height: 230,
  },
  phrase: {
    fontSize: 20,
    color: '#F5FCFF',
    margin: 20,
    fontStyle: 'italic',
  },
  footer: {
    width: '70%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#dd7b22',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
