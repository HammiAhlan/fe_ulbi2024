import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";

//test

function pushData(){
    var hari_kerja = getValue("hari_kerja");

    let data = {
        longitude : parseFloat(getValue("longitude")),
        latitude : parseFloat(getValue("latitude")),
        location : getValue("location"),
        checkin : getValue("checkin"),
        phone_number : getValue("phone_number"),
        biodata : {
            nama : getValue("nama"),
            phone_number : getValue("phone_number"),
            jabatan : getValue("jabatan"),
            jam_kerja : [{
                durasi : parseInt(getValue("durasi")),
                jam_masuk : getValue("jam_masuk"),
                jam_keluar : getValue("jam_keluar"),
            }],
            hari_kerja : hari_kerja.split(",")
        }
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);