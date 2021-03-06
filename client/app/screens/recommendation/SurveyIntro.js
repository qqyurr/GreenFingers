import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  PickerIOSComponent,
  Button,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  StyleProvider,
  Icon,
} from 'native-base';

import {ThemeProvider} from 'styled-components';
import theme from '../../assets/theme/index';
import {SurveyButton, SurveyButtonText} from '../../assets/theme/surveystyles';

// for redux texting
import {useSelector, useDispatch} from 'react-redux';
import {tempAddPlant, tempResponse} from '../../components/auth/mockdata';
import {
  addPlant,
  updatePlant,
  updatePlantNickname,
  updatePlantLastDate,
} from '../../reducers/plantReducer';
import {
  updateProfileNickname,
  updateProfileImage,
  setProfile,
} from '../../reducers/profileReducer';
//mbti redux
import {setMBTI, setAnswer} from '../../reducers/surveyReducer';

import {mbtiQuestions} from '../../api/recommendation';

import LottieView from 'lottie-react-native';

export function SurveyintroScreen({navigation}) {
  const dispatch = useDispatch();
  const setMBTIs = mbti => dispatch(setMBTI(mbti));

  const saveMBTI = () => {
    setMBTIs(mockMBTI);
  };

  useEffect(async () => {
    const mbtis = await mbtiQuestions();
    setMBTIs(mbtis.data);
  }, []);
  // redux testing
  // const dispatch = useDispatch();
  // const addUserPlant = plant => dispatch(addPlant(plant));
  // const updateUserPlant = (pid, plant) => dispatch(updatePlant(pid, plant));
  // const updatePlantNN = (pid, nickname) =>
  //   dispatch(updatePlantNickname(pid, nickname));
  // const updatePlantWaterDate = (pid, lastdate) =>
  //   dispatch(updatePlantLastDate(pid, lastdate));
  // const {userPlants, userProfile} = useSelector(state => ({
  //   userPlants: state.plantReducer.userPlants,
  //   userProfile: state.profileReducer,
  // }));
  // const updateProfileNN = nickname => dispatch(updateProfileNickname(nickname));
  // const updateProfileImg = image => dispatch(updateProfileImage(image));
  // const setUserProfile = profile => dispatch(setProfile(profile));
  // useEffect(() => {
  //   console.log('redux profile', userProfile);
  //   setUserProfile(tempResponse);
  //   console.log('redux profile add', userProfile);
  // });
  //redux testing over

  return (
    <Container style={styles.container}>
      <View style={styles.titlecontainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.titletext}>?????????</Text>
          <Text style={styles.titletext2}> GREEN-MBTI </Text>
          <Text style={styles.titletext}>??? ????????????????</Text>
        </View>
        <Text style={styles.titletext}>
          ???????????? ????????? ?????? ????????? ?????????????????????.
        </Text>
      </View>
      <View style={styles.contentcontainer}>
        {/* <Image
          source={require('../../assets/images/11-removebg-preview.png')}
          style={styles.contentimg}
        /> */}
        <LottieView
          source={require('../../assets/animation/dandelion.json')}
          autoPlay
          loop
          style={
            ({
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            },
            styles.contentimg)
          }
        />
        <Text style={styles.contentdesc}>
          ??? ???????????? ???????????? ???????????? ?????? ???????????? ???????????? ???????????? ?????????
          ?????? ????????? ???????????? ?????? ???????????????.
        </Text>
        <Text style={styles.contentdesc2}>
          ????????? ??????????????? ????????? ?????? ????????? ??????????????????.
        </Text>
        <View style={styles.contentinfo}>
          <View style={styles.infoleft}>
            <Icon style={{color: '#29582C'}} type="FontAwesome" name="pencil" />
            <Text style={{color: '#29582C', marginTop: 7}}> ?????? 12??????</Text>
          </View>
          <View style={styles.inforight}>
            <Icon
              style={{color: '#29582C'}}
              type="Ionicons"
              name="alarm-outline"
            />
            <Text style={{color: '#29582C', marginTop: 7}}> ??? 5??? ??????</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <ThemeProvider theme={theme}>
          <SurveyButton
            onPress={() => navigation.navigate('Surveyquestion', {id: 1})}>
            <SurveyButtonText style={{fontWeight: 'bold', fontSize: 15}}>
              ??????
            </SurveyButtonText>
          </SurveyButton>
        </ThemeProvider>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  titlecontainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingBottom: 25,
    alignItems: 'center',
  },

  contentcontainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  titletext: {
    fontWeight: '600',
    fontSize: 15,
    // paddingVertical: 10,
  },
  titletext2: {
    fontWeight: '700',
    fontSize: 16,
    // paddingVertical: 10,
    color: '#29582C',
  },
  contentimg: {
    // flex: 4,
    height: 200,
    width: 150,
    // alignSelf: 'stretch',
    paddingVertical: 5,
  },
  contentdesc: {
    marginTop: 30,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 20,
    fontSize: 13,
    color: 'rgba(0,0,0,0.5)',
  },
  contentdesc2: {
    textAlign: 'left',
    alignSelf: 'center',
    lineHeight: 20,
    fontSize: 13,
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
  },
  contentinfo: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  infoleft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 10,
  },
  inforight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
  },
});
