import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    deafultPage: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        
    },

    spacerP1: {
        flex: 0.30, // This will take up 90% of the screen height
    },

    spacerP2: {
        flex: 0.25, // This will take up 90% of the screen height
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
    },

    titleTextP1: {
        fontSize: 24, // Reduced font size for the title
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8, // Slightly reduced space between the title and the description
        color: '#2C3E50', // Darker shade of blue for a professional look
        textShadowColor: 'rgba(0, 0, 0, 0.1)', // Subtle text shadow for depth
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    
    descriptionTextP1: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 18,
        marginLeft: '15%',  // 15% space from the left
        marginRight: '15%', // 15% space from the right
        color: '#34495E',   // Slightly darker shade for the description
    },

    headerContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 20, // Added margin to push down the content
    },

    backButtonContainer: {
      alignSelf: 'flex-start',
    },

    searchContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },

    searchInput: {
        height: 45,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 22.5,
        width: '90%',
        backgroundColor: '#F5F5F5',
        fontSize: 16,
    },

    flatListContent: {
        paddingLeft: '7%',
    },

    listItem: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 15,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width: '92%',
    },
    
      
});
