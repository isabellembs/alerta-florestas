package desafio5.model.repo;

import desafio5.model.entity.Denuncia;
import desafio5.model.entity.Fotos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface FotosRepo extends JpaRepository<Fotos, UUID> {

    Optional<Fotos> findFotosByDenuncia(Denuncia denuncia);

}
