import json2csv from "json2csv";

export const jsonToCsv = (json: any): string => {
    return json2csv.parse(json)
}