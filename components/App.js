/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const App = () => {

  const alertF = () => {
    var a = 0;
  }

  return (
    <View style={styles.container}>
        <View style={styles.headerContainerStyle}>
          <View style={styles.ContainerWelcomeTextStyle}>
            <Text style={styles.welcomeTextStyle} >Olá, Abno</Text> 
          </View>
          <View style={styles.buttonViewStyle}>
            <Image style={styles.viewStyle} source={ require( '../src/icons/no_visibility.png' ) } />
          </View>
          <View style={styles.buttonViewGear}>
            <Image style={styles.gearStyle} source={ require( '../src/icons/gear.png' ) } />
          </View>
        </View>
        <View style={styles.containerBody}>
          <View style={styles.creditCard}>
            <View style={styles.headerCardStyle}>
              <View style={styles.headerContainer}>
                <View>
                  <Image style={styles.cardImageStyle} source={ require( '../src/icons/cartao-de-credito.png' ) } />
                </View> 
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.textStyle}>Cartão de Crédito</Text>
                </View>
              </View>
            </View>
            <View style={styles.headerCardStyle}>
              <View style={styles.headerContainer}>
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.textFaturaStyle}>Fatura Atual</Text>
                </View>
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.valorFaturaStyle}>R$ 0,00</Text>
                </View>
              </View>
            </View>
            <View style={styles.valueLimitCardStyle}>
              <View  style={styles.cardTextStyle}>
                <Text style={styles.limitTextCad}>Limite disponível</Text>
              </View>
              <View  style={styles.cardTextStyle}>
                <Text style={styles.limitValueTextCad}>R$ 32.000,00</Text>
              </View>
            </View>
          </View>
          <View style={styles.balanceAvailable}>
            <View style={styles.headerCardStyle}>
              <View style={styles.headerContainer}>
                <View>
                  <Image style={styles.cardImageStyle} source={ require( '../src/icons/pilha-de-moedas.png' ) } />
                </View> 
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.textStyle}>Conta</Text>
                </View>
              </View>
              <View style={styles.headerContainer}>
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.textBalanceStyle}>Saldo disponível</Text>
                </View>
              </View>
              <View style={styles.headerContainer}>
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.textBalanceValueStyle}>R$ 17.850,46</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rewards}>
          <View style={styles.headerCardStyle}>
              <View style={styles.headerContainer}>
                <View>
                  <Image style={styles.rewardImageStyle} source={ require( '../src/icons/gift.png' ) } />
                </View> 
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.rewardsTextStyle}>Rewards</Text>
                </View>
              </View>
              <View style={styles.headerContainer}>
                <View  style={styles.cardTextStyle}>
                  <Text style={styles.rewardsTextDecStyle}>Pague contas com pontos que nunca expiram</Text>
                </View>
              </View>
              <View style={styles.rewardsButtonView}>
                <TouchableWithoutFeedback onPress={alertF()}>
                  <View style={styles.buttonRewards}>
                    <Text style={ styles.textButtonRewards }>CONHECER</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8a05be',
    flex:1,
  },
  headerContainerStyle: {
    backgroundColor: '#8a05be',
    width: '100%',
    height: '13%',
    flexDirection:'row',
  },
  ContainerWelcomeTextStyle:{
    width:150,
    height:95,
    flex:1,
    flexDirection:'row',
  },
  buttonViewStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#8e34bf',
    marginRight: '5%',
    marginTop: 25,
    alignItems: 'center',
  },
  buttonViewGear: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#8e34bf',
    marginRight: '5%',
    marginTop: 25,
    alignItems: 'center',
  },
  welcomeTextStyle: {
    fontSize: 25,
    fontFamily: 'Lato-Bold',
    marginLeft: '8%',
    marginTop: 35,
    color: 'white',
  },
  creditCard: {
    backgroundColor: 'white',
    width: '90%',
    height: 188,
    marginTop: 10,
    marginLeft: '5%',
    borderRadius: 5,
  },
  balanceAvailable: {
    backgroundColor: 'white',
    width: '90%',
    height: 155,
    marginTop:'6%',
    marginLeft: '5%',
    borderRadius: 5,
  },
  rewards: {
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    marginTop:'6%',
    marginLeft: '5%',
    borderRadius: 5,
  },
  gearStyle: {
    marginTop: '25%',
    width: 25,
    height: 25,
  },
  viewStyle: {
    marginTop: '25%',
    width: 30,
    height: 30,
  },
  headerCardStyle: {
    marginLeft: '7%',
    marginTop: '7%',
  },
  headerContainer: {
    flexDirection: 'row'
  },
  cardImageStyle: {
    width: 25,
    height: 25,
  },
  cardTextStyle: {
    marginLeft: 20, 
    marginTop: 12,
  },
  textStyle: {
    marginTop:-11,
    fontSize: 20,
    fontFamily: 'Lato-Light',
  },
  textFaturaStyle: {
    marginLeft: -20,
    marginTop:'-30%',
    fontSize: 15,
    fontFamily: 'Lato-Light',
  },
  valorFaturaStyle: {
    marginLeft: -100,
    marginTop:15,
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: '#1E90FF',
  },
  valueLimitCardStyle: {
    width: '93%',
    height: 40,
    marginLeft: '7%',
    flexDirection: 'row',
  },
  limitTextCad: {
    fontFamily: 'Lato-Bold',
    marginLeft: -20,
  },
  limitValueTextCad: {
    fontFamily: 'Lato-Black',
    marginLeft: -10,
    color: '#006400',
  },
  rewardImageStyle: {
    width: 50,
    height: 50,
  },
  rewardsTextStyle: {
    fontFamily: 'Lato-Light',
    fontSize: 25,
    color: '#8a05be',
  },
  textBalanceStyle: {
    marginLeft: -20,
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Lato-Light',
  },
  textBalanceValueStyle: {
    marginLeft: -20,
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: 'black',
  },
  rewardsTextDecStyle: {
    marginLeft: -20,
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'Lato-Light',
    color: 'black',
  },
  buttonRewards: {
    marginTop: 20,
    width:110,
    height:40,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: '#8a05be',
    borderTopColor: '#8a05be',
    borderRightColor: '#8a05be',
    borderLeftColor: '#8a05be',
  },
  rewardsButtonView: {
    alignItems: 'flex-start',
  },
  textButtonRewards: {
    marginTop: '10%',
    fontFamily: 'Lato-Bold',
    color: '#8a05be',
  }
});

export default App;
