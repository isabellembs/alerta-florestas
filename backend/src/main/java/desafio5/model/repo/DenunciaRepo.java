package desafio5.model.repo;

import desafio5.model.entity.Denuncia;
import desafio5.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface DenunciaRepo extends JpaRepository<Denuncia, UUID> {

    @Query("SELECT d FROM Denuncia d WHERE LOWER(d.titulo) LIKE LOWER(CONCAT('%', :tituloDenuncia, '%'))")
    List<Denuncia> findByTitulo(String tituloDenuncia);

    List<Denuncia> findByUsuario(Usuario usuario);
}
