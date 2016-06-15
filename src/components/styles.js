export var styles = {
  logo:{
    height: "80%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5, 
    display: "block",
    float: "left"
  },
  toolbar: {
    color: "white",
    backgroundColor: "#C0C0C0",
    width: "100%", 
    height: 40, 
    position: "fixed"
  },
  buttons: {
    base: {
      height: "100%",
      width: 150,
      border: "none",
      fontSize:"15px", 
      fontFamily: "sans-serif"
    },
    more: {
      width: 75.88,
      backgroundColor: "gray",
      marginLeft: "3px"
    },
    run: {
      notRunning: {
        float: "right",
        backgroundColor: "#317BCF"
      },
      running: {
        width: 150, 
        float: "right", 
        color: "gray"
      }
    },
    stop:{
      running: {
        float: "right", 
        color: "gray"
      },
      notRunning: {
        float: "right", 
        color: "gray",
        backgroundColor: "#FF0000"
      }
    },
    googleDrive: {
      connect2: {
        width: 194,
        backgroundColor: "gray"
      },
      connecting: {
        width: 194,
        backgroundColor: "gray",
        color: "#33331a"
      },
    },
    userInput:{
      width: 210,
      backgroundColor: "white",
      color:  "gray"
    },
    save:{
      backgroundColor: "gray"
    },
    share:{
      backgroundColor: "gray"
    }
  }  
};

