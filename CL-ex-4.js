// Start coding here.
let lightBulbStatus;

switch (lightBulbStatus) {
  case "On":
    lightBulbStatus = "Light bulb is on";
    break;
  case "Off":
    lightBulbStatus = "Light bulb is off";
    return;
  default:
    lightBulbStatus = "Light bulb is broken";
}

console.log(lightBulbStatus);
