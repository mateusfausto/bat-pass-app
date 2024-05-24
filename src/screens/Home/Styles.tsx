import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#131313',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logoContainer: {
      flexDirection: 'column',
      borderColor: '#ffbf00',
      borderWidth:1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 24,
      paddingBottom: 8,
      backgroundColor: '#131313'
    },

    inputContainer:{
      width:'80%',
      flexDirection:'column',
      alignItems:'center',
    }
    
});


export default styles