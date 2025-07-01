package desafio5.service;

import desafio5.exception.BuscaVaziaRunTime;
import desafio5.exception.RegraNegocioRunTime;
import desafio5.model.entity.Denuncia;
import desafio5.model.entity.Fotos;
import desafio5.model.repo.DenunciaRepo;
import desafio5.model.repo.FotosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FotosService {
    @Autowired
    FotosRepo repo;

    @Autowired
    DenunciaRepo denunciaRepo;

    @Transactional
    public Fotos salvar(Fotos fotos) {

        verificarFotos(fotos);

        return repo.save(fotos);
    }

    @Transactional
    public Fotos atualizar(Fotos fotos) {

        verificarFotos(fotos);

        verificarId(fotos.getId_fotos());

        return repo.save(fotos);
    }

    public Optional<Fotos> buscarPorId(UUID id) {
        verificarId(id);
        return repo.findById(id);
    }

    public Optional<Fotos> buscarPorDenuncia(UUID id) {
        Denuncia denuncia = denunciaRepo.findById(id).get();
        Optional<Fotos> fotos = repo.findFotosByDenuncia(denuncia);

        return fotos;
    }

    @Transactional
    public List<Fotos> listarTodos() {
        List<Fotos> lista = repo.findAll();

        if (lista.isEmpty()){
            throw new BuscaVaziaRunTime();
        }

        return lista;
    }

    @Transactional
    public void deletar(UUID id){
        verificarId(id);
        repo.deleteById(id);
    }

    private void verificarId(UUID id) {
        if (id == null)
            throw new RegraNegocioRunTime("ID inválido");
        if (!repo.existsById(id)){
            throw new RegraNegocioRunTime("ID não encontrado");
        }
    }

    private void verificarFotos(Fotos fotos) {
        if (fotos == null)
            throw new RegraNegocioRunTime("Fotos inválidas");
    }

}
