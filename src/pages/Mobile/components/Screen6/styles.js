import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        height: "100%",
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
    },
    video:{
        width: '100%'
    },
    textWrap:{
        position: 'absolute',
        top: 0,
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "10%"
    },
    h:{
        color: "#b5bfb0",
        fontSize: "160%",
        fontFamily: "SFUIDisplay-Bold",
        fontWeight: 700,
        width: '90%'
    },
    t:{
        fontFamily: "SFUIDisplay-Medium",
        fontSize: "120%",
        marginTop: "10%",
        color: "#b5bfb0",
        width: '90%'
    },
    tBold:{
        fontWeight: 'bold',
        textDecoration: "none"
    },
    instaWrap:{
        marginTop: "5%",
        width: "90%",
        display: 'flex',
        flexDirection: 'row'
    }
});
export default styles;