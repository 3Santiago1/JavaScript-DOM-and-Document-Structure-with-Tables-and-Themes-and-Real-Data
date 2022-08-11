//class to hold and describe data
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;

    }
}
//a getData function to setup the data
function getData() {
    console.log("getdata() started");
    var loadedData = loadData();
    return loadedData;
}

//a dataRow function to setup the data
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


//updateDisplay to tie it all together
function updateDisplay() {
    console.log("updateDisplay() started");

    theTime = new Date();
    //for troubleshooting...
    console.log(theTime.getHours()
        + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //to update the screen
    document.getElementById("currentTime").innerHTML =
        theTime.getHours()
        + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

}

var timeRead = data[index].time_seconds;
if (timeRead >= 10) {
    document.getElementById("data").rows["sedonds"].innerHTML =
        dataRow("Time Elapsed", data[index].time_seconds, "seconds")
    document.getElementById("data").rows["latitude"].innerHTML =
        dataRow("Latitude", data[index].latitude, "&#176");
    document.getElementById("data").rows["longitude"].innerHTML =
        dataRow("Longitude", data[index].longitude, "&#176");
    document.getElementById("data").rows["gps_altitude"].innerHTML =
        dataRow("gps_altitude", data[index].gps_altitude, "meters");
    document.getElementById("data").rows["bmp_altitude"].innerHTML =
        dataRow("bmp_altitude", data[index].rows.bmpSensor_altitude, "meters");
    document.getElementById("data").rows("bmp_pressure").innerHTML =
        dataRow("bmp_pressure", data[index].bmpSensor_pressure, "atm");
    document.getElementById("data").rows["bmp_temperature"].innerHTML =
        dataRow("bmp_temperature", data[index].bmpSensor_temp, "&#176; c");
    document.getElementById("data").rows["dig_temperature"].innerHTML =
        dataRow("dig_temperature", data[index].digSensor_temp, "&#176; c");
    document.getElementById("data").rows["css_temperature"].innerHTML =
        dataRow("css_temperature", data[index].cssSensor_temp, "&#176; c");
    document.getElementById("data").rows["css_eCO2"].innerHTML =
        dataRow("css_eCO2", data[index].cssSensor_eCO2, "ppm");
    document.getElementById("data").rows["css_TVOC"].innerHTML =
        dataRow("css_TVOC", data[index].cssSensor_TVOC, "ppm");
    document.getElementById("data").rows["UV"].innerHTML =
        dataRow("UV", data[index].UV, "");
    document.getElementById("data").rows["accelX"].innerHTML =
        dataRow("accel X", data[index].accelX, "m/s^2");
    document.getElementById("data").rows["accelY"].innerHTML =
        dataRow("accel Y", data[index].accelY, "m/s^2");
    document.getElementsById("data").rows["accelZ"].innerHTML =
        dataRow("accel Z", data[index].accelZ, "m/s^2");
    document.getElementById("data").rows["magneticX"].innerHTML =
        dataRow("magnetic X", data[index].magneticX, "");
    document.getElementById("data").rows["magneticY"].innerHTML =
        dataRow("magnetic Y", data[index].magneticY, "");
    document.getElementById("data").rows["magneticZ"].innerHTML =
        dataRow("magnetic Z", data[index].magneticZ, "");
    document.getElementById("data").rows["gyroX"].innerHTML =
        dataRow("gyro X", data[index].gyroX, "&#176;/s");
    document.getElementById("data").rows["gyroY"].innerHTML =
        dataRow("gyro Y", data[index].gyroY, "&#176;/s");
    document.getElementById("data").rows["gyroZ"].innerHTML =
        dataRow("gyro Z", data[index].gyroZ, "&#176;/s");
}

if (index < 500) {
    index++;
} else {
    index = 0;
}
