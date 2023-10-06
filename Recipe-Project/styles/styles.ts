import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    deafultPage: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    buttonContainerP1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '150%',
      },
      
      buttonP1: {
        backgroundColor: '#2C3E50', // Darker shade of blue
        paddingVertical: 17, // Increased padding for bigger button
        paddingHorizontal: 30, // Increased padding for bigger button
        borderRadius: 15, // Slightly rounded corners
        elevation: 4, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
      
    buttonTextP1: {
        color: '#ECF0F1', // Light gray for better contrast against the darker button
        fontWeight: 'bold',
        fontSize: 15, // Slightly bigger font size
        textAlign: 'center',
    }
});