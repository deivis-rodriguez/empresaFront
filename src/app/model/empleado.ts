export class Empleado {
    
    idEmpleado!: string;
    nombre: string;
    apellido: string;
    salario: string;
    cargo: string;
    pagos: Array<number>;
    proyectos!: Array<{nombre:string, codigo: string,fechaInicio: Date, fechaFin: Date}>;

    constructor(nombre: string, apellido: string, salario: string, cargo: string, pagos: Array<number>){
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.pagos = pagos;
        this.nombre = nombre;
    }

}