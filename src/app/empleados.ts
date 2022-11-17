export interface Empleado {
    nombre: string;
    edad: number;
    area: string;
    pagos: Array<number>;
    siDetalles: boolean;
}

export const empleados: Array<Empleado> = [
    {
        nombre: 'marcos david alvarez',
        edad: 19,
        area: 'seguridad',
        pagos: [12340, 31200, 16530],
        siDetalles: true
    },
    {
        nombre: 'david Fernandez Posada',
        edad: 24,
        area: 'informatica',
        pagos: [23919, 29112, 12002],
        siDetalles: false
    },
    {
        nombre: 'adriana lucia gonzales',
        edad: 32,
        area: 'administrativa',
        pagos: [12334, 13556, 19630],
        siDetalles: false
    },
    {
        nombre: 'angela lopez',
        edad: 28,
        area: 'administrativa',
        pagos: [15990, 26890, 12030],
        siDetalles: false
    },
    {
        nombre: 'Maria de Jesus Gomez',
        edad: 22,
        area: 'financiera',
        pagos: [23400, 12300, 23420],
        siDetalles: false
    }

]