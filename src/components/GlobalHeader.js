import {Body, Left, Right, Header} from 'native-base';
// import { connect } from 'react-redux';
import React, {useContext, useEffect} from 'react';
import {Pic, Fonts, FontColor, ScreenSize, FontSize} from './theme';
import * as Icons from './icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const GlobalHeader = (props) => {
  useEffect(() => {
    // console.log('REFRESHED_GLOBAL_HEADER');
  }, []);

  // setInterval(() => dispatch(getLocation()), 1000);

  return (
    <Header
      // noLeft={props.noLeft == true ? true : false}
      androidStatusBarColor={FontColor.primary}
      style={{
        backgroundColor: FontColor.primary,
        height: ScreenSize.hp08,
        elevation: 0,
        // marginHorizontal: -10,
      }}>
      <Left
        style={
          {
            // height: '100%',
            // width: '100%',
            // flexDirection: 'row',
            // alignItems: 'center',
            // backgroundColor: 'red',
            // paddingLeft: 10,
          }
        }>
        {props.back && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Icons.AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
        )}
        {props.home && (
          <View
            // onPress={() => {
            //   props.navigation.goBack();
            // }}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              // alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Icons.FontAwesome name="home" size={25} color={'#fff'} />
          </View>
        )}
        {props.admin && (
          <View
            // onPress={() => {
            //   props.navigation.goBack();
            // }}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              // alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Icons.FontAwesome5 name="user-tie" size={25} color={'#fff'} />
          </View>
        )}
      </Left>

      <Body
        style={{
          flex: 3,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          // alignItems: 'center',
          // backgroundColor: 'green',
          paddingLeft: '2%',
        }}>
        {props.logo && (
          <View
            style={{
              // backgroundColor: 'red',
              height: 50,
              width: 50,
              marginTop: 20,
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              resizeMode="stretch"
              source={Pic.Logo}
            />
          </View>
        )}
        {props.customHead ? (
          props.customHead
        ) : (
          <View>
            <Text
              style={{
                textAlign: 'center',
                // fontFamily: Fonts.SemiBold,
                fontSize: FontSize.font3,
                // fontSize: props.fontSize ? props.fontSize : 17,
                color: '#fff',
                fontFamily: Fonts.SemiBold,
                paddingTop: '2%',
                // fontWeight: 'bold',
              }}>
              {props.headingText ? props.headingText : ''}
            </Text>
            {props.item && (
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 12,
                  // fontFamily: Fonts.Regular,
                }}>
                online
              </Text>
            )}
            {/* {props.itemWishList && (
              <Text
                style={{
                  color: 'gray',
                  textAlign: 'center',
                  fontSize: 12,
                  fontFamily: Fonts.Regular,
                }}>
                {user.length !== 0 ? `${items.length} items` : `0 items`}
              </Text>
            )} */}
          </View>
        )}
      </Body>

      <Right
        style={{
          flex: 1,
          height: '100%',
          // backgroundColor: '#fff',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.contacts && (
          <TouchableOpacity
            // onPress={() => props.navigation.navigate('Cart')}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              // paddingRight: 5,
              // backgroundColor: 'white',
              // paddingRight: 5,
              // flexDirection: 'row',
            }}>
            <Icons.FontAwesome
              name="clock-o"
              size={30}
              color={'#fff'}
              style={{position: 'absolute', zIndex: 9999, top: 13, right: 10}}
            />
            <Icons.FontAwesome
              name="send"
              size={20}
              color={'#fff'}
              style={{position: 'absolute'}}
            />
          </TouchableOpacity>
        )}

        {props.location && (
          <View
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', marginBottom: 5, fontSize: 15}}>
              X : {location.latitude}
            </Text>
            <Text style={{color: '#fff', fontSize: 15}}>
              Y : {location.longitude}
            </Text>
          </View>
        )}

        {props.drawerIcon && (
          <TouchableOpacity
            onPress={props.navigationDrawer}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              // paddingLeft: 5,
            }}>
            <Icons.Octicons name="three-bars" size={25} color={'#fff'} />
          </TouchableOpacity>
        )}

        {props.rightButton && (
          <TouchableOpacity
            onPress={props.rightButtonPress}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                // marginBottom: 5,
                fontSize: FontSize.font25,
              }}>
              {props.rightButtonText}
            </Text>
          </TouchableOpacity>
        )}
      </Right>
    </Header>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     iconNum: state.tokenReducer.iconNum,
//   };
// };

export default GlobalHeader;
