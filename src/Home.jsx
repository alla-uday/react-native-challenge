import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {CatCallButton} from './CatCallButton';
import {PrevNextButtons} from './PrevNextButtons';
import {pallette} from './utils/colors';
import FullStory from '@fullstory/react-native';


// export type CatSoundNameType = 'meow' | 'sadMeow' | 'angryMeow' | 'kittenMeow';

export const Home = () => {
  const [soundName, setSoundName] = useState('meow');
  const [sound, setSound] = useState();

  console.log('soundName', soundName);

  FullStory.event('RN Challenge Session Captured', {
    name: 'Uday',
  });

  FullStory.getCurrentSessionURL().then(function(result) {
    const sessionUrl = result;
    console.log('sessionURL', result);

  });

  FullStory.onReady().then(function(result) {
    const replayStartUrl = result.replayStartUrl;
    const replayNowUrl = result.replayNowUrl;
    const sessionId = result.sessionId;
    console.log('replayStartUrl', replayStartUrl);
    console.log('replayNowUrl', replayNowUrl);
    console.log('sessionId', sessionId);
  });

  useEffect(() => {
    console.log('changing sound when soundName changes');
  }, [soundName]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: pallette.blue,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            paddingVertical: 10,
            color: 'white',
          }}>
          <Text>Kitty Paw</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 0.6,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CatCallButton sound={sound} />
      </View>
      <View style={{flex: 0.3, width: '100%'}}>
        <PrevNextButtons sound={soundName} setSoundName={setSoundName} />
      </View>
    </View>
  );
};
