
export const baseUrlApi = 'https://elim5api.azurewebsites.net/';

//Request Header
export const GetHeaderRequest = () => {
    return {
        'Content-Type': 'application/json', 
    }
};

//Response Body
export const GetResponseBody = pResponse => {
  
    const contentType = pResponse.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return pResponse.json();
    } else {
        switch (pResponse.status) {
            case 401:
                return { exitoso: false, mensajeRespuesta: 'No tiene permisos para acceder a este método.', codigoError: 3 };
            case 500:
                return { exitoso: false, mensajeRespuesta: 'Ocurrió un error en el servidor.', codigoError: 999 };
            default:
                return { exitoso: false, mensajeRespuesta: 'Ocurrió un error realizando la acción.', codigoError: 999 };
        }
    }
};