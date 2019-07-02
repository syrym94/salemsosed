import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        minHeight: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    video:{
        width: '100%'
    },
    textWrap:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: "5%"
    },
    text:{
        width: '90%',
    },
    h:{
        color: "#9eab97",
        fontFamily: "SFUIDisplay-Medium",
        fontSize: '200%'
    },
    t:{
        fontFamily: "SFUIDisplay-Regular",
        color: "#b5b6b9",
        fontSize: '110%',
        marginTop: "5%",
        marginBottom: '5%'
    }
});
export default styles;