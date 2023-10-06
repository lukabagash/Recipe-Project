import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    deafultPage: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },

    spacerP1: {
        flex: 0.95, // This will take up 75% of the screen height
    },
    
    buttonContainerP1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Ensures the container takes the full width
    },

    buttonP1: {
        backgroundColor: '#2C3E50',
        paddingVertical: 17,
        paddingHorizontal: 30,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
      
    buttonTextP1: {
        color: '#ECF0F1',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    }
});
