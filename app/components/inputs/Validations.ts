// Validations.ts
export const emailValidation = {
    required: 'El correo electrónico es obligatorio',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Correo electrónico no válido',
    },
  };
  
  export const passwordValidation = {
    required: 'La contraseña es obligatoria',
    minLength: {
      value: 8,
      message: 'La contraseña debe tener al menos 8 caracteres',
    },
    // Agrega tus propias validaciones personalizadas si es necesario
  };