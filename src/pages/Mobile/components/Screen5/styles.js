import {StyleSheet} from 'aphrodite';
const styles = StyleSheet.create({
    page:{
        height: '100vh',
        backgroundColor: "#9eab97"
    },
    swiperSlide:{
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    swiperH:{
        color: "white",
        fontFamily: "SFUIDisplay-Medium",
        fontSize: '160%',
        textAlign: "left",
        width: "90%",
    },
    swiperT:{
        fontFamily: "SFUIDisplay-Regular",
        color: "white",
        fontSize: '110%',
        width: "90%",
        marginTop: "5%"
    }
});
export default styles;