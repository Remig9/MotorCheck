import React, {useState, useEffect} from 'react';
import {Container, ImageWrap} from '../helper/index';
import {Colors} from '../helper/constants';
import {AppIcons} from '../helper/images';
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

export const Card1 = props => {
  return (
    <Container verticalAlignment={'center'} horizontalAlignment={'center'}>
      <Container
        backgroundColor={'#FFFFFF'}
        borderRadius={5}
        width={90}
        padding={4}>
        <Container
          direction={'row'}
          verticalAlignment={'center'}
          horizontalAlignment={'space-between'}>
          <H1 size={15} color={'#000000'}>
            Mr. Joseph Agunbiade
          </H1>
          <TouchableOpacity>
            <Container
              backgroundColor={'rgba(220, 44, 16, 0.06)'}
              borderRadius={5}
              padding={1}>
              <P color={'#DC2C10'} size={12}>
                Pending
              </P>
            </Container>
          </TouchableOpacity>
        </Container>
        <Container
          borderBottomWidth={0.5}
          paddingBottom={2}
          borderColor={'#EEEEEE'}
          marginBottom={2}>
          <P size={13} color={'#999999'}>
            Benz 2014 EClass
          </P>
        </Container>

        <Container
          direction="row"
          verticalAlignment={'center'}
          horizontalAlignment={'flex-start'}>
          <ImageWrap
            source={AppIcons.time}
            height={5}
            width={5}
            fit={'contain'}
            marginRight={4}
          />
          <P size={13} color={'#000000'}>
            14 July, 4:00pm - 7:00pm
          </P>
        </Container>
      </Container>
    </Container>
  );
};

export default Card1;
