import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%"
  },
  centered: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "relative"
  },
  centeredSmall:{
    '@media(max-height: 878px)':{
      alignItems: "flex-start",
    }
  },
  textInfo: {
    marginLeft: "120px",
    zIndex: 9999
  },
  textInfoSmall:{
    '@media(max-height: 878px)':{
      marginTop: "40px"
    }
  },
  video: {
    position: "absolute",
    height: "100%",
    top:0,
    bottom: 0,
    left:0,
    zIndex: 5,
  },
  h: {
    fontFamily: "SFUIDisplay-Bold",
    color: "#b5bfb0",
    fontWeight: 700,
    fontSize: "42px",
    lineHeight: "55px"
  },
  hSmall:{
    '@media(max-height: 878px)':{
      fontSize: "36px"
    }
  },
  wrap: {
    width: "342px",
    height: "256px",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#b5bfb0"
  },
  wrapSmall: {
    '@media(max-height: 878px)':{
      marginTop: "20px",
      height: '160px'
    }
  },
  t1: {
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 100,
    fontSize: "30px",
    lineHeight: "39px"
  },
  t2: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "18px"
  },
  t3: {
    fontFamily: "SFUIDisplay-Medium",
    fontSize: "18px",
    fontWeight: 500,
    color: "#b5bfb0"
  },
  instafeed: {
    position: "absolute",
    bottom: 60,
    left: 120,
    display: "flex",
    flexDirection: "row",
    zIndex: 999
  },
  instafeedSmall:{
    '@media(max-height: 878px)':{
      bottom: 20
    }
  },
  instapic: {
    height: 120,
    width: 120,
    marginRight: 10
  }
});
export default styles;
