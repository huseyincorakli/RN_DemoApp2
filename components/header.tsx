import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const HeaderComponent: FC = (props) => {
  return (
     <View style={styles.container}>
     <TextInput cursorColor={'black'} style={styles.search}  placeholder='Search...' />
</View>
  );
};

const styles = StyleSheet.create({
     container: {
          padding:5,
         flex: 1,
         backgroundColor:'#e1e1e1'
       },
  search:{
     borderRadius:10,
     padding:5,
     fontSize:15,
     borderColor:'#232C33',
     backgroundColor:'#ffff',
     fontWeight:'bold'
  }
});

export default HeaderComponent;