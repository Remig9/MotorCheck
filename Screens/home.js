import React, {useState, useEffect} from 'react';
import {Container, ImageWrap} from '../helper/index';
import {Colors} from '../helper/constants';
import {AppIcons} from '../helper/images';
import Card1 from '../helper/Card1';
import Card2 from '../helper/Card2';
import {useNavigation} from '@react-navigation/native';

import {
  H2,
  P,
  Space,
  H1,
  TextInputBox,
  Button,
  Scroll,
} from '../helper/element';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export const Home = props => {
  const navigation = useNavigation();

  return (
    <Container flex={1} backgroundColor={'#EEECF8'} paddingTop={2}>
      <ScrollView>
        <Container marginBottom={6}>
          <Container
            height={9}
            width={100}
            direction={'row'}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Container
                height={6}
                width={10}
                marginLeft={3}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <ImageWrap
                  source={AppIcons.menu}
                  height={7}
                  width={15}
                  fit={'contain'}
                />
              </Container>
            </TouchableOpacity>

            <TouchableOpacity>
              <Container
                height={6}
                width={10}
                marginRight={3}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <ImageWrap
                  source={AppIcons.user}
                  height={7}
                  width={15}
                  fit={'contain'}
                />
              </Container>
            </TouchableOpacity>
          </Container>

          <Container
            width={100}
            paddingRight={13}
            direction={'row'}
            marginLeft={5}
            verticalAlignment={'center'}>
            <Container verticalAlignment={'center'}>
              <H1 size={25} color={'#000000'}>
                Welcome Back,Imani 👋🏽
              </H1>
            </Container>
          </Container>
          <Container
            height={4}
            width={100}
            marginTop={1}
            paddingRight={36}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <P size={13} color={'#868697'}>
              It is a long established fact lorem.
            </P>
          </Container>
          <Container
            height={8}
            width={100}
            marginTop={2}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <TextInputBox
              height={6}
              width={89.5}
              placeholder={'Search lorem ipsum'}
              backgroundColor={'#EEEEEE'}
              borderRadius={5}
            />
          </Container>
          <Container
            height={8}
            width={100}
            marginTop={2}
            direction={'row'}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}>
            <Container
              height={5}
              width={40}
              marginLeft={4}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <H1 size={20} color={'#000000'}>
                Recent Checklist
              </H1>
            </Container>
            <Container
              height={5}
              width={17}
              marginRight={3}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <H1 size={13} color={'#53BED2'}>
                View all
              </H1>
            </Container>
          </Container>

          <Container>
            <Card1 />
          </Container>

          <Container marginTop={2}>
            <Card1 />
          </Container>

          <Container
            height={8}
            width={100}
            marginTop={2}
            direction={'row'}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}>
            <Container
              height={5}
              width={40}
              marginLeft={4}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <H1 size={20} color={'#000000'}>
                Recent Checklist
              </H1>
            </Container>
            <Container
              height={5}
              width={17}
              marginRight={3}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <H1 size={13} color={'#53BED2'}>
                View all
              </H1>
            </Container>
          </Container>

          <Container>
            <Card2 />
          </Container>

          <Container marginTop={2}>
            <Card2 />
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default Home;
