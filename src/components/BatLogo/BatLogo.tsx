import React from 'react';
import { View, Text, Image} from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>        
        <Image
            style={styles.image}
            source={batLogo}     
        />
        <Text style={styles.title}>BAT PASS GENERATOR
        </Text>
    </>
  );
}