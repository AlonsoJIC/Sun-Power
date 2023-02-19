//AUTH
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  //role: 'User' | 'Admin';  //CAMBIAR ESTO SI NO DA ERROR EN ALGUN MOMENTO POR CULPA DEL API DEL CURSO
}

export interface CreateUserDTO extends Omit<User, 'id'> { }
