import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    defaultPage: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor: '#FFFAEE',
    },
    backgroundColor: {
        backgroundColor: '#FFFAEE', // Replace with your desired color
      },
    spacerP1: {
        flex: 0.25, // This will take up 90% of the screen height
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
        backgroundColor: '#ECA457',
        paddingVertical: 17,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },

    buttonP2: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
      
    buttonTextP1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },

    titleTextP1: {
        fontSize: 24, // Reduced font size for the title
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8, // Slightly reduced space between the title and the description
        color: '#84251E', // Darker shade of blue for a professional look
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
        color: '#691914',   // Slightly darker shade for the description
    },

    headerContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        position: 'relative'
    },

    backButtonContainer: {
        alignSelf: 'flex-start',
        paddingLeft: 20
    },

    searchContainer: {
        width: '95%',
        alignItems: 'center',
        marginTop: 10,
        margin: 12,
        flexDirection: 'row',
        color: '#FFFFFF'
    },

    searchInput: {
        height: 45,
        borderColor: '#84251E',
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 22.5,
        width: '90%',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#84251E'
    },

    flatListContent: {
        paddingLeft: '3%',
        borderRadius: 18,
    },

    listItem: {
        alignItems: 'center',
        padding: 10,
        paddingLeft: 12,
        marginTop: 7,
        marginRight: 7,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#84251E',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#84251E',
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow
        shadowOpacity: 0.1, // The opacity of the shadow
        shadowRadius: 4, // The blur radius of the shadow
        elevation: 3,
        width: '88%',
        color: '#84251E',
        backgroundColor: '#FFFFFF',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    box: {
        width: '97.8%', // approx for 2 boxes per row
        marginVertical: 5,
        margin: 3,
        backgroundColor: '#FFFDF7',
        borderRadius: 10,
        borderWidth: 1, // Set the border width
        borderColor: '#FFFDF7', // Set the border color
        elevation: 5, // This adds shadow on Android
        shadowColor: '#691914', // This adds shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow position for iOS
        shadowOpacity: 0.25, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow blur radius for iOS
    },
    likes: {
        fontSize: 14,
        color: '#691914', // A neutral color for the text
        marginTop: 4, // Spacing from the title to the likes
        fontWeight: 'bold', // Make it bold to stand out a little
        paddingLeft: 0,
        paddingBottom: 10
      },
    image: {
        width: 100,
        height: 112,
        flex: 2, // Adjust this value as needed to allocate space for the image
        resizeMode: 'stretch',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10

    },
    title: {
        paddingTop: 13,
        color: '#691914',
        fontWeight: 'bold',
        flex: 3,
        fontSize: 17,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,  // Or any other height you prefer
    },
    headerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 18,
        color: '#333',  // Or any other color you prefer
    },
    containerInstruction: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
      recipeContainer: {
        borderRadius: 10,
        backgroundColor: '#FFFDF7',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      },
      recipeImage: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        marginBottom: 15,
      },
      recipeTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 7,
        color: '#2c3e50',
      },
      ingredientsList: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ecf0f1',
        paddingTop: 15,
      },
      ingredientText: {
        fontSize: 18,
        marginBottom: 8,
        color: '#34495e',
      },
      loadingText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: '#7f8c8d',
      },
      htmlBaseFontStyle: {
        fontSize: 16,
        color: '#34495e',
    },
    
      backButton: {
        position: 'absolute', // Set the back button to absolute position
        zIndex: 1, // Ensure the back button is on top
    },
    errorContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        margin: 10,
        borderRadius: 18,
        shadowColor: '#84251E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },

    errorMessage: {
        color: '#84251E',
        fontSize: 18,
        marginLeft: 10,
        margin: 10
    },

    additionalTopBorder: {
        width: '100.5%',
        alignSelf: 'center',
        shadowColor: '#84251E',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
      },

    textContainer: {
        backgroundColor: '#FFFAEE',
        paddingHorizontal: 10, 
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: '#84251E', // Replace with the color you want for the additional line
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderLeftColor: '#84251E',
        borderRightColor: '#84251E',
        width: '100%',
        alignSelf: 'center',

    },
    topLabel: {
        fontSize: 16,
        color: '#84251E',
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 5,  // Adjust for spacing between the label and the container
        marginLeft: 16,    // Optional: for some left spacing
        marginTop: 15,
    },
    selectedItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 4,
        borderTopWidth: 4,
        borderTopColor: '#84251E',
        TopLeftRadius: 10,
        TopRightRadius: 10,
        margin: 15,
        marginVertical: 5,
        shadowColor: '#000',
        height: Dimensions.get('window').height * 0.3, // Set the height to 50% of screen height
    },
    
    selectedItemsLabel: {
        fontSize: 16,
        color: '#84251E',
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderTopColor: '#84251E', // Replace with the color you want for the additional line
        borderRadius: 18,
        width: '100%',
        marginBottom: 5,  // Adjust for spacing between the label and the container
        marginLeft: 20,    // Optional: for some left spacing
        marginTop: 15,
    },
    
    spaceBelow: {
      marginBottom: 17, // Adjust the space as needed
    },

    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        marginTop: 7,
        marginRight: 7,
        borderRadius: 18,
        shadowColor: '#84251E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },

    selectedItemText: {
        color: '#84251E',
        fontSize: 16,
        marginLeft: 10,
    },

    removeItemButton: {
        marginLeft: 5,
        padding: 2,
    },

    removeItemText: {
        color: '#84251E',
        fontSize: 16,
        marginRight: 7,
    },

    // Add this to your styles.js or wherever you define your styles
lineStyle: {
    borderBottomColor: '#84251E', // You can choose any color you like
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'flex-start',
    marginVertical: 10, // Adjust the vertical spacing as needed
    marginBottom: 20
  },
    
});
