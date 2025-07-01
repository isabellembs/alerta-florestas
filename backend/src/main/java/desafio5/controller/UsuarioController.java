package desafio5.controller;

import desafio5.exception.BuscaVaziaRunTime;
import desafio5.exception.RegraNegocioRunTime;
import desafio5.model.entity.DTOs.DenunciaDTO;
import desafio5.model.entity.DTOs.UsuarioDTO;
import desafio5.model.entity.Denuncia;
import desafio5.model.entity.ENUMs.Status;
import desafio5.model.entity.Usuario;
import desafio5.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/usuario")
@Validated
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/salvar")
    public ResponseEntity salvar(@RequestBody @Valid UsuarioDTO request) {
        Usuario usuario = Usuario.builder()
                                .nome(request.getNome())
                                .email(request.getEmail())
                                .senha(passwordEncoder.encode(request.getSenha()))
                                .build();
        try {
            Usuario salvo = usuarioService.salvar(usuario);
            return new ResponseEntity<>(salvo, HttpStatus.CREATED);
        } catch (RegraNegocioRunTime e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }    
    }

    @PutMapping(value = "{id}")
    public ResponseEntity atualizar(@PathVariable UUID id, @RequestBody @Valid UsuarioDTO request) {
        try {
            // Recupera o usuario existente do banco de dados
            Optional<Usuario> usuarioExistenteOptional = usuarioService.buscarPorId(id);
            Usuario usuarioExistente = usuarioExistenteOptional.get();

            if (usuarioExistente == null) {
                return ResponseEntity.notFound().build(); // Retorna 404 se o usuario não for encontrado
            }

            // Atualiza os campos passados no DTO
            if (request.getNome() != null && !request.getNome().trim().isEmpty()) {
                usuarioExistente.setNome(request.getNome());
            }
            if (request.getEmail() != null && !request.getEmail().trim().isEmpty()) {
                usuarioExistente.setEmail(request.getEmail());
            }
            if (request.getSenha() != null && !request.getSenha().trim().isEmpty()) {
                usuarioExistente.setSenha(passwordEncoder.encode(request.getSenha()));
            }
            // Atualiza o usuario no banco de dados
            Usuario atualizado = usuarioService.atualizar(usuarioExistente);

            return ResponseEntity.ok(atualizado);
        } catch (RegraNegocioRunTime e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/buscarPorId/{id}")
    public ResponseEntity buscarPorId(@PathVariable UUID id) {
        try {
            Usuario usuario = usuarioService.buscarPorId(id).get();
            return ResponseEntity.ok(usuario);
        
        } catch (RegraNegocioRunTime e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deletar(@PathVariable UUID id){
        try {
            usuarioService.deletar(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (RegraNegocioRunTime e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/enviarDenuncia/{id}")
    public ResponseEntity enviarDenuncia(@PathVariable UUID id, @RequestBody DenunciaDTO request) {
        Usuario usuario = usuarioService.buscarPorId(id).get();
        Denuncia denuncia = Denuncia.builder()
                .usuario(usuario)
                .titulo(request.getTitulo())
                .descricao(request.getDescricao())
                .latitude(request.getLatitude())
                .longitude(request.getLongitude())
                .anonimo(request.isAnonimo())
                .status(Status.ENVIADO)
                .data(LocalDate.now())
                .build();
        try {
            Denuncia salvo = usuarioService.enviarDenuncia(denuncia);
            return new ResponseEntity<>(salvo, HttpStatus.CREATED);
        } catch (RegraNegocioRunTime e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // -------------------- endpoints de consulta ---------------------

    @GetMapping("/buscarPorNome/{nomeUsuario}")
    public ResponseEntity buscarPorNome(@PathVariable String nomeUsuario) {
        try {
            List<Usuario> lista = usuarioService.buscarPorNome(nomeUsuario);
            return ResponseEntity.ok(lista);

        } catch (RegraNegocioRunTime | BuscaVaziaRunTime e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/buscarNomePorDenunciaId/{denunciaId}")
    public ResponseEntity buscarNomePorDenunciaId(@PathVariable UUID denunciaId) {
        try {
            String nome = usuarioService.buscarNomePorDenunciaId(denunciaId);
            return ResponseEntity.ok(nome);

        } catch (RegraNegocioRunTime | BuscaVaziaRunTime e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/listarTodos")
    public ResponseEntity listarTodos() {
        try {
            List<Usuario> lista = usuarioService.listarTodos();
            return ResponseEntity.ok(lista);

        } catch (RegraNegocioRunTime | BuscaVaziaRunTime e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
}
