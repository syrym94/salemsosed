import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        width: "100%",
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centered:{
        width:"100%",
        height: "100%",
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        position: "relative"
    },
    video:{
        position: 'absolute',
        height: '100%',
        width: "100%",
        zIndex: -1
    },  
    h:{
        fontFamily: "SFUIDisplay-Medium",
        color: "#9eab97",
        fontWeight: 500,
        fontSize: "70px"
    },
    t:{
        color: "#b5b6b9",
        lineHeight: "40px",
        fontSize: "20px",
        fontWeight: 300,
        marginTop: "30px",
        fontFamily: "SFUIDisplay-Regular",
        marginLeft: '1px'
    },
    textInfo:{
        zIndex: 10,
        marginLeft: '120px'
    }
});
export default styles;