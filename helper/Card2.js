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
          direction="row"
          verticalAlignment={'center'}
          horizontalAlignment={'flex-start'}>
          <Container
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            borderRadius={4}
            borderWidth={0.8}
            borderColor={'#53BED2'}
            paddingVertical={0.4}
            paddingHorizontal={3}>
            <ImageWrap
              source={AppIcons.settings}
              height={8}
              width={10}
              fit={'contain'}
            />
          </Container>
          <Container marginLeft={4}>
            <H1 size={18} color={'#000000'}>
              Inspection
            </H1>

            <Container
              direction="row"
              verticalAlignment={'center'}
              horizontalAlignment={'flex-start'}>
              <Container width={50} marginTop={2}>
                <P size={16} color={'#555555'}>
                  Contrary to popular belief, Lorem Ipsum dior
                </P>
              </Container>

              <TouchableOpacity>
                <ImageWrap
                  source={AppIcons.right}
                  height={2}
                  width={7}
                  fit={'contain'}
                  marginLeft={2}
                />
              </TouchableOpacity>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Card1;
