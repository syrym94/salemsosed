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
    padding: "0 120px",
    alignItems: "center",
    flexDirection: "row"
  },
  h: {
    fontFamily: "SFUIDisplay-Medium",
    color: "#9eab97",
    fontWeight: 500,
    fontSize: "70px",
    marginBottom: "100px"
  },
  wrap: {
    width: "1096px",
    display: "flex",
    flexDirection: "row",
    height: "616px",
    justifyContent: "space-between"
  },
  wrap1: {
    width: "470px",
    height: "100%"
  },
  wrap2: {
    width: "540px",
    height: "100%"
  },
  head: {
    color: "#9eab97",
    fontFamily: "SFUIDisplay-Semibold",
    fontWeight: 600,
    lineHeight: "27px",
    fontSize: "18px",
    marginBottom: "30px"
  },
  text: {
    fontFamily: "SFUIDisplay-Regular",
    fontWeight: 100,
    color: "#b5b6b9",
    lineHeight: "27px",
    fontSize: "15px",
    marginBottom: "40px"
  }
});
export default styles;
