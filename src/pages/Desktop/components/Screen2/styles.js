import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%"
  },
  centered: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "relative"
  },
  video: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -1
  },
  textInfo: {
    zIndex: 10,
    marginLeft: '120px'
  },
  h: {
    fontFamily: "SFUIDisplay-Medium",
    color: "#9eab97",
    fontWeight: 500,
    fontSize: "70px"
  },
  t: {
    color: "#b5b6b9",
    lineHeight: "24px",
    fontSize: "14px",
    fontWeight: 300,
    marginTop: "30px",
    fontFamily: "SFUIDisplay-Regular"
  }
});
export default styles;
