import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJsonConverter = () => {
    const [jsonData, setJsonData] = useState(null);

    const handleFileChange = (e) => {

        // leer archivo XLMS y crear instancia
        const file = e.target.files[0];
        const reader = new FileReader();

        // conversion de archivo excel a json
        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);
            setJsonData(json);

        // filtrado de datos
            const entries = Object.entries(json);
            entries.map((arr) => {
                const newObject = {
                    "nombres": arr[1].NOMBRES,
                    "correo": arr[1].CORREO_PERSONAL,
                    "area": arr[1].AREA,
                    "departamento": arr[1].DEPARTAMENTO,
                }
                console.log(newObject)
            })
        };

        reader.readAsBinaryString(file);
    };


    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {jsonData && (

                <pre>{JSON.stringify(jsonData[1], null, 2)}</pre>
            )}
        </div>
    );
};

export default ExcelToJsonConverter;
