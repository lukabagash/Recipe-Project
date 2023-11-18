import { StyleSheet, Dimensions, Platform } from 'react-native';


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
        margin: 10,
        backgroundColor: '#FFFAEE',
        borderRadius: 10,
        borderColor: '#FFFDF7', // Set the border color
        //elevation: 5, // This adds shadow on Android
    },

    likes: {
        fontSize: 14,
        //color: '#FFFFFF', // A neutral color for the text
        marginTop: 4, // Spacing from the title to the likes
        //fontWeight: 'bold', // Make it bold to stand out a little
      },
    imageContainer: {
        // Define the size of the container to be slightly smaller than the image
        height: 120, // e.g., 200
        width: 120, // e.g., 300
        borderRadius: 10,
        overflow: 'hidden', // This ensures that anything outside this container is clipped
        elevation: 5
    },

    image: {
        // Make the image itself larger than the container
        height: 145, // e.g., 220
        width: 145, // e.g., 320
        alignSelf: 'center',
        // Adjust these values to control which part of the image is visible
        marginTop: -13, // e.g., -10
        //marginLeft: -10, // e.g., -10
    },

    title: {
        color: '#691914',
        fontWeight: 'bold',
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
        
        color: '#691914',  // Or any other color you prefer
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

    instContainer: {
        borderRadius: 10,
        backgroundColor: '#FFFDF7',
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
        color: '#84251E',
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
        color: '#691914',
    },

    instructionText: {
        fontSize: 13,
        marginRight: 8,
        color: '#691914',
    },

    loadingText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: '#84251E',
    },

    htmlBaseFontStyle: {
        fontSize: 16,
        marginRight: 8,
        color: '#691914',
        width: '100%',
    },

    htmlBaseFontStyle2: {
        fontSize: 16,
        marginRight: 8,
        color: '#691914',
        width: '92%',
        marginLeft: 15
    },
    
    backButton: {
        position: 'absolute', // Set the back button to absolute position
        zIndex: 1, // Ensure the back button is on top
        marginLeft: 6
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
        ...Platform.select({
          ios: {
            shadowColor: '#84251E',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
          android: {
            elevation: 20,
            // You can add additional Android-specific styles here
          },
        }),
      },

    anotherBorder: {
        flexWrap: 'wrap',
        borderBottomWidth: 4,
        borderBottomColor: '#84251E',
        padding: 2,
        width: '90%',
        alignSelf: 'center',
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
        height: '113%'
    },
    topLabel: {
        fontSize: 16,
        color: '#84251E',
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 5,  // Adjust for spacing between the label and the container
        marginLeft: 16,    // Optional: for some left spacing
        marginTop: 15,
        height: 50
    },
    selectedItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 4,
        TopLeftRadius: 10,
        TopRightRadius: 10,
        margin: 15,
        marginVertical: 5,
        shadowColor: '#000',
        maxHeight: Dimensions.get('window').height * 0.1, // Set the height to 50% of screen height
    },
    shadowContainer: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
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
    ingredients: {
        flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the text horizontally
    backgroundColor: '#FFFFFF',
    marginRight: 7,
    borderRadius: 18,
    paddingHorizontal: 10, // Horizontal padding
    paddingVertical: 5, // Vertical padding
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
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%'
  },
    
  title4: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#84251E',
  }

});
