export class Config {
  static TELEGRAM_APP_ID = 27551777; // YOUR APP ID EX : 324893724923
  static TELEGRAM_APP_HASH = e95d54fab963d5e374b9c5371a2a9b58; // YOUR APP HASH EX: "aslkfjkalsjflkasf"
  static MODE = 2; // 1 FOR 1 BY 1 RUN & 2 FOR MASS RUN
  static USEAUTOUPGRADE = true; //USE AUTO UPGRADE OR NO
  static REPAINTER = true; //USE INCORRECT COLOR REPAINTER
  static CUSTOMDELAYINMIN = 60; //CUSTOM DELAY IN MINUTES EX : 60 = 60 minutes
  static TEMPLATE = {
    templateID: 1972552043,
    startArea: 900375,
    endArea: 915390,
    correctColor: "#ffffff",
  }; // configure fren template by finding the id, color, start area and end area (is a rectangle start from top left, and end on bottom right)
}
