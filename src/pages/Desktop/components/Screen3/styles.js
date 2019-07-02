import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        width: "100%",
        height: "100%"
    },
    centered:{
        width:"100%",
        height: "100%",
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        position: "relative",
        zIndex: 10
    },
    video:{
        position: "absolute",
        top:0,
        bottom:0,
        right:0,
        height: '100%',
        zIndex: -1
    },
    textInfo: {
      zIndex: 1000,
      marginLeft: '120px'
    },
    h:{
        fontFamily: "SFUIDisplay-Medium",
        color: "#9eab97",
        fontWeight: 500,
        fontSize: "70px"
    },
    t:{
        color: "#b5b6b9",
        lineHeight: "26px",
        fontSize: "15px",
        fontWeight: 400,
        marginTop: "30px",
        fontFamily: "SFUIDisplay-Regular"
    }
});
export default styles;