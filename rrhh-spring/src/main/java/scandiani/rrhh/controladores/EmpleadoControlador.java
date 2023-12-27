package scandiani.rrhh.controladores;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import scandiani.rrhh.modelos.Empleado;
import scandiani.rrhh.servicios.IEmpleadoServicio;

import java.util.List;

@RestController
@RequestMapping("rrhh-app") //http://localhost:8080/rrhh-app/
@CrossOrigin(value = "http://localhost:3000")
public class EmpleadoControlador {
    //Para enviar informacion a consola
    private static final Logger logguer = LoggerFactory.getLogger(EmpleadoControlador.class);

    @Autowired
    private IEmpleadoServicio empleadoServicio;

    @GetMapping("/empleados") //http://localhost:8080/rrhh-app/empleados
    public List<Empleado> obtenerEmpleados() {
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach(empleado -> logguer.info(empleado.toString()));
        return empleados;
    }

    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado) {
        logguer.info("Empleado a agregar: " + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }

}//Class
