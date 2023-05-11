const validation = (userData) => {
    const errors = {};

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userData.email)) {
        errors.email = 'El email no es valido'
    }
    if (!userData.email) {
        errors.email = 'Debe ingresar un email'
    }
    if (userData.email.length > 35) {
        errors.email = 'El email debe tener menos de 35 caracteres'
    }
    if (!/.*[0-9].*/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un numero'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;