import React, {useState, useEffect} from 'react';

import {Avatar, Container, ImageWrap, TouchWrap} from '.';
import {Colors} from './constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {H1, P, H2} from './element';

import {AppIcons} from '../helper/images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from './fontSize';

import {RouteContext} from './route_context';

import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

export const DrawerMenu = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    console.warn('hhh working');
  }, []);

  return (
    <Container backgroundColor={'white'} height={100}>
      <Container
        height={8}
        width={89}
        direction={'row'}
        verticalAlignment={'center'}
        paddingHorizontal={5}
        horizontalAlignment={'space-between'}
        marginTop={5}>
        <ImageWrap
          source={AppIcons.logo}
          height={20}
          width={40}
          fit={'contain'}
        />
      </Container>

      <TouchWrap onPress={() => props.navigation.navigate('Profile')}>
        <Container height={5} direction={'row'} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.pie}
              height={6}
              width={6}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Overview
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <Container
        width={60}
        marginTop={2.5}
        marginLeft={5}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        borderBottomWidth={0.8}
        borderColor={'#E6EBEC'}></Container>
      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={2} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.inspect}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Inspection
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.notification}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Notifications
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.data}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Maintenance
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.card}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Payment Wallet
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.chart}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              History
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.exit}
              height={5}
              width={5}
              fit={'contain'}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appBlack} size={Fonts.semi}>
              Log out
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <Container
        height={12}
        width={50}
        marginLeft={5}
        marginTop={17}
        direction={'row'}
        verticalAlignment={'center'}>
        <ImageWrap
          source={AppIcons.person}
          height={18}
          width={18}
          fit={'contain'}
        />

        <Container marginLeft={3}>
          <H1 size={Fonts.big} color={Colors.appBlack}>
            Faith Auto’s
          </H1>
          <P size={Fonts.semi} color={'#999999'}>
            Auto Centre
          </P>
        </Container>
      </Container>
    </Container>
  );
};
