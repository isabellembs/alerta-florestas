package desafio5.security;

import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Base64;

public class SecurityConstants {
    // Converte a chave Base64 para SecretKey
    public static final SecretKey KEY = Keys.hmacShaKeyFor(
            Base64.getDecoder().decode(System.getenv("JWT_SECRET_KEY"))
    );
    public static final String HEADER_NAME = "Authorization";
    public static final Long EXPIRATION_TIME = 1000L * 60 * 30; // 30 minutos
}