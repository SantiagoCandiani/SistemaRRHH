package scandiani.rrhh.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import scandiani.rrhh.modelos.Empleado;

public interface EmpleadoRepositorio  extends JpaRepository<Empleado, Integer> {
}
