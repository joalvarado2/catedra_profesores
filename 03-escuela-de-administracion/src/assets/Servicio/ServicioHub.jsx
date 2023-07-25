import React, { useEffect } from 'react'

const ServicioHub = ({
    setProfesores
}) => {

    useEffect(() => {
        consumo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const consumo = async () => {
        try {
            let cabeceras = new Headers();
            cabeceras.append("Accept", "application/sparql-results+json");
            cabeceras.append("Cookie", "JSESSIONID=yQ/aoiFowjTExmKLgNwcKbebWZORf8gWmYwX3/7adxuP/tqDLB+OD7O0z3RYaBEaJuDfhMbmMcw9YEjGPZQNdg==; cookiesession1=678B28768D56A177FE4DD0BF01297E61");
            let opcionesSolicitud = {
                method: 'GET',
                headers: cabeceras,
                redirect: 'follow'
            };
            let pass = 'Ur2023'
            let mail = 'fredyal.gonzalez@urosario.edu.co'
            let queryData = `https://research-hub.urosario.edu.co/vivo11/api/sparqlQuery?email=${mail}&password=${pass}&query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20vivo%3A%20%3Chttp%3A%2F%2Fvivoweb.org%2Fontology%2Fcore%23%3E%0APREFIX%20foaf%3A%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0APREFIX%20obo%3A%20%20%20%20%20%20%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F%3E%0APREFIX%20vcard%3A%20%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23%3E%0APREFIX%20vlocal%3A%20%20%20%3Chttp%3A%2F%2Fresearch-hub.urosario.edu.co%2Fontology%2Fvlocal%23%3E%0APREFIX%20vitro-public%3A%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2Fpublic%23%3E%0APREFIX%20rdf%3A%20%20%20%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20rdfs%3A%20%20%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0ASELECT%20DISTINCT%20%3Fperson%20%3FPersonTitle%20%28str%20%28%3FprsnLabel%29%20AS%20%3FpersonLabel%29%20%20%3Femail%20%3Ftelefono%20%28str%20%28%3FthumbnailURL%29%20AS%20%3Fthumbnail%29%20%3FdirLabel%20%28str%28%3FdepartmentLabel%29%20AS%20%3ForgLabel%29%20%3FlastGrade%20%3Forg%20%20%28group_concat%28%3Fmateria_label%3Bseparator%3D%22%2C%20%22%29%20as%20%3Fmaterias%29%0AWHERE%20%7B%0A%20%20%20%20%3Chttp%3A%2F%2Fresearch-hub.urosario.edu.co%2Findividual%2FnSCHOOL13-EMCS%3E%20vivo%3ArelatedBy%20%3Fposn%20.%0A%20%20%20%20%3Chttp%3A%2F%2Fresearch-hub.urosario.edu.co%2Findividual%2FnSCHOOL13-EMCS%3E%20rdfs%3Alabel%20%3FdepartmentLabel.%0A%20%20%20%20%3Fposn%20a%20vivo%3APosition%20.%0A%20%20%20%20%3Fposn%20%20vivo%3Arelates%20%3Fperson%20.%0A%20%20%20%20%3Fperson%20a%20vlocal%3AUREntity%20.%0A%20%20%20%20%3Fperson%20rdfs%3Alabel%20%3FprsnLabel%20.%0A%20%20%20%20%3Fperson%20vivo%3AhrJobTitle%20%3FPersonTitle.%0A%20%20%20%20%3Fperson%20%20%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FARG_2000028%3E%20%3FvcardUri.%0A%20%20%20%20%3Fperson%20%3Chttp%3A%2F%2Fvivoweb.org%2Fontology%2Fcore%23hasResearchArea%3E%20%3Fconcepto.%0A%20%20%20%20%3Fperson%20%3Chttp%3A%2F%2Fresearch-hub.urosario.edu.co%2Fontology%2Fvlocal%23degreeObtained%3E%20%3FlastGrade.%0A%20%20%20%20%3Fconcepto%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23label%3E%20%3Fmateria_label.%0A%20%20%20%20%3FvcardUri%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2F0.7%23mostSpecificType%3E%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23Individual%3E.%0A%20%20%20%20%3FvcardUri%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23hasEmail%3E%20%20%3FemailUri.%0A%20%20%20%20%3FemailUri%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23email%3E%20%3Femail.%0A%20%20%20%20%3FvcardUri%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23hasTelephone%3E%20%3Ftelephone_uri.%0A%20%20%20%20%3Ftelephone_uri%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23telephone%3E%20%3Ftelefono.%0A%20%20%20%20OPTIONAL%7B%3FvcardUri%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23hasAddress%3E%20%3Fdir.%0A%20%20%20%20%20%3Fdir%20%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Fvcard%2Fns%23streetAddress%3E%20%3FdirLabel.%20%7D%0A%20%20%20%20OPTIONAL%7B%0A%20%20%20%20%3Fperson%20%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2Fpublic%23mainImage%3E%20%3Fimageuri.%0A%20%20%20%20%3Fimageuri%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2Fpublic%23thumbnailImage%3E%20%3FthumbnailImage.%0A%20%20%20%20%3FthumbnailImage%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2Fpublic%23downloadLocation%3E%20%3FdownloadLocation.%0A%20%20%20%20%20%3FdownloadLocation%20%3Chttp%3A%2F%2Fvitro.mannlib.cornell.edu%2Fns%2Fvitro%2Fpublic%23directDownloadUrl%3E%20%3FthumbnailURL.%0A%20%20%20%20%7D%0A%7D%0AGROUP%20BY%20%3Fperson%20%3FPersonTitle%20%3FprsnLabel%20%20%3Femail%20%20%3Ftelefono%20%3FthumbnailURL%20%20%3FdirLabel%20%20%3FdepartmentLabel%20%3FlastGrade%20%3Forg%20%0AORDER%20BY%20%3FpersonLabel`
            let data = await fetch(`${queryData}`, opcionesSolicitud)
            let resData = await data.json()
            let informacionProfesores = resData.results.bindings
            informacionProfesores.sort((a, b) => {
                if (a.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '') < b.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '')) {
                    return -1
                }
                if (a.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '') > b.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '')) {
                    return 1;
                }
                if (a.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase() < b.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase()) {
                    return -1;
                }
                if (a.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase() > b.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase()) {
                    return 1;
                }
                return 0;
            })
            setProfesores(informacionProfesores)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        </>
    )
}

export default ServicioHub
