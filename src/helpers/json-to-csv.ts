import json2csv from "json2csv";

const jsonToCsv = (json: JSON): string => {
    return json2csv.parse(json)
}