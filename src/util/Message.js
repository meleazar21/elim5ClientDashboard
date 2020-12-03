import swal from 'sweetalert2';

/**
 * Class for Message
 * @author Eleazar Martinez
 * */
export default class Message {

    /**
     * Function for warning messages
     * @param {any} texto
     * @author Eleazar Martinez
     */
    static warning(texto) {
        swal.fire({ title: 'Advertencia', text: texto, icon: 'warning' });
    }

    /**
     * Funcion para crear un mensaje de error
     * @param {any} texto
     * @author Eleazar Martinez
     */
    static error(texto) {
        swal.fire({ title: 'Error', text: texto, icon: 'error' });
    }

    /**
     * Funcion para crear un mensaje de exito
     * @param {any} texto
     * @author Eleazar Martinez
     */
    static success(texto) {
        swal.fire({ title: 'Exitoso', text: texto, icon: 'success' });
    }
}